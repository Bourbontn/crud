import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormcrudService {

  getData() {
    const data = JSON.parse(localStorage.getItem('products') || '{}');
    return data;
  }

  addData(dt: any) {
    const data = JSON.parse(localStorage.getItem('products') || '{}');
    data.push(dt);
    localStorage.setItem('products', JSON.stringify(data));
  }

  updateData(oldData: any, newData: any) {
    const data = JSON.parse(localStorage.getItem('products') || '{}');
    for (let i = 0; i < data.length; i++) {
      if (data[i].fullname === oldData) {
        data[i] = newData;
      }
    }
    localStorage.setItem('products', JSON.stringify(data));
  }

  deleteData(dt: string) {
    const data = JSON.parse(localStorage.getItem('products') || '{}');
    for (let i = 0; i < data.length; i++) {
      if (data[i].fullname === dt) {
        data.splice(i, 1);
      }
    }
    localStorage.setItem('products', JSON.stringify(data));
  }
}
