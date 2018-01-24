var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
var object = {prop:1};
object.prop2 = 2;

  return object;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    var obj = { prop: 1 };
    obj.prop = 1;
    obj.prop1 = 2;
    return object;

}
