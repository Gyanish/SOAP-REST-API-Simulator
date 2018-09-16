import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;
  link='';
 
  constructor(private http: HttpClient){}
    onGet(){
    this.http.get(this.link).subscribe(data => {
      this.data=data
      console.log(this.data)
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    }
  
  );

}
getItems() {
  return this.http
    .get<any[]>(this.link)
    .pipe(map(data => data));
}

  ngOnInit(): void {

  }
}










