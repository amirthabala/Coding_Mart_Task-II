import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  lines:string[];
  showHomeComponent = false;
  constructor(public auth: AuthService) {
    this.lines = [];
  }
  file:any;
  fileChanged(e:any) {
    this.file = e.target.files[0];
}
  uploadDocument(){
    let fileReader = new FileReader();
    fileReader.onload = (e:any) => {
      console.log(fileReader.result);
      var doc = <string>fileReader.result;
      if(doc==null){
        return
      }
      this.lines = doc.split('\n');

    }
    
    fileReader.readAsText(this.file);
  }

}
