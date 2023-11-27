import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormcrudService {

  getData() {
    const data = JSON.parse(localStorage.getItem('products') || '[]');
    return data;
  }

  addData(dt: any) {
    const data = JSON.parse(localStorage.getItem('products') || '[]');
    data.push(dt);
    localStorage.setItem('products', JSON.stringify(data));
  }

  updateData(oldData: any, newData: any) {
    const data = JSON.parse(localStorage.getItem('products') || '[]');

    const updateData = data.map((item: any) => {
      if (item.fullName === oldData) {
        item = newData;
      }
      return item;
    })
    localStorage.setItem('products', JSON.stringify(updateData));
  }

  deleteData(dt: string) {
    const data = JSON.parse(localStorage.getItem('products') || '{}');
    for (let i = 0; i < data.length; i++) {
      if (data[i].fullName === dt) {
        data.splice(i, 1);
      }
    }
    localStorage.setItem('products', JSON.stringify(data));
  }
}
