

var recipes={};
function updateObjectWithKeyAndValue(object, key, value){
var newrecipe=object.assign({},recipes)
newrecipe[key]=value
  return newrecipe
}
