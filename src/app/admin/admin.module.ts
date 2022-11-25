import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../pages/admin/admin.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],  
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
