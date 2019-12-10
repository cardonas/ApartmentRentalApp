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
    $("#pets").validate();
    $("#emergencyContacts").validate();
    $("#testForm4").validate();

    $("#tabs").tabs({

        disabled: [0, 1, 2, 3, 4, 5, 6, 8],
        active: 7,
        heightStyle: "fill"

    });

    // information section
    $("#appInfoSubmit").button();
    $("#appInfoSubmit").click(function () {

        if ($("#appInfo").valid()) {
            $("#tabs").tabs({
                disabled: [0, 2, 3, 4, 5, 6, 7, 8],
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
                disabled: [0, 1, 3, 4, 5, 6, 7, 8],
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
        $('#occupantUnder18').removeAttr('id');
        $('#occupantFields').clone(true).attr('id', 'occupantFields')
            .find('input:text').val('').find('input:checkbox').removeAttr('checked').end().appendTo("#newOccupant");
        $('#occupantFields input.date').datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: '-120:+0',
            maxDate: 0,
            dateFormat: 'mm/dd/y'
        });
        $('#occupantUnder18').prop('checked', false);
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
            disabled: [0, 1, 2, 4, 5, 6, 7, 8],
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

        $("#tabs").tabs({
            disabled: [0, 1, 2, 3, 5, 6, 7, 8],
            active: 4
        });

    });

    $("#appEmploymentSubmit").button();
    $("#appEmploymentSubmit").click(function () {

        if ($('#appEmployment1').valid() && $('#appEmployment2').valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 3, 4, 6, 7, 8],
                active: 5
            });
        }
    });


    $("#appEmerContactSubmit").button();
    $("#appEmerContactSubmit").click(function () {

        if ($('#emergencyContact').valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 3, 4, 5, 7, 8],
                active: 6
            });
        }
    });

    $("#appReferenceSubmit").button();
    $("#appReferenceSubmit").click(function () {

        if ($('#references').valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 3, 4, 5, 6, 8],
                active: 7
            });
        }
    });

    $("#explain1").hide();
    $("#explain2").hide();
    $("#explain3").hide();
    $("#explain4").hide();


    $("#bankruptcyYes").change(
        function () {
            $("#explain1").show();
        }
    );

    $("#bankruptcyNO").change(
        function () {
            $("#explain1").hide();
        }
    );

    $("#refuseRent1").change(
        function () {
            $("#explain2").show();
        }
    );

    $("#refuseRent2").change(
        function () {
            $("#explain2").hide();
        }
    );

    $("#evictedYes").change(
        function () {
            $("#explain3").show();
        }
    );

    $("#evictedNo").change(
        function () {
            $("#explain3").hide();
        }
    );

    $("#crimeYes").change(
        function () {
            $("#explain4").show();
        }
    );

    $("#crimeNo").change(
        function () {
            $("#explain4").hide();
        }
    );

    $("#appBackgroundSubmit").button();
    $("#appBackgroundSubmit").click(function () {

        if ($('#backgroundInfo').valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 3, 4, 5, 6, 7],
                active: 8
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