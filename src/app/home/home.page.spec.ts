import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  panjang: number;
  satuanPanjang: string;
  hasilPanjang: string;

  berat: number;
  satuanBerat: string;
  hasilBerat: string;

  suhu: number;
  satuanSuhu: string;
  hasilSuhu: string;

  konversiPanjang() {
    if (this.satuanPanjang === 'km') {
      this.hasilPanjang = (this.panjang * 1000).toString() + ' m';
    } else {
      this.hasilPanjang = (this.panjang / 1000).toString() + ' km';
    }
  }

  konversiBerat() {
    if (this.satuanBerat === 'mg') {
      this.hasilBerat = (this.berat / 1000).toString() + ' g';
    } else {
      this.hasilBerat = (this.berat * 1000).toString() + ' mg';
    }
  }

  konversiSuhu() {
    if (this.satuanSuhu === 'c') {
      this.hasilSuhu = ((this.suhu * 9 / 5) + 32).toString() + ' F';
    } else {
      this.hasilSuhu = ((this.suhu - 32) * 5 / 9).toString() + ' C';
    }
  }
}