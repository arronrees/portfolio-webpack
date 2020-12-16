export function openCard() {
  const cardBtn1 = document.querySelector('.open1');
  const cardBtn2 = document.querySelector('.open2');
  const cardBtn3 = document.querySelector('.open3');
  const cardBtn4 = document.querySelector('.open4');
  const cardText1 = document.querySelector('.card-text1');
  const cardText2 = document.querySelector('.card-text2');
  const cardText3 = document.querySelector('.card-text3');
  const cardText4 = document.querySelector('.card-text4');

  cardBtn1.addEventListener('click', () => {
    cardBtn1.classList.toggle('open-rotate');
    cardText1.classList.toggle('card-open');
  });
  cardBtn2.addEventListener('click', () => {
    cardBtn2.classList.toggle('open-rotate');
    cardText2.classList.toggle('card-open');
  });
  cardBtn3.addEventListener('click', () => {
    cardBtn3.classList.toggle('open-rotate');
    cardText3.classList.toggle('card-open');
  });
  cardBtn4.addEventListener('click', () => {
    cardBtn4.classList.toggle('open-rotate');
    cardText4.classList.toggle('card-open');
  });
}
