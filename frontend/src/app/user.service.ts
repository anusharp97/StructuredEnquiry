import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface adminResponse{
  success:{ type:boolean, default:true};
  retValue: String;
  idcount: Number;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  uri="http://localhost:4000";
  constructor( private http: HttpClient) { }

  
  searchUser(id)
  {
    console.log('Here:',id);
    //return 1;
    //const n=2;
    const user ={
      id: id,
      
    };
    return this.http.post<adminResponse>(`${this.uri}/users/search`,user);  
  }
  addUser(name, contact, email)
  {
    return this.http.post<adminResponse>(`${this.uri}/users/add`,{ name, contact, email});
  }
  updateUser(id,name, contact, email, datejoined, dateupdated)
  {
      const user = {
        id: id,
        name: name,
        contact: contact,
        email: email,
        datjoined: datejoined,
        dateupdated: dateupdated
      };
      console.log('Updated:', name);
      return this.http.post<adminResponse>(`${this.uri}/users/update`,{id,name, contact, email, datejoined, dateupdated});
  }
}
