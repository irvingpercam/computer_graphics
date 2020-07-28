// Resets the canvas dimensions to match window
function resizeWindow(event)
{   
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    engine.setSize(canvas.width, canvas.height);
    // camera.aspect = canvas.width / canvas.height;
    // camera.updateProjectionMatrix();
    if(!multiview)
    {
        // OBSERVER  CAMERA
        cameraObserver.aspect = canvas.width / canvas.height;
        cameraObserver.updateProjectionMatrix();
    }
    else
    {
        // OBSERVER CAMERA
        cameraObserver.aspect = canvas.width / 2. / canvas.height;
        cameraObserver.updateProjectionMatrix();

        // ACTIVE CAMERA
        cameraActive.aspect = canvas.width / 2. / canvas.height;
        cameraActive.updateProjectionMatrix();
    }    
}
function keyDownEventListener(event)
{ 
	if(event.keyCode == 32)	// Space bar
	{
		multiview = !multiview;
	}
}
function resizeWindowB(event)
{   
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    engine.setSize(canvas.width, canvas.height);
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();  
}