// let str = "1234";
// let str = "79 08 86 79";
// let str = "124 765 876 678";
let str = "4947 8505 6843 4597";
// let str = "3417 1218 1813 1311";
// let arr = str;

function splitString(str) {
  let arr = [];
  if (str.length >= 9) {
    arr = str.split(" ");
    return arr;
  } else {
    return null;
  }
}

console.log(splitString(str));

//==============================================

function reverseOddIndex(arr) {
  var newArr = [];
  arr.forEach((num, index) => {
    if (index % 2 === 1) {
      // ganjil
      newArr.push(num.split("").reverse().join(""));
    } else {
      // genap
      newArr.push(num);
    }
  });
  return newArr;
}

console.log(reverseOddIndex(splitString(str)));

//==================================================

function decryptElement(arr) {
  var newArr = [];
  var symbolGenap = "!@#$%^&*()";
  var symbolGanjil = ")!@#$%^&*(";

  arr.forEach((string, index) => {
    var eachSymbol = "";

    if (index % 2 === 0) {
      [...string].forEach((_, index2) => {
        eachSymbol += symbolGenap[arr[index][index2]];
      });
      newArr.push(eachSymbol);
    } else {
      [...string].forEach((_, index3) => {
        eachSymbol += symbolGanjil[arr[index][index3]];
      });
      newArr.push(eachSymbol);
    }
  });
  return newArr;
}

console.log(decryptElement(reverseOddIndex(splitString(str))));

//==============================================

function groupingSymbol(arr) {
  // Your code here
  var newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    const chunk = arr.slice(i, i + 2);
    newArr.push(chunk);
  }
  return newArr;
}

console.log(groupingSymbol(decryptElement(reverseOddIndex(splitString(str)))));

// ===========================================

function serialValidator(str) {
  // Your code here
  var splitString2 = splitString(str);
  var reverseOddIndex2 = reverseOddIndex(splitString2);
  var decryptElement2 = decryptElement(reverseOddIndex2);
  var groupingSymbol2 = groupingSymbol(decryptElement2);
  var isSame = true;

  groupingSymbol2.forEach((chunk, index) => {
    if (chunk[0] === chunk[1]) {
      isSame = true;
    } else {
      isSame = false;
    }
  });

  if (isSame) {
    return "Serial number is valid";
  } else {
    return "Invalid serial number";
  }
}

console.log(serialValidator(str));
//console.log(serialValidator("1234"));
// Harus lebih dari 9 karakter

//console.log(serialValidator("79 08 86 79"));
// Serial number is valid

//console.log(serialValidator("124 765 876 678"));
// Invalid serial number

//console.log(serialValidator("4947 8505 6843 4597"));
// Serial number is valid

//console.log(serialValidator("3417 1218 1813 1311"));
// Invalid serial number
