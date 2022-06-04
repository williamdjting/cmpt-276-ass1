var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

//Please note that there is one student in the A+ range, three students in the A range, etc …

var maxGradeBounds = parseInt(document.getElementById("maxGrade").value, 10);
var aPlusGradeBounds = parseInt(document.getElementById("aPlusGrade").value, 10);
var aGradeBounds = parseInt(document.getElementById("aGrade").value, 10);
var aMinusGradeBounds = parseInt(document.getElementById("aMinusGrade").value, 10);
var bPlusGradeBounds = parseInt(document.getElementById("bPlusGrade").value, 10);
var bGradeBounds = parseInt(document.getElementById("bGrade").value, 10);
var bMinusGradeBounds = parseInt(document.getElementById("bMinusGrade").value, 10);
var cPlusGradeBounds = parseInt(document.getElementById("cPlusGrade").value, 10);
var cGradeBounds = parseInt(document.getElementById("cGrade").value, 10);
var cMinusGradeBounds = parseInt(document.getElementById("cMinusGrade").value, 10); 
var dGradeBounds = parseInt(document.getElementById("dGrade").value, 10);
var fGradeBounds = parseInt(document.getElementById("fGrade").value, 10);


var maxGrade = [];
var aPlusGrade = [];
var aGrade = [];
var aMinusGrade = [];
var bPlusGrade = [];
var bGrade = [];
var bMinusGrade = [];
var cPlusGrade = [];
var cGrade = [];
var cMinusGrade = [];
var dGrade = [];
var fGrade = [];

// documentElementID get value, parseInt to dynamically change the number boundaries
// onchange the input field then the it calls the newLowerBound() which holds the two functions we need
// to then refresh the script from top to bottom to resort the histogram accordingly

// new grade submit form must be parseInt to a number, then it will fire the two functions inside the newSubmitValue()

// may need to set minimum value for lower bounds to ensure the grade range stays consistent, i.e. no overlap

function gradeParser(int) {

  if(int == maxGradeBounds) {
    maxGrade.push(int); 
  }
  
  else if(int >= aPlusGradeBounds && int < maxGradeBounds) {
    aPlusGrade.push(int);
  }
  else if(int < aPlusGradeBounds && int >= aGradeBounds) {
    aGrade.push(int);
  }
  else if(int < aGradeBounds && int >= aMinusGradeBounds) {
    aMinusGrade.push(int);
  }
  else if(int < aMinusGradeBounds && int >= bPlusGradeBounds) {
    bPlusGrade.push(int);
  }
  else if(int < bPlusGradeBounds && int >= bGradeBounds) {
    bGrade.push(int);
  }
  else if(int < bGradeBounds && int >= bMinusGradeBounds) {
    bMinusGrade.push(int);
  }
  else if(int < bMinusGradeBounds && int >= cPlusGradeBounds) {
    cPlusGrade.push(int);
  }
  else if(int < cPlusGradeBounds && int >= cGradeBounds) {
    cGrade.push(int);
  }
  else if(int < cGradeBounds && int >= cMinusGradeBounds) {
    cMinusGrade.push(int);
  }
  else if(int < cMinusGradeBounds && int >= dGradeBounds) {
    dGrade.push(int);
  }
  else if(int < dGradeBounds && int >= document.getElementById('fGrade').value) {
    fGrade.push(int);
  }

}

function filterGrades() {

  maxGrade = [];
  aPlusGrade = [];
  aGrade = [];
  aMinusGrade = [];
  bPlusGrade = [];
  bGrade = [];
  bMinusGrade = [];
  cPlusGrade = [];
  cGrade = [];
  cMinusGrade = [];
  dGrade = [];
  fGrade = [];

  for (let i = 0; i < grades.length; i++) {
    gradeParser(grades[i]);
  };


  console.log("Max", maxGrade);
  console.log("A+", aPlusGrade); 
  console.log("A", aGrade);
  console.log("A-", aMinusGrade);
  console.log("B+", bPlusGrade);
  console.log("B", bGrade);
  console.log("B-", bMinusGrade);
  console.log("C+", cPlusGrade);
  console.log("C", cGrade);
  console.log("C-", cMinusGrade);
  console.log("D", dGrade);
  console.log("F", fGrade);

  }

filterGrades();


var idOfGradeArrays = ["A+","A", "A-", "B+", "B", "B-", "C+","C", "C-", "D", "F"];

var zero = "0";

