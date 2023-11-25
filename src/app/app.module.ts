import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcrudComponent } from './module/formcrud/formcrud.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { UpdateDialogComponent } from './components/updateDialog/updateDialog.component';
@NgModule({
  declarations: [
    AppComponent,
    FormcrudComponent,
    DialogComponent,
    UpdateDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
