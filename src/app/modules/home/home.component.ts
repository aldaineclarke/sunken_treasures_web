import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slidesToShow: number = 2; // Default value for slides to show

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // Devices like phones (< 600px)
      Breakpoints.Small,  // Tablets (600px to 960px)
      Breakpoints.Medium, // Smaller desktops (960px to 1280px)
      Breakpoints.Large   // Larger desktops (> 1280px)
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.slidesToShow = 2; // Only 1 slide on very small screens
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.slidesToShow = 3; // 2 slides on small screens
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.slidesToShow = 4; // 3 slides on medium screens
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.slidesToShow = 4; // 4 slides on large screens
        }
      }
    });
  }
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
  ];
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }
}
