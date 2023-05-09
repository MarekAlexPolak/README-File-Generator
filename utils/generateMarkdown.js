// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, colour) {
  if(license === '' || license === null){
    return '';
  }
  else {
    return `(<img src="https://img.shields.io/badge/License-${license}-${colour}">,)`
  }

}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if(license === '' || license === null){
    return '';
  }
  else {
    return `- [License](#license)`
  }
}
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === '' || license === null){
    return '';
  }
  else {
    return `## License
    
    ${license}`
  }
}

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

  ${renderLicenseLink(data.license)}\n

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}



  ## How to Contribute
  
  ${data.contributing}

  ## Tests 

  ${data.tests}`;
}

module.exports = generateMarkdown;
