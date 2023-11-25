import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {

  @Input() visible: boolean = false; //nhận thuộc tính visible từ thằng cha truyền xuống
  @Output() closeDialogEvent = new EventEmitter<void>(); //chuyển hàm này từ con sang cha để sử dụng.
  @Output() saveItem = new EventEmitter<void>();

  majors: any;
  formData: FormGroup;
  constructor(
    private formBuilder: FormBuilder
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
    this.saveItem.emit(this.formData.value);
    this.formData.reset();
  }
}
