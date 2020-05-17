#!/usr/bin/env node
/**
 * CLI for include-file
 */
const fs = require('fs').promises
const includeFile = require('./index')
const argv = require('minimist')(process.argv.slice(2))

const help = () => {
  console.log(`
Usage:
$ include-file entrypoint_file dest_file
`)
}

if (argv.help) {
  help()
  process.exit(0)
}

const [entry, dest] = argv._

if (!entry || !dest) {
  help()
  process.exit(1)
}

includeFile(entry)
  .then(async (content) => {
    await fs.writeFile(dest, content)
    console.log(`Generated ${dest}`)
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
