var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
var object = {prop:1};
object.prop2 = 2;

  return object;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    var object = { prop: 1 };
    object.prop = 1;
    object.prop1 = 2;
    return object;

}
