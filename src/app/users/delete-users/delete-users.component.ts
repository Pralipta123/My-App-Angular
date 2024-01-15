import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-users',
  standalone: true,
  imports: [],
  templateUrl: './delete-users.component.html',
  styleUrl: './delete-users.component.scss'
})
export class DeleteUsersComponent implements OnInit{

  userId: string='';
  constructor(private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private _snackBar:MatSnackBar,
    private router:Router){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id'];
    });

    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe(data=>{
        this._snackBar.open("User Deleted Successfully");

      }, err =>{
        this._snackBar.open("Unable to Delete the User");

      })
    }
      
  }

}