function histogramAddZeroes() {
  // var maxLength =  maxGrade.length; // not used
  var aPlusLength =  aPlusGrade.length;
  var aGradeLength =  aGrade.length;
  var aMinusLength =  aMinusGrade.length;
  var bPlusLength =  bPlusGrade.length;
  var bGradeLength =  bGrade.length;
  var bMinusLength =  bMinusGrade.length; 
  var cPlusLength =  cPlusGrade.length;
  var cLength =  cGrade.length;
  var cMinusLength = cMinusGrade.length;
  var dLength =  dGrade.length;
  var fLength =  fGrade.length;

  var lengthofGradeArrays = [aPlusLength,aGradeLength, aMinusLength, bPlusLength, bGradeLength, bMinusLength, cPlusLength,cLength, cMinusLength, dLength, fLength]; // lengthofGradesArrays.length is 11

  for (let i = 0; i < lengthofGradeArrays.length; i++) { 

    var currentLength = lengthofGradeArrays[i]; //length of each array[i]

    var fkey = "";

    if (currentLength > 0) {
      for (let j = 0; j < currentLength; j++) {

        fkey += zero; //adds to the fkey string the number of zeroes

      }
      document.getElementById(idOfGradeArrays[i]).innerHTML = fkey; // appends the number of zeroes to the ID
    }
    else {
      document.getElementById(idOfGradeArrays[i]).innerHTML = ""; //for if current length is 0, shows "" to represent 0 grade elements in this range
    }
      
  };

}

histogramAddZeroes();



function newSubmitValue() {
  let boxvalue = parseFloat(document.getElementById('newgradesubmission').value);
  grades.push(boxvalue);

  if(boxvalue < document.getElementById('fGrade').value) {
    alert("New Grade entered is not in range. Not submitted to system. Please try again with a different number equal to or greater than the F grade lower bounds or lower the F grade lower bounds.");
  }
  else {
  alert("Successful submission! Histogram will now be updated.");
  }

  filterGrades();

  histogramAddZeroes();
  
  return false;
}

