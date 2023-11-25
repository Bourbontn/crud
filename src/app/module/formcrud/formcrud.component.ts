import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormcrudService } from '../services/formcrud.service';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-formcrud',
  templateUrl: './formcrud.component.html',
  styleUrls: ['./formcrud.component.css']
})
export class FormcrudComponent implements OnInit {
  visible: boolean = false;
  dialogVisible: boolean = false;
  selectedItem: string = '';

  items: any;

  constructor(
    private formcrudService: FormcrudService,
  ) { }

  async ngOnInit() {
    await this.loadData();
  }
  loadData() {
    this.items = this.formcrudService.getData();
  }

  //open form create
  openDialog() {
    this.dialogVisible = true;
  }

  onDialogClosed() {
    this.dialogVisible = false;
  }
  //open form edit
  openFormEdit(fullname: string) {
    this.visible = true;
    this.selectedItem = fullname;
  }

  closeFormEdit() {
    this.visible = false;
  }


  deleteData(dt: any) {
    this.formcrudService.deleteData(dt);
    this.loadData();
  }


  updateData() {
    this.visible = false;
    this.loadData();
  }

}
