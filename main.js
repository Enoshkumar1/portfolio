
let camera, scene, renderer, bikeModel;
let bikeModelVisible = true;
function addPointLight() {
  const pointLight = new THREE.PointLight(0xffffff, 0.6,0 );
  pointLight.position.set(0,2,10);  // Adjust the position as needed
  scene.add(pointLight);
}
function ambientLight() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3,0 );
  scene.add(ambientLight);
}

function ground() {
  // ground
  const groundRadius = 9; // Adjust the radius as needed
  const segments = 100; // Number of segments for the circle

  const groundGeometry = new THREE.CircleGeometry(groundRadius, segments);
  const groundMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/hardwood2_diffuse.jpg"
    ),
    metalness: 0,
    roughness: 1,
  });

  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI * 0.5; // Rotate to align with the XZ plane
  ground.position.set(0, -0.77, 0); // Adjust the position as needed
  scene.add(ground);
}

function init() {
  // Capture the toggle button
  const toggleButton = document.getElementById("toggleLights");

  // Event listener for the button click
  toggleButton.addEventListener("click", toggleLights);
  camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,100);
  camera.position.z = 5.5;

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  ground();
  createStars(); // Create stars and add them to the scene
  addPointLight(); // Add a point light to the scene
  ambientLight();
}

function createStars() {
  const starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  const stars = new THREE.Group();

  for (let i = 0; i < 1000; i++) {
    const starMesh = new THREE.Mesh(starGeometry, starMaterial);
    starMesh.position.x = Math.random() * 200 - 100;
    starMesh.position.y = Math.random() * 200 - 100;
    starMesh.position.z = Math.random() * 200 - 100;
    stars.add(starMesh);
  }

  scene.add(stars);
}

function loadBikeModel() {
  // Load the bike model using GLTFLoader
  const loader = new THREE.GLTFLoader();
  loader.load("./css/assets/scene.gltf", (gltf) => {
    bikeModel = gltf.scene;
    // Set initial visibility
    bikeModel.visible = bikeModelVisible;
    if (bikeModel) {
      bikeModel.traverse((child) => {
        if (child.isMesh) {
          // Update material properties for each mesh in the model
          const material = child.material;

          if (material) {
            material.roughness = 0.45; // Set the roughness value (adjust as needed)
            material.metalness = 0.01; // Set the metalness value (adjust as needed)
          }
        }
      });
    }

    // Rest of your code for loading the bike model and headlights
    // ...
    // Add headlights
    const headlight1 = new THREE.SpotLight(0xf6e58d, 150, 10, THREE.MathUtils.degToRad(10), 0.25);
    headlight1.position.set(-0.9, 0.5, -1);
    headlight1.target.position.set(-0.8, -0.1, 3.5);
    bikeModel.add(headlight1);

    // Add spotlight for the second headlight
    const headlight2 = new THREE.SpotLight(0xf6e58d,150,10, THREE.MathUtils. degToRad(10),0.25);

    headlight2.position.set(0.9, 0.5, -1); // Adjust the position based on your model
    headlight2.target.position.set(0.8, -0.1, 3.5); // Adjust the target position based on your model
    bikeModel.add(headlight2);
    // Create a sphere geometry for the bulb
    const bulbGeometry = new THREE.SphereGeometry(0.05, 32, 32);

    // Create a material with emissive property to make it glow
    const bulbMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00, // Yellow color
    });

    // Create a mesh using the geometry and material
    const bulbMesh = new THREE.Mesh(bulbGeometry, bulbMaterial);
    bulbMesh.position.set(-0.8, 0.4, 2.1); // Adjust the position based on your model

    // Add the bulb mesh to the scene
    bikeModel.add(bulbMesh);
    const bulbMesh2 = new THREE.Mesh(bulbGeometry, bulbMaterial);
    bulbMesh2.position.set(0.8, 0.4, 2.1); // Adjust the position based on your model

    // Add the bulb mesh to the scene
    bikeModel.add(bulbMesh2);

    // Create a cone geometry to represent the light cone
    const coneGeometry = new THREE.ConeGeometry(0.23, 2.7, 30);
    const coneMaterial = new THREE.MeshBasicMaterial({
      color: 0xf6e58d,
      opacity: 0.35,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const lightCone = new THREE.Mesh(coneGeometry, coneMaterial);
    lightCone.position.set(0.1, -0.222, 3.5); // Adjust the position based on your model
    lightCone.rotation.x = -Math.PI / 2.45;
    headlight1.add(lightCone);
    bikeModel.add(headlight1.target);

    // Create a cone geometry to represent the light cone for the second headlight
    const lightCone2 = new THREE.Mesh(coneGeometry, coneMaterial);
    lightCone2.position.set(-0.1, -0.222, 3.5); // Adjust the position based on your model
    lightCone2.rotation.x = Math.PI / -2.45; // Adjust rotation to face the other direction
    headlight2.add(lightCone2);

    bikeModel.add(headlight2.target);
    // ... Your existing code ...

    let carStartSound = new Audio("./css/assets/mixkit-car-ignition-1 .mp3"); // Load the car start sound
    let engineSoundLoop = new Audio("./css/assets/mixkit-car-ignition-124.mp3"); // Load the engine sound loop
    let isEngineSoundPlaying = false;
    // Set initial visibility of lights to false
    const initialLightsVisibility = false;

    // Set initial visibility of the bike model
    bikeModel.visible = bikeModelVisible;

    // Set initial visibility of the lights and cones
    headlight1.visible = initialLightsVisibility;
    headlight2.visible = initialLightsVisibility;
    lightCone.visible = initialLightsVisibility;
    lightCone2.visible = initialLightsVisibility;
    bulbMesh.visible = initialLightsVisibility;
    bulbMesh2.visible = initialLightsVisibility;

    let lightsOn = false;
    function toggleLights() {
      lightsOn = !lightsOn;

      // Toggle bike headlights
      headlight1.visible = lightsOn;
      headlight2.visible = lightsOn;

      // Toggle cone lights (lightCones)
      lightCone.visible = lightsOn;
      lightCone2.visible = lightsOn;

      // Toggle bulbs
      bulbMesh.visible = lightsOn;
      bulbMesh2.visible = lightsOn;

      // Scroll to the 'about' section when lights are toggled
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "smooth" });

      // Toggle the lights logic...
      if (lightsOn) {
        if (!isEngineSoundPlaying) {
          // Play the car start sound when the button is clicked
          carStartSound.play();

          // After the car start sound finishes, play the engine sound loop
          carStartSound.addEventListener("ended", () => {
            isEngineSoundPlaying = true;
            engineSoundLoop.loop = true; // Enable looping
            engineSoundLoop.play(); // Play the engine sound loop
          });
        }
      } else {
        // If lights are turned off, stop the engine sound
        isEngineSoundPlaying = false; // Update the engine sound status
        carStartSound.pause();
        engineSoundLoop.loop = false;
        engineSoundLoop.pause();
      }
    }

    document
      .getElementById("toggleLights")
      .addEventListener("click", toggleLights);

    // Event listener for the button click

    scene.add(bikeModel); // Add the bike model to the scene
  });
}

function animate() {
  requestAnimationFrame(animate);

  if (bikeModel) {
    bikeModel.rotation.y += 0.004;
  }
  renderer.render(scene, camera);
  controls.update();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
}

init();
loadBikeModel();
ground();

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.minPolarAngle = controls.maxPolarAngle = Math.PI / 2;

window.addEventListener("resize", onWindowResize, false);

animate();
