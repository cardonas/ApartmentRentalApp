$(document).ready(function () {

    console.log("Bump....");

    $("#confirm").dialog({
        title: "Submit application?",
        autoOpen: false,
        buttons: [
            {
                text: "I agree",
                icon: "ui-icon-check",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Cancel",
                icon: "ui-icon-cancel",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });


    $("#appInfo").validate();
    $("#appAddress").validate();
    $("#otherOccupants").validate();
    $("#testForm3").validate();
    $("#testForm4").validate();

    $("#tabs").tabs({

        disabled: [0, 1, 3, 4, 5],
        active: 2,
        heightStyle: "content"

    });

    // information section
    $("#appInfoSubmit").button();
    $("#appInfoSubmit").click(function () {

        if ($("#appInfo").valid()) {
            $("#tabs").tabs({
                disabled: [0, 2, 3, 4, 5],
                active: 1
            });
        }
    });

    //Address section
    $("#addAnotherAddress").button();
    $("#deleteAddress").button().hide();
    $("#addAnotherAddress").click(function () {
        $('#deleteAddress').show();
        $('.dateRange input.date').removeAttr('id').datepicker("destroy");
        $('#appPreviousAddress').clone(true).find('input:text').val('').end().insertAfter("#appPreviousAddress");
        $('.dateRange input.date').datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '-120:+0',
            maxDate: 0,
            dateFormat: 'mm/dd/y'
        });
        $('#deleteAddress').hide().on('click', function (e) {
            e.preventDefault();
        });
    });

    $('#deleteAddress').click(function () {
        $(this).hide();
        $(this).closest('#appPreviousAddress').remove();
    });


    $("#appAddressSubmit").button();
    $("#appAddressSubmit").click(function () {

        if ($("#appCurrentAddress").valid() && $('#appPreviousAddress').valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 3, 4, 5],
                active: 2
            });
        }

    });

    // Additional Occupant section
    $("#addOccupant").button();
    $("#deleteOccupant").button().hide();
    $("#addOccupant").click(function () {
        $('#deleteOccupant').show();
        $('#occupantFields input.date').removeAttr('id').datepicker("destroy");
        $('#occupantFields').clone(true).attr('id', 'occupantFields')
            .find('input:text').val('').end().appendTo("#newOccupant");

        $('#occupantFields input.date').datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '-120:+0',
            maxDate: 0,
            dateFormat: 'mm/dd/y'
        });
        $('#deleteOccupant').hide().on('click', function (e) {
            e.preventDefault();
        });
    });

    $('#deleteOccupant').click(function () {
        $(this).hide();
        $(this).closest('#occupantFields').remove();
    });


    $("#appOccupantsSubmit").button();
    $("#deleteOccupant").button().hide();
    $("#appOccupantsSubmit").click(function () {

        $("#tabs").tabs({
            disabled: [0, 1, 2, 4, 5],
            active: 3
        });


    });

    // Additional Occupant section
    $("#addPet").button();
    $("#deletePet").button().hide();
    $("#addPet").click(function () {
        $('#deletePet').show();
        $('#petFields input.date').removeAttr('id').datepicker("destroy");
        $('#petFields').clone(true).attr('id', 'petFields')
            .find('input:text').val('').end().appendTo("#newPet");
        $('#petFields input.date').datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '-120:+0',
            maxDate: 0,
            dateFormat: 'mm/dd/y'
        });
        $('#deletePet').hide().on('click', function (e) {
            e.preventDefault();
        });
    });

    $('#deletePet').click(function () {
        $(this).hide();
        $(this).closest('#petFields').remove();
    });


    $("#appPetsSubmit").button();
    $("#appPetsSubmit").click(function () {

        if ($("#pet").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 3, 5],
                active: 4
            });
        }

    });

    // $("#tab4submit").button();
    // $("#tab4submit").click(function(){
    //
    // 	if( $("#testForm0").valid() ){
    //
    // 		// bring up a jqueryui confirm dialog
    // 		$("#confirm").dialog( "open");
    // 	}
    //
    // });

    $('.date').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-120:+0',
        maxDate: 0,
        dateFormat: 'mm/dd/y'
    });


});