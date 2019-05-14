$(document).on("click", "button.top", function(){
    $('html, body').animate({scrollTop:0}, 1000);
});


$(document).on("click", ".post-vacancy-btn", function(e){
	e.stopPropagation();
	if($(this).hasClass('active')){
		$(this).find('.dropdown').slideUp();
		$(this).removeClass('active');

		setTimeout(function () {
			$('body').find('.post-vacancy-btn').removeClass('hover');
		}, 400);
	} else {
		$(this).find('.dropdown').slideDown();
		$(this).addClass('active hover');
	}
});

$(document).on('click','.row-view', function(){
	$(this).closest('.category-self').find('.middle').addClass('row-view-cat');
	$(this).closest('.category-self').find('.col-view').removeClass('active');
	$(this).addClass('active');
	window.localStorage.setItem('row-view', 'true');
});

$(document).on('click','.col-view', function(){
	$(this).closest('.category-self').find('.middle').removeClass('row-view-cat');
	$(this).closest('.category-self').find('.row-view').removeClass('active');
	$(this).addClass('active');
	window.localStorage.setItem('row-view', 'false');
});

$(document).on('change', '.label-part select', function () {
	if($(this).val !== '0'){
		$(this).css('color','#000');
	}
})

$(document).on('click','.large-search-open',function () {
    if($('body').hasClass('active-filter')) {
		$('body').find('.large-search').stop().slideUp();
		$(this).removeClass('active');

		setTimeout(function () {
			$('body').removeClass('active-filter');
		}, 300);
	} else {
		$('body').find('.large-search').stop().slideToggle();
		$(this).toggleClass('active');
	}
});

$(document).on('click','.mob-large-search-panel',function () {
	$('body').find('.large-search .none').stop().slideToggle();
});

$(document).on('click','.row-view-index',function () {
	$('body').find('section .col-view').addClass('row-view');
	$('body').find('section .col-view-index').removeClass('active');
	window.localStorage.setItem('row-view', 'true');
	$('body').find('.row-view-index').addClass('active');
});

$(document).on('click','.col-view-index',function () {
	$('body').find('section .col-view').removeClass('row-view');
	$('body').find('section .row-view-index').removeClass('active');
	window.localStorage.setItem('row-view', 'false');
	$('body').find('.col-view-index').addClass('active');
});

$(function () {
	var storage = window.localStorage.getItem('row-view');
	switch (storage) {
		case 'true':
			$('body').find('section .col-view').addClass('row-view');
			$('body').find('section .col-view-index').removeClass('active');
			$('body').find('.row-view-index').addClass('active');
			$('body').find('.category-self .middle').addClass('row-view-cat');
			$('body').find('.category-self .row-view').addClass('active');
			$('body').find('.category-self .col-view').removeClass('active');
			break;
		case 'false':
			$('body').find('section .col-view').removeClass('row-view');
			$('body').find('section .row-view-index').removeClass('active');
			$('body').find('.col-view-index').addClass('active');
			$('body').find('.category-self .middle').removeClass('row-view-cat');
			$('body').find('.category-self .row-view').removeClass('active');
			$('body').find('.category-self .col-view').addClass('active');
			break;
	}
});

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
	e.stopPropagation();
	$('body').find('.modal-1').fadeIn();
	$('body').css('overflow','hidden');
});

$(document).mouseup(function (e) {
	let modal1 = $('.premium-popup-self');

	if (! modal1.is(e.target) && modal1.has(e.target).length === 0)  {
		$('body').find('.premium-popup').fadeOut();
		$('body').css('overflow','unset');
	}
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

	setTimeout(function () {
		$('body').find('.post-vacancy-btn').removeClass('hover');
	}, 400);
});



$(document).on('change', 'body', function () {
	$('body').find('.ui-helper-hidden-accessible').empty();
});


$(document).on('click', '.premium-post-ul .left .title-bar', function () {
	$('body').find('.premium-inside form#vacancy-with-text').removeClass('deactive').addClass('active');
	$('body').find('.premium-inside form#vacancy-with-audio').removeClass('active').addClass('deactive');
	$('body').find('.premium-post-ul .left').removeClass('deactive').addClass('active');
	$('body').find('.premium-post-ul .right').removeClass('active').addClass('deactive');
});

