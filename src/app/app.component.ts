import { Component } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private colorService: ColorService) { }
  ngOnInit() {

  }
  colors = [];
  bodycolor() {
    // get random color from color service in given api
    return this.colorService.getFlexColor().subscribe(data => {
      // console.log(data.color)
      // set a default color to inverse the color
      var color1 = 0xffffff
      var color2 = parseInt(data.color.replace(/^#/, ''), 16)
      //  console.log(color2)
      // inverse of the get bg color
      var result = color1 - color2
      var hex = '#';
      var hex = hex + result.toString(16)
      // coloring the perticular flex box
      var x = document.getElementsByClassName('color') as HTMLCollectionOf<HTMLElement> ;
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
