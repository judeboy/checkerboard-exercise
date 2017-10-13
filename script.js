
let body = document.getElementsByTagName('body')[0];
body.style.background = "linear-gradient(to right,green,teal,blue,indigo,violet, magenta)";

  for (let i = 0; i < 63; i++){
    let newDiv = document.createElement('div');

    newDiv.style.border = '1px';
    newDiv.style.float = 'left';
    newDiv.style.width = '11.1%';
    newDiv.style.paddingBottom = '11.1%';

    if (i % 2 === 0) {
      newDiv.style.backgroundColor = "rgba(173, 33, 99, " + (.02 * i) + ")";
    } else {
      newDiv.style.backgroundColor = "rgba(13, 133, 199, " + (.02 * i) + ")";
    }
    body.appendChild(newDiv);
}
