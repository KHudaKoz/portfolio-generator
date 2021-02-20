// const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

const generatePage = (userName, githubName) => {
  return ` 
      Name: ${userName}
      Github: ${githubName}
      `;

}
console.log(generatePage('Jane', 'janehub'));
Continuing with the project, now that we've created a function that can receive input and display the data dynamically, the next step is to collect command-line arguments as we did before and feed them into the generatePage() function to create a string with the user input.