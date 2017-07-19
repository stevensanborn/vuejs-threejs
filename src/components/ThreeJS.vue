<template>
  <div class="container" ref="eleCanvasContainer"></div>
</template>

<script>

import * as THREE from 'three'
import Stats from 'stats.js'
import OrbitControls from 'three-orbitcontrols'


var statsMem;


export default {
  
  name: 'ThreeJS',

  created: function(){


    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
    this.camera.up = new THREE.Vector3(0,1,0);
    this.camera.position.set(0,0,-1);
    this.camera.lookAt(new THREE.Vector3(0,0,0));
    
    var texture = new THREE.TextureLoader().load( 'static/textures/logo.png' );
    var geometry = new THREE.BoxBufferGeometry( .13, .13, .13);
    var material = new THREE.MeshBasicMaterial( { map: texture } );

    this.mesh = new THREE.Mesh( geometry, material );
    this.mesh.position.set(0,0,0);
    console.log(this.mesh.position);

    this.scene.add( this.mesh );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setClearColor(0xFFFFFF);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
   
    this.statsFPS = new Stats();

    

  },
  mounted: function (){
    
    this.$refs.eleCanvasContainer.appendChild( this.renderer.domElement );

    this.statsFPS.showPanel( 0 );

    document.body.appendChild( this.statsFPS.domElement );

    this.controls = new OrbitControls(this.camera,this.$refs.eleCanvasContainer);
    this.controls.rotateSpeed = .5;
    this.keyPanSpeed = 0.01; 
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    this.controls.target.set(0,0,0);
    


    requestAnimationFrame( this.renderGL );


  },
  methods: {
    renderGL:function(){
      
      this.controls.update();
      
      
      // this.stats.update()
      this.mesh.rotation.x += 0.004;
      this.mesh.rotation.y += 0.001;

      // this.mesh.position =  new THREE.Vector3(0,0,0);

      this.renderer.render( this.scene, this.camera );
      this.statsFPS.update();

      requestAnimationFrame( this.renderGL );
      
    }
  },
  data () {
    return {
      scene: new THREE.Scene(),
      renderer: new THREE.WebGLRenderer({ antialias: true }),
      camera: null,
      mesh: null,
      controls: null,
      statsFPS: new Stats()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width:100%;
  height:100%;
  position: absolute;
  margin:0;
  padding:0;
  top:0;
}
</style>
