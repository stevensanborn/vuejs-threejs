<template>
  <div class="container" ref="eleCanvasContainer"></div>
</template>

<script>

import * as THREE from 'three'

export default {
  
  name: 'ThreeJS',

  mounted: function (){
    
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    
    this.camera.position.z = 400;

    var texture = new THREE.TextureLoader().load( 'static/textures/logo.png' );
    var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    
    this.mesh = new THREE.Mesh( geometry, material );
    this.scene.add( this.mesh );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setClearColor(0xFFFFFF);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.$refs.eleCanvasContainer.appendChild( this.renderer.domElement );

    this.animate();

  },
  methods: {
    animate:function(){

      requestAnimationFrame( this.animate );

      this.mesh.rotation.x += 0.04;
      this.mesh.rotation.y += 0.08;
      this.renderer.render( this.scene, this.camera );

    }
  },
  data () {
    return {
      camera: null,
      scene: new THREE.Scene(),
      renderer: new THREE.WebGLRenderer(),
      mesh:  null
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
