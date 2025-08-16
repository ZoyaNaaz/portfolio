// import './style.css';
import *as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1, 1000);

scene.add(camera)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'red', wireframe: true})

const box = new THREE.Mesh(geometry, material)

scene.add(box)
camera.position.z = 5
const canvas = document.querySelector('#canvas')
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true
controls.autoRotate = true
controls.autoRotateSpeed = 12.0
function animate(){
  window.requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}
// animate()