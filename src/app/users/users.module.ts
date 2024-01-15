import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,ReactiveFormsModule,
    MatFormFieldModule,MatIconModule,
    MatInputModule,MatSnackBarModule
  ],
  providers:[MatIconRegistry,UserService,{
    provide : MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue: {duration : 2500}
  }]
})
export class UsersModule { }
