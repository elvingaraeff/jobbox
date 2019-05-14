var parsleyVar;
var phoneClone;
var phoneCount = 1;

$(function () {
    var $sections = $('.form-section');
    phoneClone = $('.label-phone-div')[0].outerHTML;
    parsleyVar = $('.post-form').parsley();
    $('.edit-form').parsley();
    function navigateTo(index) {
        $sections
            .removeClass('current')
            .eq(index)
            .addClass('current');
        var atTheEnd = index >= $sections.length - 1;
        $('.next-part').toggle(!atTheEnd);
        $('[type=submit]').toggle(atTheEnd);
    }

    function curIndex() {
        return $sections.index($sections.filter('.current'));
    }
    var topheighterror;
    var topheightsuccess;

    $(document).ready(function () {
        topheighterror = $('body').find('.post').offset().top;
        topheightsuccess = $('body').find('.post .right').offset().top;
    });
    $(window).resize(function () {
        topheighterror = $('body').find('.post').offset().top;
        topheightsuccess = $('body').find('.post .right').offset().top;
    });

    $('.next-part').click(function() {
        $('.right.form-section').addClass('hide-errors');
        setTimeout(function () {
            if ($('.left.form-section .parsley-error').length === 0) {
                $('html, body').animate({scrollTop:topheightsuccess - 100}, 1000);
                $('body').find('.next-part').hide();
                $('body').find('.deactive').removeClass('deactive');
            } else {
                $('.right.form-section').addClass('hide-errors');
            }
        });

        window.Parsley.on('field:error', function ( form ) {
            $('html, body').animate({scrollTop:topheighterror}, 1000);
            window.Parsley.off('field:error')
        });
    });

    $('.submit').click(function() {
        $('.right.form-section').removeClass('hide-errors');
    })

    $sections.each(function(index, li) {
        $(li).find(':input').attr('data-parsley-group', 'block-' + index);
    });
    navigateTo(0);
    var errorCount = 0;

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

$(document).ready(function(){
    $('.phone').mask('000 000 00 00');
});
