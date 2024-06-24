function scuberGreetingForFeet(scuberLength ){
  
  let result;
  // if (scuberLength < 0){
  //   result = "Length cannot be less than 0.";
  // }

  if (scuberLength <= 400) {
    result = "This one is on me!";
  }
  else if (scuberLength > 400 && scuberLength <= 2000){
    result = 'That will be twenty bucks.';
  }
  else if (scuberLength > 2000 && scuberLength <= 2500){
    result = 'I will gladly take your thirty bucks.';
  }
  // else if(scuberLength > 2500){
  //   result = 'No can do.';
  // }
  else{
    result = 'No can do.';
  }
  return result;
} 

 
function ternaryCheckCity(cityName){
  let result;
  if (cityName === "NYC") {
    result = "Ok, sounds good.";
  }
  else {
    result = "No go.";
  }
  return result;
  
}

function switchOnCharmFromTip(charmFromTip){
  let result;
  if (charmFromTip === "generous") {
    result = "Thank you so much.";
  }
  else if (charmFromTip === "not as generous"){
    result = "Thank you.";
  }
  else if (charmFromTip === "thanks for everything"){
    result = "Bye.";
  }
  else {
    result = "Bye.";
  }
  return result;
 
}