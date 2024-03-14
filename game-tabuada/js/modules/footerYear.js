export default function footerYear(){
  const date = new Date();
  const year = date.getFullYear();

  const yearFooter = document.querySelector('[data-js="yearFooter"]');

  yearFooter.innerText = year;
}