import { Component, OnInit, NgModule, ViewChildren } from '@angular/core';
import { UserService } from '../../user.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
//import {IgxSnackbarComponent} from 'igniteui-angular';
import { Router } from '@angular/router';
import { User } from '../../user.model';

@Component({
  selector: 'app-create',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  //public snackbar :IgxSnackbarComponent
  insertForm: FormGroup;
  constructor( private userService: UserService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar,) { 
    this.insertForm = this.fb.group({
      id:'',
      name: ['', Validators.required],
      contact:'',
      email:'',
      datejoined:'',
      dateupdated:''
    });
  }

  addUser( name, contact, email){
    this.userService.addUser(name, contact,email).subscribe(data =>{
      console.log('data has:');
      console.log(data.idcount);
      console.log(data.success);
      
      if(data.success)
      {
        
        window.alert('Your id is:'+data.idcount);
        this.snackBar.open('New user has been added successfully with!','OK',{
          duration:1500
          
        });  
        this.router.navigate(['/home']);
      }
      else if(data.retValue=='contact')
      {
        window.alert('Enter 10 digit contact number.');
      }
      else if(data.retValue=='email')
      {
        window.alert('Please enter appropriate email id');
      }
      else if(data.retValue=='name')
      {
        window.alert('Name must contain only charcaters');
      }
    });
  }

  ngOnInit() {
    
  }
  

}
