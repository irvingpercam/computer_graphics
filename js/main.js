"use strict"
var canvas;
var engine;
var scene;
var camera;
var light;
var divContainer;
var canvasSize;
function update()
{

}

function renderLoop() 
{
    engine.render(scene, camera);
    update();
    requestAnimationFrame(renderLoop);
}

function main()
{ 
    // CANVAS
    divContainer = document.getElementById("mainTopic");
    canvasSize = divContainer.offsetWidth;
    canvas = document.getElementById("canvas");
    canvas.style.display = "inline-block"

    // RENDERER ENGINE
    engine = new THREE.WebGLRenderer({canvas: canvas});
    engine.setSize(canvasSize/2, canvasSize/2);
    engine.setClearColor(new THREE.Color(0.2, 0.2, 0.35), 1.);   

    // MODELS
    // CUBE
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({wireframe: true, color: "white"});
    var mesh = new THREE.Mesh(geometry, material);

    // SCENEGRAPH
    scene = new THREE.Scene();  
    scene.add(mesh);    // CUBO       

    // CAMERA
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(0., 0., 3.);           
    var controls = new THREE.OrbitControls(camera, canvas);   
    scene.add(camera);  

    // LIGHTS
    light = new THREE.AmbientLight();  
    scene.add(light); 
                               
    // EVENT-HANDLERS
    window.addEventListener('resize', resizeWindow, false);

    // ACTION
    requestAnimationFrame(renderLoop);           
}