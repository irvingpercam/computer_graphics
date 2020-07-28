"use strict"
var canvas;
var engine;
var scene;
var cube;
var camera;
var light;
var multiview = false;
var controlCameraActive;
var PrismGeometry;
var vectorA, vectorB, vectorC;
var cubeAngle;
var hipotenuse;
var material;
var modelHipotenuse;
var rightTriangle;
var guiControls;

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
    engine.render(scene, camera);
    update();
    requestAnimationFrame(renderLoop);
}

function main()
{ 
    // CANVAS
    canvas = document.getElementById("canvas");

    // RENDERER ENGINE
    engine = new THREE.WebGLRenderer({antialias: true, canvas: canvas});
    engine.setSize(window.innerWidth, window.innerHeight);
    engine.setClearColor(new THREE.Color(0.2, 0.2, 0.35), 1.);   

    // SCENE
    scene = new THREE.Scene();

    // FLOOR
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({wireframe: true, color: "gray"})); 
    floor.rotation.set(-Math.PI / 2., 0., 0.);    

     // AXES HELPER
    var axesHelper = new THREE.AxesHelper(5);
    axesHelper.position.set(0., 0.01, 0.);

    // ORTOGRAPHIC CAMERA
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(5., 4., 8.);           
    var controls = new THREE.OrbitControls(camera, canvas);

    // ARROW HELPER
    var direction = new THREE.Vector3(1.7, 1.7, 0);
    var length = direction.length();
    var uDirection = direction.normalize();
    var origin = new THREE.Vector3(0.7, 3.0, 1.5);
    var color = "blue";
    var arrowHelper = new THREE.ArrowHelper(uDirection, origin, length, color);

    // ARROW HELPER
    var direction = new THREE.Vector3(-1.7, -1.7, 0);
    var length = direction.length();
    var uDirection = direction.normalize();
    var origin = new THREE.Vector3(0.7, 3.0, 1.5);
    var color = "green";
    var arrowHelper2 = new THREE.ArrowHelper(uDirection, origin, length, color);

    // ARROW HELPER
    var direction = new THREE.Vector3(0., -2.0, 0);
    var length = direction.length();
    var uDirection = direction.normalize();
    var origin = new THREE.Vector3(0.7, 3.0, 1.5);
    var color = "red";
    var arrowHelper3 = new THREE.ArrowHelper(uDirection, origin, length, color);

     // ARROW HELPER
    var direction = new THREE.Vector3(-1.7, 2.0, 0);
    var length = direction.length();
    var uDirection = direction.normalize();
    var origin = new THREE.Vector3(0.7, 3.0, 1.5);
    var color = "black";
    var arrowHelper4 = new THREE.ArrowHelper(uDirection, origin, length, color);

    // GUI
    guiControls = { deltaThetaX: 0., 
                    deltaThetaY: 0.,
                    wireframe : false
                  };
    var datGui = new dat.GUI();
    var sliderDeltaThetaX = datGui.add(guiControls, 'deltaThetaX').min(1.).max(4.).step(1.).name('X');
    var sliderDeltaThetaY = datGui.add(guiControls, 'deltaThetaY').min(1.).max(4.).step(1.).name('Y');
    var choice = datGui.add(guiControls, 'wireframe').name('Wireframe');
    datGui.close();

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

    material = new THREE.MeshPhongMaterial( {color: 0x00b2fc, specular: 0x00ffff, shininess: 20 } );

    rightTriangle = new THREE.Mesh( geometry, material );

    /**
     * Declaring the cube
     */
    var texture = new THREE.TextureLoader().load("img/minecraft.jpg");
    var tex = new THREE.MeshPhongMaterial({map: texture});
    cube = new THREE.Mesh(new THREE.CubeGeometry(), tex); 
    hipotenuse = Math.sqrt(Math.pow(vectorA.getComponent(1), 2) * Math.pow(vectorC.getComponent(0), 2));
    modelHipotenuse = Math.sqrt(Math.pow(vectorA.getComponent(1), 2) * Math.pow(vectorC.getComponent(0), 2));
    cubeAngle = Math.atan(vectorA.getComponent(1)/vectorC.getComponent(0));
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
    cube.castShadow = true;
    cube.receiveShadow = true;
    // [END FORMS]

    // LIGHTS
    var ambientLight = new THREE.AmbientLight("white", 0.2);
    // POINTLIGHT 1
    var pointLight1 = new THREE.PointLight("white", 3.);
    var sphereSize = 0.1;
    var pointLightHelper = new THREE.PointLightHelper(pointLight1, sphereSize);
    pointLight1.position.set(0., vectorA.getComponent(1) * 2, 0.);
   
    // SCENEGRAPH      
    scene.add(floor);
    scene.add(axesHelper);
    scene.add(rightTriangle);
    scene.add(cube); 
    scene.add(camera); 
    scene.add(ambientLight);
    scene.add(pointLight1);
    scene.add(pointLightHelper);
    scene.add(arrowHelper);
    scene.add(arrowHelper2);
    scene.add(arrowHelper3);
    scene.add(arrowHelper4);
                               
    // EVENT-HANDLERS
    window.addEventListener('resize', resizeWindowB, false);
    sliderDeltaThetaX.onChange(sliderDeltaThetaXEventListener);
    sliderDeltaThetaY.onChange(sliderDeltaThetaYEventListener);
    choice.onChange(choiceOnChange);
    // ACTION
    requestAnimationFrame(renderLoop);           
}