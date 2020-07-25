"use strict"
var canvas;
var engine;
var scene;
var camera;
var cube;
var divContainer;
var canvasSize;
var PrismGeometry;
var vectorA, vectorB, vectorC;

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
    // shape1.rotation.y = shape1.rotation.y + 0.01;
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

    // SCENE
    scene = new THREE.Scene();  

    // CAMERA
    camera = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    camera.position.set(5., 4., 8.);           
    var controls = new THREE.OrbitControls(camera, canvas);    

    // MODELS
    // AXES HELPER
    var axesHelper = new THREE.AxesHelper(10.);
    axesHelper.position.set(0., 0.1, 0.);

    // FLOOR
    var floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshLambertMaterial({color: "grey"}));          
    floor.rotation.x = -Math.PI / 2.;

    // [START FORMS]
    /**
     * Declaring the inclined plane and its vectors
     */
    // PRISM
    PrismGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);

    vectorA = new THREE.Vector2( 0, 3 );
    vectorB = new THREE.Vector2( 0, 0 );
    vectorC = new THREE.Vector2( 3, 0 );

    var depth = 3;                   
    var geometry = new PrismGeometry( [vectorA, vectorB, vectorC], depth ); 

    var material = new THREE.MeshPhongMaterial( {color: 0x00b2fc, specular: 0x00ffff, shininess: 20 } );

    var rightTriangle = new THREE.Mesh( geometry, material );

    /**
     * Declaring the cube
     */
    cube = new THREE.Mesh(new THREE.CubeGeometry(), new THREE.MeshStandardMaterial({color: "red"})); 
    cube.position.set(2.7, 1, 1.5);
    cube.rotation.z = Math.PI / 4;
    cube.castShadow = true;
    cube.receiveShadow = true;
    // [END FORMS]


    // LIGHTS
    var ambientLight = new THREE.AmbientLight("white", 0.2);
    // POINTLIGHT 1
    var pointLight1 = new THREE.PointLight("white", 5.);
    var sphereSize = 0.1;
    var pointLightHelper = new THREE.PointLightHelper(pointLight1, sphereSize);
    pointLight1.position.set(0., 6., 0.);

    // SCENEGRAPH
    scene.add(floor);
    scene.add(axesHelper);
    scene.add(rightTriangle);
    scene.add(cube);
    scene.add(camera); 
    scene.add(ambientLight);
    scene.add(pointLight1);
    scene.add(pointLightHelper);

    // EVENT-HANDLERS
    window.addEventListener('resize', resizeWindow, false);

    // ACTION
    requestAnimationFrame(renderLoop);           
}




