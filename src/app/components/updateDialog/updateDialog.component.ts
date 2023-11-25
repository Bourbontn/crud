import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormcrudService } from 'src/app/module/services/formcrud.service';

@Component({
  selector: 'app-updateDialog',
  templateUrl: './updateDialog.component.html',
})
export class UpdateDialogComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() itemFullName: string = '';
  @Output() closeFormEdit = new EventEmitter();
  @Output() newItem = new EventEmitter();
  formData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private formcrudService: FormcrudService,
  ) {
    this.formData = this.formBuilder.group({
      fullname: [''],
      birthdate: [''],
      major: [''],
    })
  }

  ngOnInit() {
    this.loadDataUpdate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemFullName && !changes.itemFullName.firstChange) {
      this.loadDataUpdate();
    }
  }

  loadDataUpdate() {
    if (this.itemFullName != null) {
      const data = this.formcrudService.getData().find((data: any) => data.fullname === this.itemFullName);
      // console.log(data);
      this.formData.reset({
        fullname: data['fullname'] ? data['fullname'] : '',
        birthdate: data['birthdate'] ? data['birthdate'] : '',
        major: data['major'] ? data['major'] : '',
      })
    }
  }

  updateData() {
    this.formcrudService.updateData(this.itemFullName, this.formData.value);
    this.newItem.emit();
  }

  closedForm() {
    this.closeFormEdit.emit();
  }
}
