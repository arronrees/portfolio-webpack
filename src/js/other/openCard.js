export function openCard(container) {
  const cardBtn1 = container.querySelector('.open1');
  const cardBtn2 = container.querySelector('.open2');
  const cardBtn3 = container.querySelector('.open3');
  const cardBtn4 = container.querySelector('.open4');
  const cardText1 = container.querySelector('.card-text1');
  const cardText2 = container.querySelector('.card-text2');
  const cardText3 = container.querySelector('.card-text3');
  const cardText4 = container.querySelector('.card-text4');

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
