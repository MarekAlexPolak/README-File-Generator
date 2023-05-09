
function renderLicenseBadge(license, colour) {
  //if empty return nothing
  if(license === '' || license === null){
    return '';
  }
  //else generate image of badge with chosen badge colour
  else {
    return `<img src="https://img.shields.io/badge/License-${license}-${colour}">`
  }

}

function renderLicenseLink(license) {

  //if empty return empty string
  if(license === '' || license === null){
    return '';
  }
  //else generate table of contents entry for license
  else {
    return `- [License](#license)`
  }
}

function renderLicenseSection(license) {
  //if empty return empty string
  if(license === '' || license === null){
    return '';
  }
  //else create a license section 
  else {
    return `## License
    
    ${license}`
  }
}
//function which creates readme based of the users inputs
function generateMarkdown(data) {
  
  return `
  ${renderLicenseBadge(data.license, data.colour)}
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)

  - [Usage](#usage)

  - [Credits](#credits)

  - [Tests](#tests)

  ${renderLicenseLink(data.license)}\n

  - [How to Contribute](#how-to-contribute)

  - [Contact Information](#contact-information)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Tests 

  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## How to Contribute
  
  ${data.contributing}

  ## Contact Information
  
  [My Github] (https://github.com/${data.github})
  
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
