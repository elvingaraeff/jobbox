var parsleyVar;
var phoneClone;

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
    $(window).scroll(function () {
        console.log($(window).scrollTop())
    })

    $('.next-part').click(function() {
        $('.right.form-section').addClass('hide-errors');
        setTimeout(function () {
            if ($('.left.form-section .parsley-error').length === 0) {
                $('html, body').animate({scrollTop:topheightsuccess}, 1000);
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
    $(phoneClone).insertAfter('.label-phone-div:last');
    var count = $('.label-phone-div').length;
    $('.label-phone-div:last label').attr('for', 'phone-checkbox-'+count);
    $('.label-phone-div:last [type="checkbox"]').attr('id', 'phone-checkbox-'+count);
    $('.phone').mask('000 000 00 00');
});

$(document).ready(function(){
    $('.phone').mask('000 000 00 00');
});