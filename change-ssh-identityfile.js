const path = require('path');
const process = require('process');
const pnp = path.resolve(process.cwd(), '.pnp.cjs')
require(pnp).setup();

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const { config, host, identity } = argv;
console.log(`Replacing IdentityFile of host ${host} in ${config} with ${identity}`);

// Read config file into memory
const fs = require('fs');
const configData = fs.readFileSync(config, 'utf8');

// Split the file into lines
const lines = configData.split('\n');

// Find the first line which matches the regex ^Host github\.com$
const hostLine = lines.findIndex((line) => line.match(new RegExp(`^Host ${host}$`)));
if (hostLine === -1)
  throw new Error(`Could not find host ${host} in ${config}`);

// Then using that line, match closest line IdentityFile (.*)
const identityLine = lines.findIndex((line, index) => {
  return index > hostLine && line.match(/IdentityFile/);
});

// Replace that line with `IdentityFile ${identity}`
lines[identityLine] = `IdentityFile ${identity}`;

// Write back to config file
const newConfigData = lines.join('\n');
fs.writeFileSync(config, newConfigData);