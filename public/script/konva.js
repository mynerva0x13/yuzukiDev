const container = document.getElementById('container');

// Dynamically set the stage size to fit the container
const fitCanvasToContainer = () => {
  const containerWidth = container.offsetWidth; // Actual container width
  const containerHeight = container.offsetHeight; // Actual container height

  stage.width(containerWidth);
  stage.height(containerHeight);
};

// Initialize the stage
const stage = new Konva.Stage({
  container: 'container',
  width: container.offsetWidth,
  height: container.offsetHeight,
});

window.addEventListener('resize', fitCanvasToContainer);

var layer = new Konva.Layer();
stage.add(layer);

// then we are going to draw into special canvas2 element
var canvas2 = document.createElement('canvas');
canvas2.width = stage.width();
canvas2.height = stage.height();
canvas2.className="flex"
// created canvas2 we can add to layer as "Konva.Image" element
var image = new Konva.Image({
  image: canvas2,
  x: 0,
  y: 0,
});
layer.add(image);

// Good. Now we need to get access to context element
var context = canvas2.getContext('2d');
context.strokeStyle = '#df4b26';
context.lineJoin = 'round';
context.lineWidth = 5;

var isPaint = false;
var lastPointerPosition;
var mode = 'brush';

// now we need to bind some events
image.on('mousedown touchstart', function () {
  isPaint = true;
  lastPointerPosition = stage.getPointerPosition();
});

stage.on('mouseup touchend', function () {
  isPaint = false;
});

stage.on('mousemove touchmove', function () {
  if (!isPaint) {
    return;
  }

  if (mode === 'brush') {
    context.globalCompositeOperation = 'source-over';
  }
  if (mode === 'eraser') {
    context.globalCompositeOperation = 'destination-out';
  }
  context.beginPath();

  var localPos = {
    x: lastPointerPosition.x - image.x(),
    y: lastPointerPosition.y - image.y(),
  };
  context.moveTo(localPos.x, localPos.y);
  var pos = stage.getPointerPosition();
  localPos = {
    x: pos.x - image.x(),
    y: pos.y - image.y(),
  };
  context.lineTo(localPos.x, localPos.y);
  context.closePath();
  context.stroke();

  lastPointerPosition = pos;
  // redraw manually
  layer.batchDraw();
});

var select = document.getElementById('tool');
select.addEventListener('change', function () {
  mode = select.value;
});

// Change color based on input color picker
document.getElementById('color').addEventListener('input', function () {
  context.strokeStyle = this.value;
});

// Change line width based on input number
document.getElementById('linewidth').addEventListener('input', function () {
  context.lineWidth = parseInt(this.value, 10);
});

// Reset the canvas drawing
document.getElementById('reset').addEventListener('click', function () {
  context.clearRect(0, 0, canvas2.width, canvas2.height); // Clear the drawing area
  layer.batchDraw(); // Redraw the layer
});