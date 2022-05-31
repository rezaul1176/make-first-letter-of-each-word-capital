var strTemp1, strTemp2, strOutput = "";
var strInput = prompt("Write a sentence : ");
var strArray = strInput.split(" ");
console.log(strArray);
for (var i=0; i<strArray.length; i++) {
    strTemp1 = strArray[i];
    strTemp2 = strTemp1.slice(0,1);
    strTemp1 = strTemp1.slice(1,strTemp1.length);
    strTemp1 = strTemp1.toLowerCase();
    strTemp2 = strTemp2.toUpperCase();
    strTemp2 = strTemp2.concat(strTemp1);
    strOutput = strOutput.concat(strTemp2);
    strOutput = strOutput.concat(" ");
}
document.writeln(strOutput);
console.log(strOutput);