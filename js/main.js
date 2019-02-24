$(document).on("click", "button.top", function(){
    $('html, body').animate({scrollTop:0}, 1000);
});

$(document).on('click','.row-view', function(){
	$(this).closest('.category-self').find('.middle').addClass('row-view-cat');
	$(this).closest('.category-self').find('.col-view').removeClass('active');
	$(this).addClass('active');
});

$(document).on('click','.col-view', function(){
	$(this).closest('.category-self').find('.middle').removeClass('row-view-cat');
	$(this).closest('.category-self').find('.row-view').removeClass('active');
	$(this).addClass('active');
});

$(document).on('change', '.label-part select', function () {
	if($(this).val !== '0'){
		$(this).css('color','#000');
	}
})

$(document).on('click','.large-search-open',function () {
    $('body').find('.large-search').stop().slideToggle();
    $(this).toggleClass('active');
})
//
// $(document).on('click','.mob-large-search-panel',function () {
// 	$('body').find('.large-search .none').stop().slideToggle();
// })

$(document).on('click','.row-view-index',function () {
	$(this).closest('section').find('.col-view').addClass('row-view');
	$(this).closest('section').find('.col-view-index').removeClass('active');
	$(this).addClass('active');
})

$(document).on('click','.col-view-index',function () {
	$(this).closest('section').find('.col-view').removeClass('row-view');
	$(this).closest('section').find('.row-view-index').removeClass('active');
	$(this).addClass('active');
})

$('.best-employers .owl-carousel').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	dots:true,
	responsive:{
		0:{
			items:2
		},
		450:{
			items:3
		},
		560:{
			items:4
		},
		768:{
			items:5
		},
		992:{
			items:6
		}
	}
});

$('.popup').owlCarousel({
	loop:false,
	margin:0,
	nav:false,
	dots:true,
	items: 1
});

$(document).on('click','.make-premium-modal-1',function () {
	$('body').find('.modal-1').fadeIn();
	$('body').css('overflow','hidden');
});

$(document).on('click','.make-premium-modal-2',function () {
	$('body').find('.modal-2').fadeIn();
	$('body').css('overflow','hidden');
});

$(document).on('click','.popup-close',function () {
    $('body').find('.premium-popup').fadeOut();
    $('body').css('overflow','unset');
});

$(window).resize(function(){
	$(function(){
		if($(window).width() <= 800){
			$('body').find('.col-view').removeClass('row-view');
			$('body').find('.category-self .container .middle').removeClass('row-view-cat');
		}
	});
});

$(document).on('change', 'body', function () {
	$('body').find('.ui-helper-hidden-accessible').empty();
})
