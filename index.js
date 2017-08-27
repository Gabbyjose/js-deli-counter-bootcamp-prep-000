
var katzDeli = [];

function takeANumber(katzDeliLine, name){
  return katzDeliLine +1;
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return katzDeli.unshift();
  }
}