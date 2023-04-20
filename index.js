const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require("console");

inquirer
.prompt([
    {
        type: "list",
        message:"Select a license",
        name:"license",
        choices:['MIT','Apache','ISC']
    },
    {
        type: "list",
        message:"Whats your favorite color",
        name:"color",
        choices:['blue','orange','yellow','green','red']
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Give me a quick descripton of your project",
      name: "description",
    },
    {
      type: "input",
      message: "What steps are need for install your project?",
      name: "install",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use.",
      name: "usage",
    },
    {
      type: "input",
      message: "List your collaborators",
      name: "credits",
    },
    {
      type: "input",
      message: "How can others contribute?",
      name: "contribute",
    },
    {
      type: "input",
      message: "How can others test your project?",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your Email?",
      name: "email",
    },
  ])
.then((answers) => {
const badge = `https://img.shields.io/badge/license-${answers.license}-${answers.color}`
const readString = `
# ${answers.title}

## Badges

![license](${badge})

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [HowtoContribute](#HowtoContribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${answers.install}

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

This project is under the ${answers.license} License.

## How to Contribute

${answers.contribute}

## Tests

${answers.test}

## Questions

If you have any questions or comments, please feel free to reach out to me at ${answers.email} . 
You can also find me on https://github.com/${answers.username} where I am happy to collaborate on projects."
`
fs.writeFile('README.md', readString, 
(error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Success!");
    }
  });
})
.catch((error) => {
  console.error(error);
});

