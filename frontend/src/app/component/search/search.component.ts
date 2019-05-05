import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  id:String;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }
  searchUser()
  {
    console.log(this.id)
    this.userService.searchUser(this.id).subscribe(data =>{
      console.log('Data here:',data)
      var strJson = JSON.stringify(data);
      console.log(strJson.length)
      if(strJson == "null")
      {
        window.alert('No such user')
       
      }
      else
      {
        //window.alert('success');
        this.router.navigate([`/searchresult/${this.id}`]);
      }
      //this.router.navigate([`/edit/${this.id}`]);
      //this.router.navigate(['/home']);
    });
    //this.router.navigate([`/search/${id}`]);
  }
}
