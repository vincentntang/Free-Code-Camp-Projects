// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  
  //Disprove it
  var allTrue = true;
  
  //collection is an array of objects, collection[i] is an object
  //Check if each object has property
  for (let i =0; i<collection.length; i++){
    if(!collection[i].hasOwnProperty(pre)){
      allTrue = false;
    }
    
    if(!collection[i][pre]){
      allTrue=false;
    }
  }
  
  
  
  if(collection.length)
  
  return allTrue;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") // should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") // should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") // should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") // should return true
truthCheck([{"single": "yes"}], "single") // should return true
truthCheck([{"single": ""}, {"single": "double"}], "single") // should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single") // should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single") // should return false
