// import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
// import * as THREE from "three";
// import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

// @Component({
//   selector: 'app-model',
//   templateUrl: './model.component1.html',
//   styleUrls: ['./model.component.scss']
// })

// export class ModelComponent implements OnInit, AfterViewInit {

//   @ViewChild('canvas') private canvasRef!: ElementRef;

//   //* Stage Properties

//   @Input() public fieldOfView: number = 1;

//   @Input('nearClipping') public nearClippingPane: number = 1;

//   @Input('farClipping') public farClippingPane: number = 1000;

//   //? Scene properties
//   private camera!: THREE.PerspectiveCamera ;

//   private controls!: OrbitControls;

//   private ambientLight!: THREE.AmbientLight;

//   private light1!: THREE.PointLight;

//   private light2!: THREE.PointLight;

//   private light3!: THREE.PointLight;

//   private light4!: THREE.PointLight;

//   private model: any;

//   private directionalLight!: THREE.DirectionalLight;

//   //? Helper Properties (Private Properties);

//   private get canvas(): HTMLCanvasElement {
//     return this.canvasRef.nativeElement;
//   }

//   private loaderGLTF = new GLTFLoader();

//   private renderer!: THREE.WebGLRenderer;

//   private scene!: THREE.Scene;

//   /**
//    *Animate the model
//    *
//    * @private
//    * @memberof ModelComponent
//    */
//   private animateModel() {
//     if (this.model) {
//       this.model.rotation.z += 0.005;
//     }
//   }

//   /**
//    *create controls
//    *
//    * @private
//    * @memberof ModelComponent
//    */
//   // private createControls = () => {
//   //   const renderer = new THREE.WebGLRenderer({ antialias: true });
//   //   renderer.setSize(window.innerWidth, window.innerHeight);
//   //   renderer.domElement.style.position = 'absolute';
//   //   renderer.domElement.style.top = '0px';
//   //   document.body.appendChild(renderer.domElement);
//   //   this.controls = new OrbitControls(this.camera, renderer.domElement);
//   //   this.controls.autoRotate = false;
//   //   this.controls.enableZoom = true;
//   //   this.controls.enablePan = true;
//   //   this.controls.update();
//   // };

//   /**
//    * Create the scene
//    *
//    * @private
//    * @memberof CubeComponent
//    */
//   private createScene() {
//     //* Scene
//     this.scene = new THREE.Scene();
//     this.scene.background = new THREE.Color(0xd4d4d8)
//     this.loaderGLTF.load('assets/models/dentaldr.gltf', (gltf: GLTF) => {
//       this.model = gltf.scene;
//       // console.log(this.model);
//       var box = new THREE.Box3().setFromObject(this.model);
//       box.getCenter(this.model.position); // this re-sets the mesh position
//       this.model.position.multiplyScalar(-1);
//       this.scene.add(this.model);
//     });
//     //*Camera
//     let aspectRatio = this.getAspectRatio();
//     this.camera = new THREE.PerspectiveCamera(
//       this.fieldOfView,
//       aspectRatio,
//       this.nearClippingPane,
//       this.farClippingPane
//     )
//     this.camera.position.x = 100;
//     this.camera.position.y = 100;
//     this.camera.position.z = 100;
//     this.ambientLight = new THREE.AmbientLight(0x00000, 100);
//     this.scene.add(this.ambientLight);
//     this.directionalLight = new THREE.DirectionalLight(0xfdfbe5, 3);
//     this.directionalLight.position.set(0, 1, 0);
//     this.directionalLight.castShadow = false;
//     this.scene.add(this.directionalLight);
//     this.directionalLight = new THREE.DirectionalLight(0xfdfbe5, 3);
//     this.directionalLight.position.set(0, 0, 1);
//     this.directionalLight.castShadow = false;
//     this.scene.add(this.directionalLight);
//     this.directionalLight = new THREE.DirectionalLight(0xfdfbe5, 3);
//     this.directionalLight.position.set(1, 0, 0);
//     this.directionalLight.castShadow = false;
//     this.scene.add(this.directionalLight);
//     this.light1 = new THREE.PointLight(0xfdfbe5, 10);
//     this.light1.position.set(0, 200, 400);
//     this.scene.add(this.light1);
//     this.light2 = new THREE.PointLight(0xfdfbe5, 10);
//     this.light2.position.set(500, 100, 0);
//     this.scene.add(this.light2);
//     this.light3 = new THREE.PointLight(0xfdfbe5, 10);
//     this.light3.position.set(0, 100, -500);
//     this.scene.add(this.light3);
//     this.light4 = new THREE.PointLight(0xfdfbe5, 10);
//     this.light4.position.set(-500, 300, 500);
//     this.scene.add(this.light4);
//   }


// changeRotation(){

//     // this.rotation = true;
//       const theet = this.scene.children.find(item => item.name == "t11");
//       theet?.rotation.set(3,3,4);
//       console.log(theet)
//   }

//   private getAspectRatio() {
//     return this.canvas.clientWidth / this.canvas.clientHeight;
//   }

//   /**
//  * Start the rendering loop
//  *
//  * @private
//  * @memberof CubeComponent
//  */
//   private startRenderingLoop() {
//     //* Renderer
//     // Use canvas element in template
//     this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
//     this.renderer.setPixelRatio(devicePixelRatio);
//     this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
//     let component: ModelComponent = this;
//     this.controls = new OrbitControls(this.camera, this.renderer.domElement);
//     this.controls.autoRotate = false;
//     this.controls.enableZoom = true;
//     this.controls.enablePan = true;
//     this.controls.update();
//     (function render() {
//       component.renderer.render(component.scene, component.camera);
//     //   component.animateModel();
//       requestAnimationFrame(render);
//     }());
//   }

//   constructor() { }

//   ngOnInit(): void {
//     this.createScene();
//     this.startRenderingLoop();
//   }

//   ngAfterViewInit() {
//     this.createScene();
//     this.startRenderingLoop();
//     // this.createControls();
//     this.changeRotation();
//   }




// }
