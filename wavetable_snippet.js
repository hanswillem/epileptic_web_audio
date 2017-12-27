// p5js and web audio snippet 
// create wavetable from random numbers


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);

  //make array with random numbers between -1 and 1
  let ep = [];
  for (let i = 0; i < 100; i++) {
    ep.push(random(-1, 1));
  }

  // from web audio api tutorial
  let audioContext = new AudioContext();
  let osc = audioContext.createOscillator();
  let real = new Float32Array(ep);
  let imag = new Float32Array(real.length);
  let myWaveTable = audioContext.createPeriodicWave(real, imag);

  osc = audioContext.createOscillator();
  osc.setPeriodicWave(myWaveTable);
  osc.frequency.value = 100;
  osc.connect(audioContext.destination);
  osc.start(0);
  osc.stop(2);
}
