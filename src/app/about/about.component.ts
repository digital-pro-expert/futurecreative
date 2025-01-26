import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { loadFull } from 'tsparticles';
// import { IParticlesOptions, Particle, ParticlesOptions } from '@tsparticles/engine';  // Import Particle options interface
import { Engine, MoveDirection, OutMode, OutModes } from '@tsparticles/engine';  // Import tsparticles from engine
import { NgxParticlesModule } from '@tsparticles/angular';
import { NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from '@tsparticles/slim';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [ NgxParticlesModule, RouterLink,RouterLinkActive],
})
export class AboutComponent implements OnInit {
  // particlesLoaded = false;

  // ngOnInit() {
  //   loadFull().then((container) => {
  //     this.particlesLoaded = true;
  //   });
  // }

  // particlesOptions: ParticlesOptions = {
  //   background: {
  //     color: {
  //       value: '#0d47a1', // Background color
  //     },
  //   },
  //   particles: {
  //     number: {
  //       value: 100, // Number of particles
  //     },
  //     color: {
  //       value: '#ffffff', // Particle color
  //     },
  //     size: {
  //       value: 5, // Particle size
  //     },
  //     move: {
  //       enable: true, // Enable particle movement
  //       speed: 2, // Movement speed
  //     },
  //   },
  // };
  id = "tsparticles";
  // particlesOptions = {
  //   particles: {
  //     number: {
  //       value: 100, // Number of particles
  //     },
  //     color: {
  //       value: '#000000', // Particle color
  //     },
  //     size: {
  //       value: 3, // Particle size
  //     },
  //     move: {
  //       enable: true, // Enable movement
  //       speed: 3, // Movement speed
  //     },
  //   },
  //   interactivity: {
  //     events: {
  //       onHover: {
  //         enable: true,
  //         mode: 'repulse', // Repulse particles when hovering
  //       },
  //       onClick: {
  //         enable: true,
  //         mode: 'push', // Add new particles when clicked
  //       },
  //     },
  //   },
  //   retina_detect: true,

  // };

  particlesOptions = {
    background: {
      color: {
        // value: '#0d47a1',
        value: '#000000',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        // resize: 'true',
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        // color: '#0d47a1',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        speed: 5,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 200,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 3 },
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit() {
    // tsParticles.load( {
    //   id: 'tsparticles',  // The ID of the DOM element where particles will be rendered
    //   options: {
    //     particles: {
    //       background: {
    //         color: {
    //           value: '#0d47a1',  // Background color for particles
    //         },
    //       },
    //       number: {
    //         value: 100,  // Number of particles
    //       },
    //       color: {
    //         value: '#ffffff',  // Particle color
    //       },
    //       size: {
    //         value: 5,  // Particle size
    //       },
    //       move: {
    //         enable: true,  // Enable particle movement
    //         speed: 2,  // Movement speed
    //       },
    //     },
    //   },
    // });  // Initialize particles with the configuration

    this.ngParticlesService.init(async (engine: Engine) => {
      // console.log(engine);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
  });
  }

  particlesLoaded(container: any): void {
    console.log('Particles Loaded:', container);
  }

}
