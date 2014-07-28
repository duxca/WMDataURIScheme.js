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
        testIntegration,
    ]).run().clone();

function testIntegration(test, pass, miss) {
    var original = "a𠮟b💩";
    DataURIScheme.StringToDataURI(original, "text/plain", function(dataURI){
        DataURIScheme.DataURIToString(dataURI, function(str){
            if (str === original) {
                test.done(pass());
            } else {
                test.done(miss());
            }
        });
    });
}

})((this || 0).self || global);
