const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  const card = cards [i];
  card.addEventListener('mousemove', startRotate);
  card.addEventListener('mouseout', stopRotate);
}


function startRotate (event){
let cardItem = this.querySelector('.card-item');
// Ищем высоту карты и делим пополам
let half = cardItem.offsetHeight / 2;
cardItem.style.transform = 'rotateX('+ -(event.offsetY - half)/5 + 'deg )rotateY('+ (event.offsetX - half)/5 + 'deg )';
//cardItem.style.transform = 'rotateY('+ - (event.offsetX - halfHeight)/5 + ' deg) ';

}

function stopRotate (event){
  let cardItem = this.querySelector('.card-item');
  
  cardItem.style.transform = 'rotate(0)';
  
  }