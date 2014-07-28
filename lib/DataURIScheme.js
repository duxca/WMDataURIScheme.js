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
//{@dev
    //Valid(Valid.type(value, "Number|Integer|omit"), DataURIScheme, "value");
//}@dev
}

DataURIScheme["repository"] = "https://github.com/legokichi/DataURIScheme.js"; // GitHub repository URL. http://git.io/Help

DataURIScheme["StringToDataURI"] = DataURIScheme_StringToDataURI; // DataURIScheme.StringToDataURI(str, mimetype, callback):void
DataURIScheme["DataURIToString"] = DataURIScheme_DataURIToString; // DataURIScheme.DataURIToString(dataURI, callback):void

// --- implement -------------------------------------------
function DataURIScheme_StringToDataURI(str,        // @arg String
                                       mimetype,   // @arg MimeTypeString
                                       callback) { // @arg Function - callback(dataURI:DataURISchemeString):void
                                                   // @ret void
//{@dev
    Valid(Valid.type(str, "String"), DataURIScheme_StringToDataURI, "str");
    Valid(Valid.type(mimetype, "String"), DataURIScheme_StringToDataURI, "mimetype");
    Valid(Valid.type(callback, "Function"), DataURIScheme_StringToDataURI, "callback");
//}@dev

    var reader = new FileReader();
    reader.readAsDataURL(new Blob([str], {type: mimetype}));
    reader.addEventListener("loadend", function() {
        //{@dev
        console.log(reader.result);
        //}@dev
        callback(reader.result.replace(";base64,", ";charset=utf-8;base64,"));
    });
}

function DataURIScheme_DataURIToString(dataURI,    // @arg DataURISchemeString
                                       callback) { // @arg Function - callback(str:String):void
//{@dev
    Valid(Valid.type(dataURI, "String"), DataURIScheme_DataURIToString, "dataURI");
    Valid(Valid.type(callback, "Function"), DataURIScheme_DataURIToString, "callback");
//}@dev

    var tmp = dataURI.split(',');
    var mimetype = tmp[0].split(':')[1].split(';')[0];
    var byteString = atob(tmp[1]);
    var bytes = new Uint8Array(byteString.length);
    for (var i=0; i < bytes.length; i++) {
        bytes[i] = byteString.charCodeAt(i);
    }
    var reader = new FileReader();
    reader.readAsText(new Blob([bytes.buffer], {type: mimetype}));
    reader.addEventListener("loadend", function() {
        //{@dev
        console.log(reader.result);
        //}@dev
        callback(reader.result);
    });
}

// --- export ----------------------------------------------
if ("process" in global) {
    module["exports"] = DataURIScheme;
}
global["DataURIScheme" in global ? "DataURIScheme_" : "DataURIScheme"] = DataURIScheme; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule
