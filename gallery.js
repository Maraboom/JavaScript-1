
function addPanel() {
  const gallery = document.querySelector('#gallery');
  const mainImage = document.createElement('div');
  const panelItems = document.createElement('div');
  const panel = document.createElement('div');
  const bar = document.createElement('div');
  const arrLeft = document.createElement('button');
  const arrRight = document.createElement('button');


  mainImage.classList.add('main-image');
  panelItems.classList.add('panel-items');
  panel.classList.add('panel');
  bar.classList.add('bar');

  arrLeft.classList.add('array', 'array-left');
  arrRight.classList.add('array', 'array-right');

  arrLeft.textContent = '<';
  arrRight.textContent = '>';
  

  gallery.append(mainImage);
  gallery.append(panelItems);
  panelItems.append(arrLeft);
  panelItems.append(panel);
  panelItems.append(arrRight);
  panel.append(bar);
  


  for (let i= 0; i < 10; i++) {
    addImages('panel-image');
  }
}


function addImages( extraClass ) {
  const bar = document.querySelector('.bar');

  const image = document.createElement('div');
  image.classList.add('square');
  if (extraClass) image.classList.add(extraClass);

  bar.append(image);
}

addPanel();



