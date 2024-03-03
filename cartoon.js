document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(200, 200, 30, 0, Math.PI * 2);
  ctx.arc(240, 200, 30, 0, Math.PI * 2);
  ctx.arc(280, 200, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = '#228B22';
  for (var i = 0; i < canvas.width; i += 20) {
    ctx.fillRect(i, canvas.height - 50, 10, 50);
  }

  ctx.fillStyle = '#CD853F';
  ctx.fillRect(300, 300, 200, 200);

  ctx.fillStyle = 'white';
  ctx.fillRect(330, 330, 50, 50);
  ctx.fillRect(420, 330, 50, 50);

  ctx.fillStyle = '#8B4513';
  ctx.fillRect(370, 450, 60, 100);

  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('My Cartoon', 20, 30);
});

