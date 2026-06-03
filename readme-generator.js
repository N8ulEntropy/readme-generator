const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "Project Name: ",
  "Description: ",
  "Installation Instructions: ",
  "Usage Instructions: ",
  "License: ",
  "Author: ",
  "GitHub Username: ",
];

const answers = [];

function askQuestion(index) {
  if (index === questions.length) {
    generateReadme();
    return;
  }

  rl.question(questions[index], (answer) => {
    answers.push(answer);
    askQuestion(index + 1);
  });
}

function generateReadme() {
  const [
    projectName,
    description,
    installation,
    usage,
    license,
    author,
    github,
  ] = answers;

  const readmeContent = `# ${projectName}

## Description
${description}

## Installation
\`\`\`bash
${installation}
\`\`\`

## Usage
${usage}

## Author
${author}

## GitHub
https://github.com/${github}

## License
This project is licensed under the ${license} License.

---
Generated automatically using README Generator.
`;

  fs.writeFileSync("README.md", readmeContent);
  console.log("✅ README.md generated successfully!");
  rl.close();
}

askQuestion(0);const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "Project Name: ",
  "Description: ",
  "Installation Instructions: ",
  "Usage Instructions: ",
  "License: ",
  "Author: ",
  "GitHub Username: ",
];

const answers = [];

function askQuestion(index) {
  if (index === questions.length) {
    generateReadme();
    return;
  }

  rl.question(questions[index], (answer) => {
    answers.push(answer);
    askQuestion(index + 1);
  });
}

function generateReadme() {
  const [
    projectName,
    description,
    installation,
    usage,
    license,
    author,
    github,
  ] = answers;

  const readmeContent = `# ${projectName}

## Description
${description}

## Installation
\`\`\`bash
${installation}
\`\`\`

## Usage
${usage}

## Author
${author}

## GitHub
https://github.com/${github}

## License
This project is licensed under the ${license} License.

---
Generated automatically using README Generator.
`;

  fs.writeFileSync("README.md", readmeContent);
  console.log("✅ README.md generated successfully!");
  rl.close();
}

askQuestion(0);