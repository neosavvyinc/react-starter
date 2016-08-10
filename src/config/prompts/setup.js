const prompt = require('prompt');
const fs = require('fs');
const _ = require('lodash');

const targetFile = './src/js/constants.js';

/* eslint-disable no-console */

prompt.start();

console.log('This setup prompt will write your API keys to the proper location.');
console.log('\n---------------------------------------------------------------------------\n');

prompt.get(['githubApiAccessToken'], (error, result) => {
    if (error) {
        return console.error(error);
    }

    const inputPairs = _.toPairs(result);

    console.log('\n---------------------------------------------------------------------------\n');
    console.log('Command-line input received:\n');

    inputPairs.forEach(pair => {
        console.log(`${pair[0]} = ${pair[1]}`);
    });

    const output = inputPairs.map(pair => {
        return `export const ${pair[0]} = '${pair[1]}';`;
    }).join('\n');

    console.log('\n---------------------------------------------------------------------------\n');
    console.log('Output of setup script:\n');
    console.log(output);

    console.log('\n---------------------------------------------------------------------------\n');
    console.log(`Writing output to '${targetFile}\n`);

    return fs.writeFileSync(targetFile, output);
});
