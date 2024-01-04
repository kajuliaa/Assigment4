let DRAWPOINTS = true; // change to false if you don't want pointA and pointB to be drawn
// --------------------- DO NOT EDIT BELOW ---------------------
var pointA = null;
var pointB = null;
var updatePointA = true;
var ctx = canvas.getContext("2d", { willReadFrequently: true });
canvas.addEventListener("click", function (event) {
  // update point positions
  let x = event.offsetX;
  let y = event.offsetY;
  if (updatePointA) {
    pointA = [x, y];
  } else {
    pointB = [x, y];
  }
  updatePointA = !updatePointA;
  // clear canvas and draw points
  clearAndDraw();
});

function clearAndDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let thickness = Number(document.getElementById("thickness").value);
  let dashed = document.getElementById("dashed").checked;
  ctx.fillStyle = "black";
  // --------------------- DO NOT EDIT ABOVE ---------------------

  // Your code goes here!

  // --------------------- DO NOT EDIT BELOW ---------------------
  if (DRAWPOINTS) {
    ctx.fillStyle = "red";
    if (pointA != null) {
      ctx.fillRect(pointA[0] - 2, pointA[1] - 2, 5, 5);
    }
    ctx.fillStyle = "green";
    if (pointB != null) {
      ctx.fillRect(pointB[0] - 2, pointB[1] - 2, 5, 5);
    }
    console.log(pointA, pointB);
  }
  // --------------------- DO NOT EDIT ABOVE ---------------------
}

function bresenham(pointA, pointB) {
  // Your code goes here!
  let y = pointA[1];
  let a = pointB[0] - pointA[0];
  let b = pointB[1] - pointA[1];
  let d = 2 * b - a;
  let pixels = [];
  let x = pointA[0];
  let length = pointB[0] - pointA[0] + 1;
  for (let i = 0; i < length; i++) {
    pixels[i] = [x, y];
    x = x + 1;
    if (d > 0) {
      y = y + 1;
      d = d - 2 * a + 2 * b;
    } else {
      d = d + 2 * b;
    }
  }

  for (let i in pixels) {
    let element = pixels[i];
    ctx.fillRect(element[0], element[1], 5, 5);
  }
  return pixels;
}
