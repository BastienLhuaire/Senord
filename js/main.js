let scene = new THREE.Scene();

let camera = new THREE.OrthographicCamera(  left_bound,right_bound,top_bound,bottom_bound, 1, 1000 );
//let camera = new THREE.PerspectiveCamera( 80, window.innerWidth/window.innerheight, 1, 1000 );
camera.position.z = 200;
scene.add(camera);

let light = new THREE.PointLight( 0xffffff, 1, 1500 );
light.position.set( 50, 50, 50 );
scene.add( light );

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

game.init();

function render() {
   requestAnimationFrame(render);
   renderer.render(scene, camera);
   game.update();
   game.render();

}
render();

