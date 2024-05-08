var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

 // Face Circle
 ctx.beginPath();
 ctx.arc(150, 125, 100, 0, Math.PI * 2);
 ctx.fillStyle = "yellow";
 ctx.fill();
 ctx.strokeStyle = "#000000";
 ctx.lineWidth = 4;
 ctx.stroke();
 ctx.closePath();

 // Eyes
 ctx.beginPath();
 ctx.arc(125, 105, 8, 0, Math.PI * 2);
 ctx.arc(175, 105, 8, 0, Math.PI * 2);
 ctx.fillStyle = "#000000";
 ctx.fill();
 ctx.closePath();

 // Mouth
 ctx.beginPath();
 ctx.arc(150, 150, 35, 0, Math.PI, false);
 ctx.strokeStyle = "#000000";
 ctx.stroke();
 ctx.closePath();

 // Name
 ctx.font = '40PT Brush Script MT';
 ctx.fillStyle = 'black';
 ctx.text
 ctx.fillText('Mr. Smiley', 45, 275);