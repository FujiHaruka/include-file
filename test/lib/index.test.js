const path = require('path')
const { strict: assert } = require('assert')
const includeFile = require('../../index')

describe('include-file', () => {
  it('should output included content', async () => {
    const entry = path.join(__dirname, '../fixtures/entry1.md')
    const content = await includeFile(entry)
    assert.equal(
      content.trim(),
      `
# some-awsome-library

## Installation

\`\`\`
$ npm install some-awsome-library
\`\`\`

## Usage

This is usage.

This is usage 2.
`.trim(),
    )
  })
})
