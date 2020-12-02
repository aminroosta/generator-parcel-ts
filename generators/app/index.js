'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the finest ${chalk.red('generator-parcel-ts')} generator!`)
    );
  }

  writing() {
	this.fs.copy(
	  this.templatePath('**/*'),
	  this.destinationRoot()
	);

	this.fs.copy(
	  this.templatePath('.*'),
	  this.destinationRoot()
	);
  }

  install() {
    this.installDependencies({
      yarn: {force: true},
      npm: false,
      bower: false,
    });
  }
};
