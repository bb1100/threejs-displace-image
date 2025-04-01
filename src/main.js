import './style.css'
import * as THREE from 'three';

const size = { width: window.innerWidth, height: window.innerHeight };

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, size.width/size.height);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(size.width, size.height);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