function newLowerBound(event) {

  
  let id = event.target.id;


  let boxvalue2;
  let first = 'maxGrade';
  let second = 'aPlusGrade';
  let third = 'aGrade';
  let fourth = 'aMinusGrade';
  let fifth = 'bPlusGrade';
  let sixth = 'bGrade';
  let seventh = 'bMinusGrade';
  let eighth = 'cPlusGrade';
  let ninth = 'cGrade';
  let tenth = 'cMinusGrade';
  let eleventh = 'dGrade';
  let twelfth = 'fGrade'

  // maxGradeBounds , aPlusGradeBounds, aGradeBounds, aMinusGradeBounds, bPlusGradeBounds, bGradeBounds, bMinusGradeBounds, cPlusGradeBounds, cGradeBounds, cMinusGradeBounds, dGradeBounds, fGradeBounds

  // if this boxvalue2 is in between the range above and below, accept it, otherwise , else do not accept and skip this change and alert user
  
  // document.getElementById(first).max = aPlusGradeBounds; // no maxgrade
  document.getElementById(second).max = maxGradeBounds;
  document.getElementById(third).max = aPlusGradeBounds;
  document.getElementById(fourth).max = aGradeBounds;
  document.getElementById(fifth).max = aMinusGradeBounds;
  document.getElementById(sixth).max = bPlusGradeBounds;
  document.getElementById(seventh).max = bGradeBounds;
  document.getElementById(eighth).max = bMinusGradeBounds;
  document.getElementById(ninth).max = cPlusGradeBounds;
  document.getElementById(tenth).max = cGradeBounds;
  document.getElementById(eleventh).max = cMinusGradeBounds;
  document.getElementById(twelfth).max = dGradeBounds;

  document.getElementById(first).min = aPlusGradeBounds;
  document.getElementById(second).min = aGradeBounds;
  document.getElementById(third).min = aMinusGradeBounds;
  document.getElementById(fourth).min = bPlusGradeBounds;
  document.getElementById(fifth).min = bGradeBounds;
  document.getElementById(sixth).min = bMinusGradeBounds;
  document.getElementById(seventh).min = cPlusGradeBounds;
  document.getElementById(eighth).min = cGradeBounds;
  document.getElementById(ninth).min = cMinusGradeBounds;
  document.getElementById(tenth).min = dGradeBounds;
  document.getElementById(eleventh).min = fGradeBounds;
  // document.getElementById(twelfth).min = 0; // no minimum F lower bound
  

  if (id == first){ //'maxGrade';
    boxvalue2 = parseInt(document.getElementById(first).value,10);
    

    if (boxvalue2 > aPlusGradeBounds) {

      maxGradeBounds = boxvalue2;
    }
    else {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please lower the grade below first.");
      document.getElementById(first).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
      
    }

  }
  else if (id == second) { //'A+';
    boxvalue2 = parseInt(document.getElementById(second).value,10);

    if (boxvalue2 > aGradeBounds && boxvalue2 < maxGradeBounds) {

      aPlusGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == maxGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");
      
      document.getElementById(second).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == aGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(second).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }
  }

  else if (id == third) { //'A';
    boxvalue2 = parseInt(document.getElementById(third).value,10);
    if (boxvalue2 > aMinusGradeBounds && boxvalue2 < aPlusGradeBounds) {
      
      aGradeBounds = boxvalue2;
    
    }
    // else if (boxvalue2 > aMinusGradeBounds) {
    //   aGradeBounds = boxvalue2;
    // }

    else if (boxvalue2 == aPlusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");
      
      document.getElementById(third).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == aMinusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(third).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }
  }

  else if (id == fourth) { //'A-';
    boxvalue2 = parseInt(document.getElementById(fourth).value,10);

    if (boxvalue2 > bPlusGradeBounds && boxvalue2 < aGradeBounds) {

      aMinusGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == aGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");
      document.getElementById(fourth).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == bPlusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(fourth).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }
  }
  else if (id == fifth) { //B+
    boxvalue2 = parseInt(document.getElementById(fifth).value,10);

    if (boxvalue2 > bGradeBounds && boxvalue2 < aMinusGradeBounds) {

      bPlusGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == aMinusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");
      document.getElementById(fifth).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == bGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(fifth).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }

  }

  else if (id == sixth) { //B
    boxvalue2 = parseInt(document.getElementById(sixth).value,10);
    console.log("boxvalue2 Bgrade before",boxvalue2);
    if (boxvalue2 > bMinusGradeBounds && boxvalue2 < bPlusGradeBounds) {

      bGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == bPlusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");

      document.getElementById(sixth).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;

    }
    else if (boxvalue2 == bMinusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      document.getElementById(sixth).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
      console.log("boxvalue2 Bgrade after ceiling",boxvalue2);
    }

  }
  

  else if (id == seventh) { //B-
    boxvalue2 = parseInt(document.getElementById(seventh).value,10);

    if (boxvalue2 > cPlusGradeBounds && boxvalue2 < bGradeBounds) {

      bMinusGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == bGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");
      
      document.getElementById(seventh).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == cPlusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(seventh).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }
  }

  else if (id == eighth) { //C+
    boxvalue2 = parseInt(document.getElementById(eighth).value,10);


    if (boxvalue2 > cGradeBounds && boxvalue2 < bMinusGradeBounds) {

      cPlusGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == bMinusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");

      document.getElementById(eighth).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == cGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(eighth).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }
  }

  else if (id == ninth) { //C
    boxvalue2 = parseInt(document.getElementById(ninth).value,10);

    if (boxvalue2 > cMinusGradeBounds && boxvalue2 < cPlusGradeBounds) {

      cGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == cPlusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");

      document.getElementById(ninth).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == cMinusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(ninth).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }

  }

  else if (id == tenth) { //C-
    boxvalue2 = parseInt(document.getElementById(tenth).value,10);

    if (boxvalue2 > dGradeBounds && boxvalue2 < cGradeBounds) {

      cMinusGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == cGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");

      document.getElementById(tenth).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == dGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(tenth).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }
  }

  else if (id == eleventh) { //D
    boxvalue2 = parseInt(document.getElementById(eleventh).value,10);

    if (boxvalue2 > fGradeBounds && boxvalue2 < cMinusGradeBounds) {

      dGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == cMinusGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");
      document.getElementById(eleventh).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }
    else if (boxvalue2 == fGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade below. Please decrease the grade below first.");
      
      document.getElementById(eleventh).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }
  }

  else if (id == twelfth) { //F
    boxvalue2 = parseInt(document.getElementById(twelfth).value,10);


    if (boxvalue2 < dGradeBounds && boxvalue2 > -999) {

      fGradeBounds = boxvalue2;
    }
    else if (boxvalue2 == dGradeBounds) {
      alert("Sorry! Not a valid grade number. Number is same as grade above. Please increase the grade above first.");
      
      document.getElementById(twelfth).value = boxvalue2 -1;
      boxvalue2 = boxvalue2 -1;
    }

    else if (boxvalue2 == -999) {
      alert("Sorry! Not a valid grade number. Number is at maximum.");
      
      document.getElementById(twelfth).value = boxvalue2 +1;
      boxvalue2 = boxvalue2 +1;
    }

  }

  filterGrades();

  histogramAddZeroes();

  return false;
}

