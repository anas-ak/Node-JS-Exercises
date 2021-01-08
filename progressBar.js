const ProgressBar = require('progress')
const chalk = require ('chalk');

const bar = new ProgressBar(':bar', { total: 7 })
const timer = setInterval(() => {
  
  bar.tick() + console.log('LOADING');
  
  if (bar.complete) {
    clearInterval(timer)
    console.log(chalk.green('System Ready.'));
    console.log(chalk.yellow('Hey Anas'));
  }
}, 300)


