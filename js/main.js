$(document).on("click", "button.top", function(){
    $('html, body').animate({scrollTop:0}, 1000);
});


$(document).on("click", ".post-vacancy-btn", function(e){
	e.stopPropagation();
	if($(this).hasClass('active')){
		$(this).find('.dropdown').slideUp();
		$(this).removeClass('active');
	} else {
		$(this).find('.dropdown').slideDown();
		$(this).addClass('active');
	}
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

$(document).on('click','.mob-large-search-panel',function () {
	$('body').find('.large-search .none').stop().slideToggle();
});

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

$(document).on('click','.make-premium-modal-1',function (e) {
	e.stopPropagation()
	$('body').find('.modal-1').fadeIn();
	$('body').css('overflow','hidden');
});

$(document).on('click','.make-premium-modal-2',function (e) {
	e.stopPropagation();
	$('body').find('.modal-2').fadeIn();
	$('body').css('overflow','hidden');
});

$(document).on('click','.popup-close',function () {
    $('body').find('.premium-popup').fadeOut();
    $('body').css('overflow','unset');
});


$(document).click(function(){
	$('body').find(".dropdown").slideUp();
	$('body').find(".post-vacancy-btn").removeClass('active');
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
});


$(document).on('click', '.title-bar', function (e) {
	$('body').find('.premium-post-ul>li').addClass('deactive');
	$(this).parent('li').removeClass('deactive');
	$('body').find('#vacancy-with-text')[0].reset();
	$('body').find('#vacancy-with-audio')[0].reset();
	$('body').find('.bottom-part .name').html('');
	$('body').find('.bottom-part .size').html('');
	$('body').find('.chosen-file').fadeOut(100);
});

$(document).on('click', '.choose-file', function (e) {
	e.preventDefault();
	$('body').find('.bottom-part input').click();
});

$(document).ready(function(){
	$('body').find('.bottom-part input[type="file"]').change(function(e){
		var fileName = e.target.files[0].name;
		$('body').find('.chosen-file').fadeIn(100);
		$('body').find('.bottom-part .name').html(fileName);
	});
	$('.bottom-part input').bind('change', function() {
		$('body').find('.bottom-part .size').html(Math.round((this.files[0].size/1024)) + ' ' + 'KB');
	});
});

$(document).on('click', '.textarea-part .delete', function () {
	var $el = $('#example-file');
	$el.wrap('<form>').closest('form').get(0).reset();
	$el.unwrap();
	$('body').find('.bottom-part .name').html('');
	$('body').find('.bottom-part .size').html('');
	$('body').find('.chosen-file').fadeOut(100);
});

$(function () {
	if($('body').find('.premium-post').length > 0){
		$('.phone').mask('000 000 00 00');

		$('#vacancy-with-text').parsley();

		var topheighterror;

		$(document).ready(function () {
			topheighterror = $('body').find('.premium-post').offset().top;
		});

		$(document).on('click', '.premium-post .left .submit', function () {
			$('html, body').animate({scrollTop:topheighterror}, 1000);
		});
	}
});


$(document).ready(function() {
	$('body').find('.large-search select').niceSelect();
});

$(document).on('change', '.large-search select', function () {
	var search_1 = $('body').find('.large-search-1');
	var search_2 = $('body').find('.large-search-2');
	var search_3 = $('body').find('.large-search-3');

	if(search_1.val() == '0' && search_2.val() == '0' && search_3.val() == '0') {
		$('body').find('.large-search .delete').removeClass('active');
	} else {
		$('body').find('.large-search .delete').addClass('active');
	}
});


$(function () {
	var window_location = window.location.search;

	if (window_location.includes('category')){
		$('body').find('.large-search').slideDown();
	}
});
