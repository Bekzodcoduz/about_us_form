(function ($) {
    'use strict';

    /* ================================
       Date Picker
    ================================= */
    try {
        $('.js-datepicker').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            autoUpdateInput: false,
            locale: {
                format: 'DD/MM/YYYY'
            }
        });

        var myCalendar = $('.js-datepicker');
        var isClick = 0;

        // Window click -> close datepicker
        $(window).on('click', function () {
            isClick = 0;
        });

        // Apply date
        $(myCalendar).on('apply.daterangepicker', function (ev, picker) {
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
        });

        // Calendar button click
        $('.js-btn-calendar').on('click', function (e) {
            e.stopPropagation();

            if (isClick === 1) isClick = 0;
            else if (isClick === 0) isClick = 1;

            if (isClick === 1) {
                myCalendar.focus();
            }
        });

        // Datepicker click
        $(myCalendar).on('click', function (e) {
            e.stopPropagation();
            isClick = 1;
        });

        // Prevent closing on calendar popup click
        $('.daterangepicker').on('click', function (e) {
            e.stopPropagation();
        });

    } catch (er) {
        console.log(er);
    }

    /* ================================
       Select2 Simple
    ================================= */
    try {
        var selectSimple = $('.js-select-simple');

        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');

            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    } catch (err) {
        console.log(err);
    }

})(jQuery);
