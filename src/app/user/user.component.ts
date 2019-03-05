import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private auth: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  loginGoogle(){
    this.auth.loginGoogle();
  }

  logOut(){
    this.auth.logout();
  }

}
