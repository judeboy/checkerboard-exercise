
var body = document.getElementsByTagName('body')[0];

  for (var i = 0; i < 63; i++){
    var newDiv = document.createElement('div');

    newDiv.style.float = 'left';
    newDiv.style.width = '11.1%';
    newDiv.style.paddingBottom = '11.1%';

    if ( i % 2 === 0){
      newDiv.style.backgroundColor = 'red';
    } else {
      newDiv.style.backgroundColor = 'black';
    }
    body.appendChild(newDiv);
}
