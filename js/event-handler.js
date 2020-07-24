// Resets the canvas dimensions to match div

function resizeWindow(event)
{   
    canvas.width = canvasSize/3;
    canvas.height = canvasSize/3;
    engine.setSize(canvas.width, canvas.height);
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
}



