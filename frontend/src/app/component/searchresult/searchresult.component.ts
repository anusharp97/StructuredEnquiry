import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  id: String;
  user: any={};
  name : String;
  contact: String;
  email: String;
  datejoined: Date;
  dateupdated: Date;
  updateForm: FormGroup;


  constructor( private userService: UserService, private router:Router, private route:ActivatedRoute, private snackBar: MatSnackBar, private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params.id;
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      this.userService.searchUser(this.id).subscribe(res=>{
        this.user= res;
        console.log(res);
        console.log('fetching')
        console.log(this.user.name);
        //this.updateForm.get('name').setValue(this.user.name);
        this.name = this.user.name;
        this.contact = this.user.contact;
        this.email = this.user.email;
        console.log('Date here:',this.user.datejoined.substring(0, 10));
        this.datejoined = this.user.datejoined.substring(0, 10);
        this.dateupdated = this.user.dateupdated.substring(0, 10);
      });
    });
  }

  createForm()
  {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      responsible:'',
      description:'',
      severity:''
    });
  }
}
