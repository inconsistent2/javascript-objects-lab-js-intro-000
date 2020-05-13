

var recipes={};
var newrecipe={};
function updateObjectWithKeyAndValue(object, key, value){
newrecipe=object.assign({},recipes)
newrecipe[key]=value
  return newrecipe
}
