var link = document.getElementById('link');
console.log(link);

var randomTop = Math.round(Math.random() * 850);
var randomLeft = Math.round(Math.random() * 1200);


link.style.top = `${randomTop}px`;
link.style.left = `${randomLeft}px`;