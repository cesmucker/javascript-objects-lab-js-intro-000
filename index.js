var recipes = { flour: "1 cup"}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({[key]:value}, recipes)
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes [key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe[key]
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}
