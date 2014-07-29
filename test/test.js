var ModuleTestDataURIScheme = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("DataURIScheme", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       false,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        test_DataURIScheme_DataURIToString_success,
        test_DataURIScheme_DataURIToString_failure,
        test_DataURIScheme_DataURIToString_success,
        test_DataURIScheme_DataURIToString_failure,
    ]).run().clone();

function test_DataURIScheme_StringToDataURI_success(test, pass, miss) {
    var original = "a𠮟b💩";
    DataURIScheme.StringToDataURI(original, "text/plain", function(err, dataURI){
        Valid(Valid.type(err, "Error|null"), test_DataURIScheme_StringToDataURI_success, "err");
        Valid(Valid.type(dataURI, "String"), test_DataURIScheme_StringToDataURI_success, "dataURI");
        if (dataURI === "data:text/plain;charset=utf-8;base64,YfCgrp9i8J+SqQ==") {
            test.done(pass(dataURI));
        }else{
            test.done(miss(err));
        }
    });
}

function test_DataURIScheme_StringToDataURI_failure(test, pass, miss) {
    test.done(pass());
}

function test_DataURIScheme_DataURIToString_success(test, pass, miss) {
    var dataURI = "data:text/plain;charset=utf-8;base64,YfCgrp9i8J+SqQ==";
    DataURIScheme.DataURIToString(dataURI, function(err, str){
        Valid(Valid.type(err, "Error|null"), test_DataURIScheme_DataURIToString_success, "err");
        Valid(Valid.type(str, "String"), test_DataURIScheme_DataURIToString_success, "str");
        if (str === "a𠮟b💩") {
            test.done(pass(str));
        }else{
            test.done(miss(err));
        }
    });
}

function test_DataURIScheme_DataURIToString_failure(test, pass, miss) {
    var dataURI = "data:";
    DataURIScheme.DataURIToString(dataURI, function(err, str){
        Valid(Valid.type(err, "Error|null"), test_DataURIScheme_DataURIToString_failure, "err");
        Valid(Valid.type(str, "String"), test_DataURIScheme_DataURIToString_failure, "str");
        if (!!err) {
            test.done(pass(err));
        }else{
            test.done(miss(str));
        }
    });
}

})((this || 0).self || global);
