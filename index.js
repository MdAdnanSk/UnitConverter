var fromNumber;
var fromSelect;
var toSelect;

var conversionString;

function getTempValue() {

    fromNumber = parseInt($(".fromTempNumber").val());
    fromSelect = $(".fromTempSelect option:selected").val();
    toSelect = $(".toTempSelect option:selected").val();

    conversionString = fromSelect + "to" + toSelect;

    tempconversion(conversionString);


}


function tempconversion(data) {
    switch (data) {
        case "CtoK":
            $(".toTempNumber").val(fromNumber + 273.15);
            break;

        case "CtoF":
            $(".toTempNumber").val(fromNumber * (9 / 5) + 32);
            break;

        case "KtoC":
            $(".toTempNumber").val(fromNumber - 273.15);
            break;

        case "KtoF":
            $(".toTempNumber").val((fromNumber - 273) * 9 / 5 + 32);
            break;

        case "FtoC":
            $(".toTempNumber").val((fromNumber - 32) * 5 / 9);
            break;

        case "FtoK":
            $(".toTempNumber").val((fromNumber - 32) * 5 / 9 + 273.15);
            break;

        default:
            $(".toTempNumber").val(fromNumber);
            break;
    }
}

function getLengthValue() {

    fromNumber = parseInt($(".fromLenghtNumber").val());
    fromSelect = $(".fromLenghtSelect option:selected").val();
    toSelect = $(".toLenghtSelect option:selected").val();


    conversionString = fromSelect + "to" + toSelect;
    lenghtConversion(conversionString);


}

function lenghtConversion(data) {
    switch (data) {
        case "mtocm":
            $(".toLenghtNumber").val(fromNumber * 100);
            break;

        case "mtokm":
            $(".toLenghtNumber").val(fromNumber / 1000);
            break;

        case "kmtom":
            $(".toLenghtNumber").val(fromNumber * 1000);
            break;

        case "kmtocm":
            $(".toLenghtNumber").val(fromNumber / 100000);
            break;

        case "cmtom":
            $(".toLenghtNumber").val(fromNumber * 100);
            break;

        case "cmtokm":
            $(".toLenghtNumber").val(fromNumber / 100000);
            break;


        default:
            $(".toLenghtNumber").val(fromNumber);
            break;
    }
}

function getAreaValue() {

    fromNumber = parseInt($(".fromAreaNumber").val());
    fromSelect = $(".fromAreaSelect option:selected").val();
    toSelect = $(".toAreaSelect option:selected").val();


    conversionString = fromSelect + "to" + toSelect;
    areaConversion(conversionString);


}

function areaConversion(data) {
    switch (data) {
        case "sqrkmtosqrm":
            $(".toAreaNumber").val(fromNumber * 1000000);
            break;

        case "sqrkmtosqrcm":
            $(".toAreaNumber").val(fromNumber * 10000000000 );
            break;

        case "sqrmtosqrkm":
            $(".toAreaNumber").val(fromNumber / 1000000);
            break;

        case "sqrmtosqrcm":
            $(".toAreaNumber").val(fromNumber * 10000 );
            break;

        case "sqrcmtosqrm":
            $(".toAreaNumber").val(fromNumber / 10000 );
            break;

        case "sqrcmtosqrkm":
            $(".toAreaNumber").val(fromNumber / 10000000000 );
            break;


        default:
            $(".toAreaNumber").val(fromNumber);
            break;
    }
}
