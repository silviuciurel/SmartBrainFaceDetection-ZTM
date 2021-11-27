import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLoadForm from './components/ImageLoadForm/ImageLoadForm';
import Rank from './components/Rank/Rank';

const particlesOptions = {
  background: {
    // color: {
    //   value: "#0d47a1",
    // },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 40,
          smooth: 10
        }
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
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
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "triangle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}

class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="App" >
        <Particles
          id="tsparticles"
          // init={particlesInit}
          // loaded={particlesLoaded}
          options={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLoadForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }

}

export default App;
