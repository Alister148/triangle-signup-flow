import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'
import { LoginRoutingModule } from './login-routing.module'
import { CreateAccessComponent } from './create-access/create-access.component';
import { LoginComponent } from './login/login.component';


import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [CreateAccessComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class LoginModule { }
