import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule,MatListModule,RouterModule,MatCardModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit{
  listUsers:any;
constructor(private usersService:UserService){}
  ngOnInit(): void {
   this.usersService.listUsers().subscribe(data=>{
    this.listUsers=data;
  });
  }
}