$(document).on('click', '.premium-post-ul .right .title-bar', function () {
	$('body').find('.premium-inside form#vacancy-with-text').removeClass('active').addClass('deactive');
	$('body').find('.premium-inside form#vacancy-with-audio').removeClass('deactive').addClass('active');
	$('body').find('.premium-post-ul .left').removeClass('active').addClass('deactive');
	$('body').find('.premium-post-ul .right').removeClass('deactive').addClass('active');
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
		var phoneClone;
		var phoneCount = 1;
		phoneClone = $('.label-phone-div')[0].outerHTML;

		$('.phone').mask('000 000 00 00');

		$('#vacancy-with-text').parsley();
		$('#vacancy-with-audio').parsley();

		var topheighterror;

		$(document).ready(function () {
			topheighterror = $('body').find('.premium-post').offset().top;
		});

		$(document).on('click', '#vacancy-with-text .submit', function () {
			$('html, body').animate({scrollTop:topheighterror}, 1000);

			if($('body').find('.premium-inside textarea').val() == 0){
				$('body').find('.premium-inside .bottom-part').css('background','transparent');
			}
		});

		$(document).on('click', '#vacancy-with-audio .submit', function () {
			$('html, body').animate({scrollTop:topheighterror}, 1000);

			if($('body').find('.premium-inside textarea').val() == 0){
				$('body').find('.premium-inside .bottom-part').css('background','transparent');
			}
		});

		$(document).on('keyup', '.premium-inside', function () {
			if($('body').find('.premium-inside textarea').val() == 0){
				$('body').find('.premium-inside .bottom-part').css('background','transparent');
			} else {
				$('body').find('.premium-inside .bottom-part').css('background','#fff');
			}
		});

		$(document).on('change', '.premium-inside textarea', function () {
			if($('body').find('.premium-inside textarea').val() == 0){
				$('body').find('.premium-inside .bottom-part').css('background','transparent');
			} else {
				$('body').find('.premium-inside .bottom-part').css('background','#fff');
			}
		});

		$(document).on('click', '.premium-button', function (e) {
			e.preventDefault();
			location.reload();
		});

		$(document).on('click','.add-number', function () {
			phoneCount = phoneCount + 1;

			if(phoneCount <= 3){
				$(phoneClone).insertAfter('.label-phone-div:last');

				var index = parseInt($('.label-phone-div-parent>div').length);

				$('.label-phone-div-parent>div:last label').attr('for', 'phone-checkbox-' + index);
				$('.label-phone-div-parent>div:last [type="checkbox"]').attr('id', 'phone-checkbox-' + index);
				$('.phone').mask('000 000 00 00');

				$('.label-phone-div-parent>div:last input[type="text"]').attr('name', 'phones['+ index +'][phone]');
				$('.label-phone-div-parent>div:last input[type="checkbox"]').attr('name', 'phones['+ index +'][display]');
			} else {
				$('body').find('.add-number').hide();
				$('body').find('.remove-number').fadeIn().css('display', 'block');
			}
		});

		$(document).on('click','.remove-number', function () {
			phoneCount = phoneCount - 1;

			if(phoneCount > 1){
				var index = parseInt($('.label-phone-div').length) - 1;
				$('.label-phone-div-parent').children().last().remove();
			} else {
				$('body').find('.remove-number').hide();
				$('body').find('.add-number').fadeIn();
			}
		});
	}
});


$(document).ready(function() {
	$('body').find('.large-search select').niceSelect();
});

