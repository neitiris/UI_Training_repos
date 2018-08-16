import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
public links = [
  {href: '#', text: 'Lorem lipsum dolor'},
  {href: '#', text: 'Ame tleo libero dolor'},
  {href: '#', text: 'Aidpispicing lipsum'},
  {href: '#', text: 'Commodo id amet'},
  {href: '#', text: 'Sectetur amet au car'}
];
public columnsArray = [
  {href: '#', title: 'Services'},
  {href: '#', title: 'Portfolio'},
  {href: '#', title: 'Contact Us'},
];
public slides = [
  {img: '../../../assets/images-page3/slide-img.png', class: 'active'},
  {img: '../../../assets/images-page3/slide-img.png'},
  {img: '../../../assets/images-page3/slide-img.png'},
  {img: '../../../assets/images-page3/slide-img.png'}
];
public columns = [
  {title: 'Tableless Construction', img: '../../../assets/images-page3/cols-img.png', text: `Lorem ipsum dolor sit amet,
   consectetur adipiscing elit. Cras molestie condimentum conse am leo libero, samet dor.`},
  {title: 'We’re Hiring', img: '../../../assets/images-page3/cols-img2.png', text: `Lorem ipsum dolor sit amet,
   consectetur adipiscing elit. Cras molestie condimentum conse am leo libero, samet dor.`},
  {title: 'Our Partners', img: '../../../assets/images-page3/cols-img3.png', text: `Lorem ipsum dolor sit amet,
   consectetur adipiscing elit. Cras molestie condimentum conse am leo libero, samet dor.`},
];
  constructor() { }

  ngOnInit() {
  }

}
