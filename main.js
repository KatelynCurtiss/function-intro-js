// Katelyn Curtiss
// 1 May 2024
// Functions Practice


//Define the function 
function showMessage(fName,lName, school) {
    //Body of function
    const myOutput = `My name is ${fName} ${lName} and I as a student at ${school}.`;
    console.log(myOutput);

}

// Prompt user for three pieces of information
const firstName = prompt('Please enter your first name');
const lastName = prompt('Please enter your last name');
const homeschool = prompt('Please enter your last name');

// Call the function and pass (send)
// three pieces of info up to the showMessage ( ) function
showMessage(firstName, lastName, homeschool);
