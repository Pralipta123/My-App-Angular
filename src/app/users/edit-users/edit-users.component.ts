import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-users',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatFormFieldModule,ReactiveFormsModule,MatCardModule,MatIconModule,MatInputModule],
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.scss'
})
export class EditUsersComponent implements OnInit{

  userId: any;
  userDetails :any;
  dataLoaded:boolean =false;
  editUserForm : FormGroup =new FormGroup({});
  constructor(private activateRoute:ActivatedRoute,
              private userService:UserService,
              private formBuilder:FormBuilder,
              private _snackBar:MatSnackBar){}


  ngOnInit(): void {
    this.dataLoaded = false;
   this.activateRoute.params.subscribe(data => {
    this.userId=data['id'];
   });

   if(this.userId !== ''){
    //this is View User Details
    this.userService.viewUser(this.userId)
    .toPromise()
    .then(data =>{
      this.userDetails=data;
      //Object.assign(this.userDetails,data);
      console.log(this.userDetails);
      
      //Build the edit form
      this.editUserForm = this.formBuilder.group({
        'username': new FormControl(this.userDetails.name,[Validators.required,Validators.minLength(5)]),
        'email': new FormControl(this.userDetails.email,[Validators.required,Validators.email]),
        
      })

      this.dataLoaded=true;
    })
    .catch( err =>{
      console.log(err);
    })

   }

  }
  updateUser(){
    this.userService.updateUser(this.userId,this.editUserForm.value).subscribe(data=>{
      this._snackBar.open("User updated successfully")
     }, err => {
       this._snackBar.open("Unable to update user");
     })
  }

}
