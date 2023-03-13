const ParticlesConfig = {
    background: {
      color: '#151515',
    },
    fpsLimit: 40,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        resize: true
      },
    },
    particles: {
      color: {
        value: "#f1f1f1"
      },
      number: {
        density: {
          enable: true,
          area: 1080
        },
        limit: 0,
        value: 500,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.5,
          speed: 1,
          sync: false,
        },
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        value: 1,
      },
      shape: {
        type: 'circle',

      },
      size: {
        random: {
          enable: true,
          minimumValue: 0.5
        },
        value: 1
      },
      move:{
        enable:true,
        // direction:'right',
        speed:.25,
        straight:true
      },
      // links:{
      //   enable:true,
      //   color:{
      //     value:'#f1f1f1'
      //   },
      //   distance:70
         

      // }
    }
  }


  export default ParticlesConfig