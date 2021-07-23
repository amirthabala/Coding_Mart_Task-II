import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { MapComponent } from './map/map.component';

const Config = {
    apiKey: "AIzaSyDhtArIp3HStXuff4RI_Nw807gZuRokTY8",
    authDomain: "cm-task2.firebaseapp.com",
    projectId: "cm-task2",
    storageBucket: "cm-task2.appspot.com",
    messagingSenderId: "132276774796",
    appId: "1:132276774796:web:244a07eae9811567df98a9",
    measurementId: "G-7YHXYH1TV2"
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(Config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
