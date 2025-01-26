import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'future Creative Craft Industrial Services';
  // ngAfterViewInit(): void {
  //   particlesJS.load('tsparticles', {
  //     background: {
  //       color: {
  //         value: '#0d47a1', // Background color
  //       },
  //     },
  //     particles: {
  //       number: {
  //         value: 100, // Number of particles
  //       },
  //       color: {
  //         value: '#ffffff', // Particle color
  //       },
  //       size: {
  //         value: 5, // Particle size
  //       },
  //       move: {
  //         enable: true, // Enable particle movement
  //         speed: 2, // Movement speed
  //       },
  //     },
  //   }).then(() => {
  //     console.log('Particles loaded successfully!');
  //   }).catch((error) => {
  //     console.error('Error loading particles:', error);
  //   });
  // }
}
