"use strict"
var canvas;
var engine;
var scene;
var cube;
var cameraObserver;
var cameraActive;
var cameraHelper;
var light;
var multiview = false;
var controlCameraActive;
var PrismGeometry;
var vectorA, vectorB, vectorC;
var cubeAngle;
var hipotenuse;
var modelHipotenuse;

PrismGeometry = function ( vertices, height ) {

    var Shape = new THREE.Shape();

    ( function f( ctx ) {

        ctx.moveTo( vertices[0].x, vertices[0].y );
        for (var i=1; i < vertices.length; i++) {
            ctx.lineTo( vertices[i].x, vertices[i].y );
        }
        ctx.lineTo( vertices[0].x, vertices[0].y );

    } )( Shape );

    var settings = { };
    settings.amount = height;
    settings.bevelEnabled = false;
    THREE.ExtrudeGeometry.call( this, Shape, settings );

};

function update()
{

}

function renderLoop() 
{
    engine.setViewport(0, 0, window.innerWidth, window.innerHeight);
    engine.clear();

    if(!multiview)
    {
        // Camera Observer
        cameraObserver.aspect = canvas.width / canvas.height;
        cameraObserver.updateProjectionMatrix();
        engine.setScissor(0, 0, window.innerWidth, window.innerHeight);
        engine.render(scene, cameraObserver);
    }
    else
    {
        var w = window.innerWidth;
        var h = window.innerHeight;
        // OBSERVER CAMERA
        cameraObserver.aspect = w/2. / h;
        cameraObserver.updateProjectionMatrix();
       
        engine.setViewport(w/2., 0, w/2., h);
        engine.setScissor(w/2., 0, w/2., h);

        engine.render(scene, cameraObserver);

        // ACTIVE CAMERA
        cameraActive.aspect = w/2. / h;
        cameraActive.updateProjectionMatrix();
        engine.setViewport(0, 0, w/2., h);
        engine.setScissor(0, 0, w/2., h);
        engine.render(scene, cameraActive);
    }
    update();
    requestAnimationFrame(renderLoop);
}

function main()
{ 
    // CANVAS
    canvas = document.getElementById("canvas");

    // RENDERER ENGINE
    engine = new THREE.WebGLRenderer({canvas: canvas});
    engine.setSize(window.innerWidth, window.innerHeight);
    engine.setClearColor(new THREE.Color(0.2, 0.2, 0.35), 1.);   
    engine.setScissorTest(true);
    engine.autoclear = false;  

    // SCENE
    scene = new THREE.Scene();

    // FLOOR
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({wireframe: true, color: "gray"})); 
    floor.rotation.set(-Math.PI / 2., 0., 0.);    

     // AXES HELPER
    var axesHelper = new THREE.AxesHelper(5);
    axesHelper.position.set(0., 0.01, 0.);

    // OBSERVER CAMERA
    cameraObserver = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    cameraObserver.position.set(5., 5, 10.);
    cameraObserver.lookAt(scene.position); 
    cameraObserver.up.set(0., 1., 0.);  

    // ACTIVE CAMERA
    cameraActive = new THREE.PerspectiveCamera(60., 0.5*canvas.width / canvas.height, 1., 20.);  // CAMERA
    controlCameraActive = new THREE.OrbitControls(cameraActive, canvas);
    cameraActive.position.set(-2., 5., 5.); 
    cameraActive.lookAt(scene.position);   
    cameraActive.up.set(0., 1., 0.); 
    controlCameraActive.update();    
       
    // CAMERA HELPER
    cameraHelper = new THREE.CameraHelper(cameraActive);

 // [START FORMS]
    /**
     * Declaring the inclined plane and its vectors
     */
    // PRISM
    PrismGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);

    vectorA = new THREE.Vector2( 0, 3 ); // HEIGHT Y-AXIS - OPPOSITE CATHETUS
    vectorB = new THREE.Vector2( 0, 0 ); // ORIGIN
    vectorC = new THREE.Vector2( 3, 0 ); // WIDTH X-AXIS - ADJACENT CATHETUS

    var depth = 3;                   
    var geometry = new PrismGeometry( [vectorA, vectorB, vectorC], depth ); 

    var material = new THREE.MeshPhongMaterial( {color: 0x00b2fc, specular: 0x00ffff, shininess: 20 } );

    var rightTriangle = new THREE.Mesh( geometry, material );

    /**
     * Declaring the cube
     */
    hipotenuse = Math.sqrt(Math.pow(vectorA.getComponent(1), 2) * Math.pow(vectorC.getComponent(0), 2));
    modelHipotenuse = Math.sqrt(Math.pow(vectorA.getComponent(1), 2) * Math.pow(vectorC.getComponent(0), 2));
    cubeAngle = Math.atan(vectorA.getComponent(1)/vectorC.getComponent(0));
    cube = new THREE.Mesh(new THREE.CubeGeometry(), new THREE.MeshStandardMaterial({color: "red"})); 
    cube.rotation.z = -cubeAngle;
    cube.position.set(.7,3,depth/2);
    // NOTE: In order to move the cube based on the rotation angle given, we need to translate in the y-axis
    // cube.translateX(2.6);
    //cube.position.set(0.5, 0.5, depth/2);
    // cube.translateY(vectorA.getComponent(1) - .5);
    // cube.translateX(1.5 - Math.PI / 4);
    //cube.translateY(vectorA.getComponent(1)-.5);
   //cube.rotation.z = -Math.atan(vectorA.getComponent(1)/vectorC.getComponent(0));
    //cube.translateY(.32);
    // cube.castShadow = true;
    // cube.receiveShadow = true;
    // [END FORMS]

    // LIGHTS
    var ambientLight = new THREE.AmbientLight("white", 0.2);
    // POINTLIGHT 1
    var pointLight1 = new THREE.PointLight("white", 5.);
    var sphereSize = 0.1;
    var pointLightHelper = new THREE.PointLightHelper(pointLight1, sphereSize);
    pointLight1.position.set(0., vectorA.getComponent(1) * 2, 0.);
   
    // SCENEGRAPH      
    scene.add(floor);
    scene.add(axesHelper);
    scene.add(rightTriangle);
    scene.add(cube); 
    scene.add(cameraObserver); 
    scene.add(cameraActive); 
    scene.add(cameraHelper);
    scene.add(ambientLight);
    scene.add(pointLight1);
    scene.add(pointLightHelper);
                               
    // EVENT-HANDLERS
    window.addEventListener('resize', resizeWindow, false);
    document.addEventListener("keydown", keyDownEventListener, false);

    // ACTION
    requestAnimationFrame(renderLoop);           
}