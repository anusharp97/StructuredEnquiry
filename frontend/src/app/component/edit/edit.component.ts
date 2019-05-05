import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
        //console.log(this.user.name);
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

  updateUser()
  {
    console.log('Before updating:', this.name);
    this.userService.updateUser(this.id, this.name,this.contact,this.email, this.datejoined, this.dateupdated).subscribe(data =>{
       
        if(data.success)
        {
          //window.alert('New user has been added!')
          this.snackBar.open('User details updated successfully!','OK',{
            duration:1500
            
          });      
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
    this.router.navigate(['/home']);
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
