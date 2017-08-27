
var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine+1} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return katzDeli.shift();
  }
}

function currentLine(katzDeliLine){
  var lineStr = `The line is current: `;
  if (katzDeliLine.length === 0){
    return "The line is currently empty";
  }
  else {
    for(n=0; n<katzDeliLine.length; n++){
      lineStr += `${n}. ${katzDeliLine[n]}, `
    }
  }
  return lineStr.substr(0, lineStr.length-3);
}
