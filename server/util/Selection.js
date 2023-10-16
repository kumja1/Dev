import * as THREE from 'three';
import { } from 'three/build/three.module';
new THREE.MeshBasicMaterial({map})
class Selection{
    constructor(name,){
    }
}
import * as THREE from 'three';
const t = new THREE.TOUCH.ROTATE = 1
// Get the container element from the HTML
const container = document.getElementById("container");

// Create the Three.js scene
const scene = new THREE.Scene();

// Create the renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  container.offsetWidth / container.offsetHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create a gearbox model
const gearboxGeometry = new THREE.BoxGeometry(1, 1, 1);
const gearboxMaterial = new THREE.MeshPhongMaterial({
  color: 0xff0000
});
const gearbox = new THREE.Mesh(gearboxGeometry, gearboxMaterial);
scene.add(gearbox);

// Create a light source
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(2, 3, 4);
scene.add(light);

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the gearbox
  gearbox.rotation.x += 0.01;
  gearbox.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}
animate();

// Update the gear speed information in the overlay
function updateGearSpeed(speed) {
  const gearSpeedElement = document.getElementById("gearSpeed");
  gearSpeedElement.textContent = `Gear Speed: ${speed}`;
}

// Simulate changing the gear speed
let speed = 0;
setInterval(() => {
  speed += 10;
  if (speed > 100) {
    speed = 0;
  }
  updateGearSpeed(speed);
}, 1000);
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>"Gearbox Ponder"</title>
  <style>
    #container {
      position: relative;
      width: 800px;
      height: 600px;
    }
    #overlay {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <div id="container"></div>
  <div id="overlay">
    <h1>"Gearbox Ponder"</h1>
    <p id="gearSpeed"></p>
  </div>

  <script type="module" src="/main.js"></script>
</body>
</html>
