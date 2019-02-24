var phoneClone;

$(function () {
    phoneClone = $('.label-phone-div')[0].outerHTML;
    $('.edit-form').parsley();
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