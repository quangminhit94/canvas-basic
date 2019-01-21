(function () {
  let canvas = document.getElementById('demo');
  

  // check browser support
  if(canvas.getContext) {
    // start to draw here
    var ctx = canvas.getContext('2d');

    // canvas.addEventListener('mousemove', e => _showCordinateOnMouse(e));

    _drawReactangle(ctx);
    _drawStrokeRect(ctx);
    _drawClearRect(ctx);
    _drawRectangleWithPath1(ctx);
    _drawRectangleWithPath2(ctx);
    _drawFace(ctx);

  } else {
    // show text not support 
    _showTextNotSupport();
  }

  var mouse_ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 0,
    type: 'mouse'
  }

  function _showCordinateOnMouse(e) {
    ctx.fillStyle = 'red';
    ctx.fillText("StackOverflow",e.clientX, e.clientY);
    console.log(e.clientX, e.clientY)
  }


  // fillRect(x, y, width, height)
  // Draws a filled rectangle.(vẽ hình vuông có màu)
  function _drawReactangle(ctx) {
    // set màu cho canvas fill mặc định màu đen
    ctx.fillStyle = '#fff263';
    ctx.fillRect(10, 10, 50, 50);
  }

  // strokeRect(x, y, width, height)
  // Draws a rectangular outline. (chỉ vẽ viền của hình vuông)
  function _drawStrokeRect(ctx) {
    // set màu cho canvas stroke
    ctx.strokeStyle = '#b085f5';
    ctx.strokeRect(70, 10, 50, 50);
  }

  // clearRect(x, y, width, height)
  // Clears the specified rectangular area, making it fully transparent. (xoá một khoảng vuông bên trong một hình vuông có màu)
  function _drawClearRect(ctx) {
    // vẽ hình vuông 100x100 ở toạ độ x, y
    ctx.fillStyle = '#64c1ff';
    ctx.fillRect(130, 10, 100, 100);
    // xóa khoảng vuông 60x60 ở toạ độ x, y
    ctx.clearRect(150, 30 , 60, 60);
  }
  
  
  // Cách vẽ hình vuông 3
  function _drawRectangleWithPath1(ctx) {
    // khởi tạo path
    ctx.beginPath();
    // moveTo(x, y)
    // Moves the pen to the coordinates specified by x and y.(di chuyển cây bút đến toạ độ)
    ctx.moveTo(240, 10); // điểm bắt đầu
    ctx.lineTo(340, 10); // vẽ tiếp sang phải 100
    ctx.lineTo(340, 110); // vẽ tiếp xuống dưới 100
    ctx.lineTo(240, 110); // vẽ tiếp sang trái 100
    ctx.fillStyle = '#ff3d00';
    // hàm fill tự động đóng path
    ctx.fill();
  }

  // Cách vẽ hình vuông 2
  function _drawRectangleWithPath2(ctx) {
    // khởi tạo path
    ctx.beginPath();
    // moveTo(x, y)
    // Moves the pen to the coordinates specified by x and y.(di chuyển cây bút đến toạ độ)
    ctx.moveTo(350, 10); // điểm bắt đầu
    ctx.lineTo(350, 110); // vẽ tiếp xuống dưới 100
    ctx.lineTo(450, 110); // vẽ tiếp sang phải 100
    ctx.lineTo(450, 10); // vẽ tiếp lên trên 100
    ctx.fillStyle = '#9be7ff';
    // hàm fill tự động đóng path
    ctx.fill();
  }

  // vẽ mặt
  function _drawFace(ctx) {
    // khởi tạo path
    ctx.beginPath();
    // arc(x, y, radius, startAngle, endAngle, anticlockwise)
    ctx.arc(510, 60, 50, 0, Math.PI * 2, true); // Outer circle
    // // Moves the pen to the coordinates specified by x and y.(di chuyển cây bút đến toạ độ)
    ctx.moveTo(545, 60);
    ctx.arc(510, 60, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(490, 35);
    ctx.arc(490, 35, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(530, 35);
    ctx.arc(530, 35, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    ctx.strokeStyle = '#66ffa6';
    // hàm fill tự động đóng path
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