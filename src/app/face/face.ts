import { Component } from '@angular/core';

@Component({
  selector: 'face',
  templateUrl: './face.html',
  styleUrls: ['./face.css']
})
export class Face {
	private _URI : string = 'https://api.adorable.io/avatars/600/';
	private _IDFACE : number;
	url : string;

  constructor(){
    setInterval(() => this.getFace(),2000);
  }

  getFace(){
    this._IDFACE = Math.random();
    this.url = `${this._URI}${this._IDFACE}`;
  }
}
