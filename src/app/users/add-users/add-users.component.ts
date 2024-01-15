import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../../services/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatIconModule,MatInputModule,MatFormFieldModule,MatCardModule,MatButtonModule,MatSnackBarModule],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss'
})
export class AddUsersComponent implements OnInit{

  dataLoaded:boolean=true;
  addUserForm : FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private _snackBar: MatSnackBar){}

  ngOnInit(): void{
    this.addUserForm = this.formBuilder.group({
      'username':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'email' :new FormControl('',[Validators.required,Validators.email]),
      'phone':new FormControl('',[Validators.required,Validators.maxLength(10)])
    })
  }
  createUser() {

    this.userService.addUser(this.addUserForm.value).subscribe(data=>{
     this._snackBar.open("User created successfully")
    }, err => {
      this._snackBar.open("Unable to create user");
    })

    }

}
