const inquirer = require('inquirer')
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'username',
          message: 'What is your GitHub username?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
        },
        {
          type: 'input',
          name: 'title',
          message: 'What is your project\'s name ?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please write a short description of your project',
        },
        {
          type: 'list',
          name: 'license',
          message: 'What kind of license should your project have?',
          choices:['MIT','APACHE 2.0','GPL 3.0','BSD 3','NONE'],
        },
        {
          type: 'input',
          name: 'dependencies',
          message: 'What command should be run to install dependencies?',
          default: 'npm i',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'npm test',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
          },
          {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repo?',
          },
];

const generateReadMe = ({ username, email, title, description,license, dependencies, tests, usage, contribute  }) =>
  `# ${title}

  ## Description
  
  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  
 To install necessary dependancies, run the following command:

 \`\`\`
 ${dependencies}
 \`\`\`
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contribute}
  
  ## Tests

  To run tests, run the following command:

 \`\`\`
 ${tests}
 \`\`\`
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${email}.
  You can find more of my work at [${username}](https://github.com/${username}/).`;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data,(err)=>
    err? console.log(err) : console.log('Successfully created README!')
    );

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers)=>{
     const readMeFile= generateReadMe(answers);
     writeToFile('README.md',readMeFile);
    });
}

// Function call to initialize app
init();