$(document).on('click', '.large-search .delete', function () {
	var search_1 = $('body').find('.large-search-1');
	var search_2 = $('body').find('.large-search-2');
	var search_3 = $('body').find('.large-search-3');

	search_1.prop('selectedIndex',0);
	search_2.prop('selectedIndex',0);
	search_3.prop('selectedIndex',0);
	$('body').find('.large-search .delete').removeClass('active');
	$('body').find('.large-search select').niceSelect('update');
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

$(function () {
	var hash = window.location.hash;
	switch (hash) {
		case '#audio':
			$('body').find('.premium-post-ul .left').removeClass('active').addClass('deactive');
			$('body').find('.premium-post-ul .right').removeClass('deactive').addClass('active');
			$('body').find('#vacancy-with-text').removeClass('active').addClass('deactive');
			$('body').find('#vacancy-with-audio').removeClass('deactive').addClass('active');
			break;
		case '#text':
			$('body').find('.premium-post-ul .left').removeClass('deactive').addClass('active');
			$('body').find('.premium-post-ul .right').removeClass('active').addClass('deactive');

			$('body').find('#vacancy-with-text').removeClass('deactive').addClass('active');
			$('body').find('#vacancy-with-audio').removeClass('active').addClass('deactive');
			break;
	}
});

$(document).on('click', '.premium-button', function (e) {
	e.preventDefault();
});

$(window).resize(function(){
	$(function(){
		if($(window).width() <= 800){
			$('body').find('.col-view').removeClass('row-view');
			$('body').find('.category-self .container .middle').removeClass('row-view-cat');
		}
	});
});
$(document).ready(function () {
	if($(window).width() <= 800){
		$('body').find('.col-view').removeClass('row-view');
		$('body').find('.category-self .container .middle').removeClass('row-view-cat');
	}
});

$(document).on('click','.edit-popup', function () {
	$('body').find('.edit-popup-modal').fadeIn(300);
	$('body').css('overflow','hidden');
});
$(document).mouseup(function (e) {
	let edit1 = $('.epm-inside');

	if (! edit1.is(e.target) && edit1.has(e.target).length === 0)  {
		$('body').find('.edit-popup-modal').fadeOut();
		$('body').css('overflow','unset');
	}
});
$(document).on('click','.edit-popup-modal .close', function () {
	$('body').find('.edit-popup-modal').fadeOut(300);
});

$(document).on('click','.delete-popup', function () {
	$('body').find('.delete-popup-modal').fadeIn(300);
	$('body').css('overflow','hidden');
});
$(document).mouseup(function (e) {
	let edit2 = $('.epm-inside');

	if (! edit2.is(e.target) && edit2.has(e.target).length === 0)  {
		$('body').find('.delete-popup-modal').fadeOut();
		$('body').css('overflow','unset');
	}
});
$(document).on('click','.delete-popup-modal .close', function () {
	$('body').find('.delete-popup-modal').fadeOut(300);
});

$(document).on('click','.complain-popup', function () {
	$('body').find('.complain-popup-modal').fadeIn(300);
	$('body').css('overflow','hidden');
});
$(document).mouseup(function (e) {
	let edit3 = $('.epm-inside');

	if (! edit3.is(e.target) && edit3.has(e.target).length === 0)  {
		$('body').find('.complain-popup-modal').fadeOut();
		$('body').css('overflow','unset');
	}
});
$(document).on('click','.complain-popup-modal .close', function () {
	$('body').find('.complain-popup-modal').fadeOut(300);
});

$(document).on('click', '#vacancy-agree', function () {
	if($('#vacancy-agree').prop("checked") == true){
		$('body').find('.input-price-ul').addClass('none');
		$('body').find('.input-price-ul input').removeAttr('required').removeClass('parsley-error');
		$('body').find(".input-price-ul .parsley-errors-list").addClass('fill-out');
	} else {
		$('body').find('.input-price-ul').removeClass('none');
		$('body').find('.input-price-ul input').attr("required", "true");
		$('body').find(".input-price-ul .parsley-errors-list").removeClass('fill-out');
	}
});


// for filter bar active

function filterbar() {
	$('body').find('.large-search-open').addClass('active');
	$('body').find('.large-search').addClass('active');

}


$(document).on('keyup', '#salary-2', function () {
	if($('body').find('#salary-1').val() !== '' && $('body').find('#salary-1').val() == $(this).val()){
		$(this).addClass('parsley-error');
		$(this).parent('li').find('.equal-salary-error').fadeIn(100).css('display', 'block');
	} else {
		$(this).removeClass('parsley-error');
		$(this).parent('li').find('.equal-salary-error').fadeOut(100);
	}
});
$(document).on('keyup', '#salary-1', function () {
	if($('body').find('#salary-2').val() !== '' && $('body').find('#salary-2').val() == $(this).val()){
		$(this).addClass('parsley-error');
		$(this).parent('li').find('.equal-salary-error').fadeIn(100).css('display', 'block');
	} else {
		$(this).removeClass('parsley-error');
		$(this).parent('li').find('.equal-salary-error').fadeOut(100);
	}
});

