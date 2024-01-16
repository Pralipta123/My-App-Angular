import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [
  {id: 1, name: 'Hydrogen', username: 'laddu', email: 'arc@ladu.com'},
 
];
@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule,MatListModule,RouterModule,MatCardModule,MatTableModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'username', 'email','action'];
  dataSource = ELEMENT_DATA;
  listUsers:User[]=[];
  students$:any;

constructor(private usersService:UserService){}

  ngOnInit(): void {
   this.usersService.listUsers().subscribe(data=>{
    this.listUsers=data;
  });
  }
}
