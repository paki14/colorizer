import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Color } from './color';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private httpObj:HttpClient) { }
  private colorUrl = "http://api.creativehandles.com/getRandomColor";

  getFlexColor(){
    return this.httpObj.get<Color>(this.colorUrl);
  }
}
