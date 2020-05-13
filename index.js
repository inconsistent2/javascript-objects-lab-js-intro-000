

var recipes={};
function updateObjectWithKeyAndValue(object, key, value){
var newObj={}
var obj={key:value}
newObj=object.assign({}, obj)
//newObj[key]=value
  return newObj
}
