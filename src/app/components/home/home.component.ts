import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'assets/images/slider/slide1.jpg', title: 'Welcome to China Ace Technology' },
    { image: 'assets/images/slider/slide2.jpg', title: 'Quality Products' },
    { image: 'assets/images/slider/slide3.jpg', title: 'Professional Service' }
  ];
  
  currentSlide = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  onContactClick(): void {
    console.log('Contact button clicked');
  }

  scrollToServices(): void {
    const element = document.getElementById('services-detail');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
