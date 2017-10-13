
let body = document.getElementsByTagName('body')[0];

  for (let i = 0; i < 63; i++){
    let newDiv = document.createElement('div');
    let randomHex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    newDiv.style.float = 'left';
    newDiv.style.width = '11.1%';
    newDiv.style.paddingBottom = '11.1%';
    newDiv.style.backgroundColor = randomHex;



    body.appendChild(newDiv);
}
function flash() {
  for (var i = 0; i < body.children.length; i++) {
    let randomHex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    body.children[i].style.backgroundColor = randomHex
  }
}
setInterval(flash, 1);
