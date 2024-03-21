import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutComponent } from '../../components/about/about.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { AreasComponent } from '../../components/areas/areas.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, AboutComponent, NavbarComponent, LandingComponent, AreasComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
