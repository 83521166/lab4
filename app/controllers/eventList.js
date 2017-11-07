// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var dept_id = args.dept_id || {};

$.win.title = dept_id;

Alloy.Collections.events.fetch();

$.win.addEventListener("close", function(){ 
    $.destroy();
});

function filterFunction(collection) { 
    return collection.where({db_dept_id:dept_id});
}

