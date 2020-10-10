import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase} from '@angular/fire/database';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { FormsModule } from '@angular/forms';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-add-page-local',
  templateUrl: './add-page-local.page.html',
  styleUrls: ['./add-page-local.page.scss'],
})
export class AddPageLocalPage implements OnInit {

	//get input variables
	public titre: string="";
	public description: string="";
	public adresse: string="";

  // Upload Task 
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details  
  fileName:string;
  fileSize:number;

  //Status check 
  isUploading:boolean;
  isUploaded:boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;

  
  constructor(private storage: AngularFireStorage, 
  	private database: AngularFirestore, 
  	public afDB : AngularFireDatabase) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('PlacesLocals');
    this.images = this.imageCollection.valueChanges();
  }


  uploadFile(event: FileList) {
    

    // The File object
    const file = event.item(0)

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }

    this.isUploading = true;
    this.isUploaded = false;


    this.fileName = file.name;

    // The storage path
    const path = `PlacesLocals/${file.name}`;

    
    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file);

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
        
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }

  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();

    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

  addLocalPlace(){

  	this.afDB.list('PlacesLocals/').push(
  	{
  		ville: 'Taza',
  		pays: 'Maroc',
  		titre: this.titre,
  		adresse: this.adresse,
  		mots_cles: this.titre,
  		description:this.description,
  		images: `/PlacesLocals/${this.fileName}`
   	});
}

 ngOnInit() {
 	
  }

}
