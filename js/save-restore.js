(function () {

  let canvas = document.getElementById('clock');
  let ctx = canvas.getContext('2d');
  
  // init first draw
  function render () {
    _saveAndRestore(ctx);
    canvas.addEventListener('mousemove', e => _showCordinateOnMouse(e));
  }

  // check browser support
  if(canvas.getContext) {
    // start to draw here ( call render function)
    window.requestAnimationFrame(render);
  } else {
    // show text not support 
    _showTextNotSupport();
  }

  // show cordinate line when move mouse
  // this function is very helpfull to calculate
  function _showCordinateLine (e, react, xOfCanvas, yOfCanvas) {
    ctx.beginPath();
    ctx.restore();
    ctx.setLineDash([5, 10]);

    ctx.moveTo(xOfCanvas, yOfCanvas);
    ctx.lineTo(xOfCanvas, 0);
    ctx.moveTo(xOfCanvas, yOfCanvas);
    ctx.lineTo(e.clientX - react.right, yOfCanvas);
    ctx.moveTo(xOfCanvas, yOfCanvas);
    ctx.lineTo(e.clientX + react.right, yOfCanvas);
    ctx.moveTo(xOfCanvas, yOfCanvas);
    ctx.lineTo(xOfCanvas, e.clientY + react.bottom);
    
    ctx.strokeStyle = 'black';
    
    ctx.stroke();
  }

  function _showCordinateOnMouse(e) {
    // clear all canvas to redraw when move mouse
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    _saveAndRestore(ctx);
    
    let rect = canvas.getBoundingClientRect();
    // toa do canvas = toa do cua canvas so o vi tri scroll - toa do con chuot o vi tri scroll
    let xOfCanvas = e.clientX - rect.left;
    let yOfCanvas = e.clientY - rect.top;

    ctx.fillStyle = 'red';

    // show cordinate text on mouse
    ctx.font = '20px san-serif';
    ctx.fillText('(' + xOfCanvas + ', ' + yOfCanvas + ')', xOfCanvas+10, yOfCanvas-10);
    // show cordinate with dashed line
    _showCordinateLine(e, rect, xOfCanvas, yOfCanvas);
  }

  // Save and Restore function
  function _saveAndRestore(ctx) {
    ctx.fillStyle = 'green';
    ctx.setLineDash([1,1]);
    ctx.save();
    ctx.fillStyle = '#ff9800';
    ctx.fillRect(10, 10, 100, 100);

    // Restore the default state
    ctx.restore();
    ctx.fillRect(130, 10, 100, 100);
  
    
    ctx.beginPath();
    // arc(x, y, radius, startAngle, endAngle, anticlockwise)
    ctx.arc(300, 60, 50, 0, Math.PI*2, true); // Outer circle
    // // Moves the pen to the coordinates specified by x and y.(di chuyển cây bút đến toạ độ)
    ctx.moveTo(270, 60);
    ctx.arc(300, 60, 30, 0, Math.PI, false)  // Mouth (clockwise)
    ctx.moveTo(285, 40);
    ctx.arc(280, 40, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(325, 40);
    ctx.arc(320, 40, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    
  }
  












  function _showTextNotSupport() {
    var informText = document.createElement("div");
    informText.className = "inform-text";
    informText.innerHTML = "<p>This browser is not support Canvas</p>";
    // document.body.appendChild(informText);
    canvas.parentNode.replaceChild(informText, canvas);
  }
})();