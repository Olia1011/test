// import diamond from './Diamond.js';

$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})


// ======Diamond=======
// const refs ={
//  rating: document.querySelector('.raiting_btn'),
// icon: document.querySelector('.rating_icon')
// }

// const fragment = document.createDocumentFragment();
// diamond.forEach(image => {
//     refs.rating.insertAdjacentHTML('beforeend',
//     `<li class="rating_icon">
//         <a class="gallery__link" href=${image.original}>
//             <img class="gallery__image" src=${image.preview} data-source=${image.original}" />
//         </a>
//     </li>`)
// })

// refs.rating.appendChild(fragment);

// refs.icon.addEventListener('mouseenter', clickIcon);

//  function clickIcon(e){
//         if (event.target === event.currentTarget) {
//           return;
//         }
//         event.preventDefault();
// 		refs.icon.classList.add("active");
// 		refs.icon.classList.remove("active");
//         // refs.icon.setAttribute("src", event.target.dataset.source);
//       };
