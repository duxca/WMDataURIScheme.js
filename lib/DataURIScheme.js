(function(global) {
"use strict";

// --- dependency module -----------------------------------
//{@dev
//  This code block will be removed in `$ npm run build-release`. http://git.io/Minify
var Valid = global["Valid"] || require("uupaa.valid.js"); // http://git.io/Valid
//}@dev

// --- local variable --------------------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function DataURIScheme() { // @ret this
}

DataURIScheme["repository"] = "https://github.com/legokichi/DataURIScheme.js"; // GitHub repository URL. http://git.io/Help

DataURIScheme["StringToDataURI"] = DataURIScheme_StringToDataURI; // DataURIScheme.StringToDataURI(str, mimetype, callback):void
DataURIScheme["DataURIToString"] = DataURIScheme_DataURIToString; // DataURIScheme.DataURIToString(dataURI, callback):void

// --- implement -------------------------------------------
function DataURIScheme_StringToDataURI(str,        // @arg String
                                       mimeType,   // @arg MimeTypeString
                                       callback) { // @arg Function - callback(err:Error|null, String:DataURISchemeString):void
                                                   // @ret void
//{@dev
    Valid(Valid.type(str, "String"), DataURIScheme_StringToDataURI, "str");
    Valid(Valid.type(mimeType, "String"), DataURIScheme_StringToDataURI, "mimetype");
    Valid(Valid.type(callback, "Function"), DataURIScheme_DataURIToString, "callback");
//}@dev
    var reader = new FileReader();
    reader.addEventListener("loadend", function() {
        var dataURI = reader.result.replace(";base64,", ";charset=utf-8;base64,");
        // example: data:text/plain;charset=utf-8;base64,YfCgrp9i8J+SqQ==
        //{@dev
        console.info(dataURI);
        //}@dev
        callback(null, dataURI);
    });
    reader.addEventListener("error", function(ev) {
        var err = new Error(ev.target.error.name+": "+ev.target.error.message);
        console.info(err);
        callback(err, "");
    });
    reader.readAsDataURL(new Blob([str], {type: mimeType}));
}

function DataURIScheme_DataURIToString(dataURI,    // @arg DataURISchemeString
                                       callback) { // @arg Function - callback(err:Error|null, String):void
                                                   // @ret void
//{@dev
    Valid(Valid.type(dataURI, "String"), DataURIScheme_DataURIToString, "dataURI");
    Valid(Valid.type(callback, "Function"), DataURIScheme_DataURIToString, "callback");
//}@dev
    if(!/^data\:.*?base64\,.+/.test(dataURI)){
        setTimeout(function(){
            callback(new Error("Unvalid format. "+dataURI), "");
        });
        return;
    }
    var tmp = dataURI.split(',');
    var mimeType = tmp[0].split(':')[1].split(';')[0];
    var byteString = atob(tmp[1]);
    var bytes = new Uint8Array(byteString.length);
    for (var i=0; i < bytes.length; i++) {
        bytes[i] = byteString.charCodeAt(i);
    }
    var reader = new FileReader();
    reader.addEventListener("loadend", function() {
        //{@dev
        console.info(reader.result);
        //}@dev
        callback(null, reader.result);
    });
    reader.addEventListener("error", function(ev) {
        var err = new Error(ev.target.error.name+": "+ev.target.error.message);
        console.info(err);
        callback(err, "");
    });
    reader.readAsText(new Blob([bytes.buffer], {type: mimeType}));
}

// --- export ----------------------------------------------
if ("process" in global) {
    module["exports"] = DataURIScheme;
}
global["DataURIScheme" in global ? "DataURIScheme_" : "DataURIScheme"] = DataURIScheme; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule
