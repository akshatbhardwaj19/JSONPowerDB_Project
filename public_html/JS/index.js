var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIML = "/api/iml";
var jpdbIRL = "/api/irl";
var dbName = "DELIVERY-DB";
var relName = "SHIPMENT-TABLE";
var token = "90934828|-31949264464916559|90957842";

$("#shipNo").focus();

function resetForm() {
    const today = new Date().toISOString().split("T")[0];

    $("#shipNo").val("");
    $("#desc").val("");
    $("#source").val("");
    $("#dest").val("");
    $("#sDate").val(today);
    $("#dDate").val(today);
    $("#shipNo").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#shipNo").focus();
}

function saveData() {
    var jsonObj = validateData();
    if (jsonObj === "") {
        return "";
    }

    var putRequest = createPUTRequest(token, jsonObj, dbName, relName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});

    resetForm();
    $("#shipNo").focus();
}

function validateData() {
    var shipNo, desc, source, dest, sDate, dDate;

    shipNo = $("#shipNo").val();
    desc = $("#desc").val();
    source = $("#source").val();
    dest = $("#dest").val();
    sDate = $("#sDate").val();
    dDate = $("#dDate").val();

    if (shipNo === "") {
        alert("Shippment No. is missing");
        $("#shipNo").focus();
        return "";
    }
    if (desc === "") {
        alert("Description is missing");
        $("#desc").focus();
        return "";
    }
    if (source === "") {
        alert("Source is missing");
        $("#source").focus();
        return "";
    }
    if (dest === "") {
        alert("Destination is missing");
        $("#dest").focus();
        return "";
    }
//    if(sDate = ""){
//        alert("Shipping date is missing");
//        $("#sDate").focus();
//        return "";
//    }
//    if(dDate = ""){
//        alert("Delivery date is missing");
//        $("#dDate").focus();
//        return "";
//    }

    var jsonObj = {
        ship_no: shipNo,
        description: desc,
        source: source,
        destination: dest,
        shipping_date: sDate,
        delivery_date: dDate
    };
    return JSON.stringify(jsonObj);
}

function updateData(){
    $("#update").prop("disabled", true);
    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(token, jsonChg, dbName, relName, localStorage.getItem("recno"));
    
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    
    console.log(resJsonObj);
    resetForm();
    $("#shipNo").focus();
}

function getShippment(){
    var shipId = $("#shipNo").val();
    var jsonStr = {
        id: shipId
    };
    var shipNo = JSON.stringify(jsonStr);
    
    var getRequest = createGET_BY_KEYRequest(token, dbName, relName, shipNo);
    
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    
    if (resJsonObj.status === 200){
        $("#shipNo").prop("disabled", true);
        fillData(resJsonObj);
        
        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#desc ").focus();
    }
    else if(resJsonObj.status === 400){
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#desc ").focus();
    }
}

function fillData(jsonObj){
    saveRecNo(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    
    $("#shipNo").val(record.ship_no);
    $("#desc").val(record.description);
    $("#source").val(record.source);
    $("#dest").val(record.destination);
    $("#sDate").val(record.shipping_date);
    $("#dDate").val(record.delivery_date);
}

function saveRecNo(jsonObj){
    var recData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", recData.rec_no);
}