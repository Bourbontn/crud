import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormcrudService } from 'src/app/module/services/formcrud.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {

  @Input() visible: boolean = false; //nhận thuộc tính visible từ thằng cha truyền xuống
  @Output() closeDialogEvent = new EventEmitter<void>(); //chuyển hàm này từ con sang cha để sử dụng.
  @Output() dataSavedEvent = new EventEmitter<void>();
  majors: any;
  formData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private formcrudService: FormcrudService

  ) {
    this.formData = this.formBuilder.group({
      fullname: [''],
      birthdate: [''],
      major: [''],
    })
  }

  ngOnInit() {
  }

  closeDialog() {
    this.closeDialogEvent.emit();
  }

  saveData() {
    this.formcrudService.addData(this.formData.value);
    this.formData.reset();
    this.dataSavedEvent.emit();
    this.closeDialogEvent.emit();
  }
}
