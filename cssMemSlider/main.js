const pagination = document.querySelector('.pagination');
let bullets = document.querySelectorAll('.pagination__bullet');
let slides = document.querySelectorAll('.slide');
pagination.onclick = function(event){  
   for(let el of bullets){
      el.classList.remove('active');
   }
   for(let el of slides){
      el.style.display = 'none';
   }
   let target = event.target;
   target.classList.add('active');
   let number = target.getAttribute("bulletCount");
   let slide = document.querySelector(`.slide[sliderCount = "${number}"]`);
   slide.style.display = 'block';
}