import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models/tasks'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    num: number;
    randNum: number;
    str: string;
    first_name: string;


    ngOnInit(){
    this.num = 7;
    this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    this.str = 'Hello Angular Developer!';
    this.first_name = 'Alpha';
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie", "melon"];
    this.loggedIn = true;
    this.getTasksFromService();
    }
    tasks = Task[] = [];
    task = Task;
    snacks: string[];
    loggedIn: boolean;

    getTasksFromService(){
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log("Got our tasks!", data)
        this.tasks = data;
      });
    }
  onButtonClick(): void { 
    console.log(`Click event is working`);
}
onButtonClickParam(num: Number): void { 
    console.log(`Click event is working with num param: ${num}`);
    let observable = this._httpService.postToServer({data: num});
    observable.subscribe(data => console.log("Got our data!", data));
}
onButtonClickParams(num: Number, str: String): void { 
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
}
onButtonClickEvent(event: any): void { 
    console.log(`Click event is working with event: ${event}`);
}
}