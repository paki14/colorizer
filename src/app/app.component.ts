import { Component } from '@angular/core';
import { Color } from './color';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskAssignmet';
  constructor(private colorService: ColorService) { }
  ngOnInit() { }
  colors = [];
  bodycolor() {
    return this.colorService.getFlexColor().subscribe(data => {
      // console.log(data.color)
      var color1 = 0xffffff
      var color2 = '0x';
      for (var i = 0; i < 6; i++) {
        color2 = color2 + data.color.substr(1).charAt(i)
      }
      //  console.log(color2)
      var result = color1 - color2
      var hex = '#';
      var hex = hex + result.toString(16)
      // coloring the perticular flex box
      var x = document.getElementsByClassName('color');
      var i = this.num - 1
      while (i < this.num) {
        x[i].style.background = data.color.toString()
        x[i].style.color = hex
        i = i + 1
      }
    })
  }
  data = []
  num: number = 0
  addColor(newColor: string) {
    if (newColor) {
      // add array 
      this.colors.push(newColor);
      // remove duplicate values
      var uniqueNames = [];
      $.each(this.colors, function (i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
      });
      // coloring the flexbox and text
      this.bodycolor()
      // console.log(uniqueNames)
      this.num = this.num + 1
      // console.log(this.num)
      // set array to remove duplicate values
      this.data = uniqueNames
    }
    return newColor = '';
  }
}
