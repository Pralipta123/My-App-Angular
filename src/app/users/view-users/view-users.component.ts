import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.scss'
})
export class ViewUsersComponent implements OnInit {
userId:string = '';
userDetails:any;
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.userId =data['id'];
      console.log(this.userId)
    })
   this.userService.viewUser(this.userId).subscribe(data=>{
   this.userDetails=data;
   })
  }

}
