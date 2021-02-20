const profileDataArgs =process.argv.slice(2, process.argv.length); 
console.log(profileDataArgs)

const printProfileData = profileDataArr => {
    for(let i = 0; i ,profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    }

};

These reassignments will have no problem executing in the application. So now we can use let for variables that need to change over time, and we can use const for variables that should never be reassigned. This makes the code much easier to understand, especially when debugging and trying to figure out where the values changed.

But why can't we just use var and const instead of let and const? Because let and const are block-scoped variables. Take the following code as an example:

const message = 'Hello Node!';
