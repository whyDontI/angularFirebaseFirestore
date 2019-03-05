import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { DataService } from 'src/app/Services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgFire';
  private items: Observable<any[]>;
  constructor(private auth: AuthService, private db: DataService){
    this.getData();
  }
  getData(){
    this.items = this.db.getData(); //Calling service method from component
  }
}
