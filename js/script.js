$('.burger-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.header__row').toggleClass('active');
	$('body').toggleClass('lock');
});


$('.content__column').click(function(event) {
	$('.content__column').removeClass('active');
	$('.content__block').removeClass('active');
	$(this).addClass('active');
	var Link_num=$('.content__column.active').attr('data-number-effect')
	$('.content__block[data-number-effect="' + Link_num + '"]').addClass('active')
});

let ClearForm = () => {
	$(document).on('click','.icon-clear', function () {
		$(this).parent().find('input').val('');
	}); 
};

ClearForm ();


/*function turnRight() {
  turnEllipse(30);
}

function turnLeft() {
  turnEllipse(-30);
}*/
$('.icon-clear').click(function(event) {
//function turnIcon(degrees) {
	var degrees=180;
  var angle = $(this).find('img').data("angle");
  if (!angle)
    angle = 0;
  angle = +angle + degrees;
  $(this).find('img')
    .data("angle", angle)
    .css({ transform: "rotate(" + angle + "deg)", transition: "0.5s ease" });
});

/*
$(document).ready(function() {
   var mh = 0;
   $(".content__block").each(function () {
       var h_block = $(this).height();
       console.log(h_block);
       if(h_block > mh) {
          mh = h_block;
       };
   });
   //$(".content__block").height(mh);
   $('.content__block').css('max-height', height);
});
*/


if($(window).width() < 425) {
	//Скрипт отработатет после загрузки картинок
	$('.content__block img').load(function(){
	    var height = 0;
	    $('.content__block').each(function(){
	        var h = $(this).height();
	        if (h > height) {
	            height = h;
	        }
	    });
	    //$('.content__block').height(height);
	    //Или так
	    $('.content__block').css('min-height', height);
	});
};



$('.block-commerce__show').click(function(event) {
	$('.commerce-sidebar__block.block-commerce').toggleClass('disabled');
});


function ibg () {
	$.each($('.ibg'),function(index,val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();


$(document).ready(function() {
	$('.header__slider').slick({
		//autoplay:true,
		//infinite:false,
		//dots:false,
		//arrows:true,
		//accessibility:false,
		//slidesToShow:1,
		//autoplaySpeed:3000
	});
});