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

  it('should ignore inclusion when it is not on the line head', async () => {
    const entry = path.join(__dirname, '../fixtures/entry2.md')
    const content = await includeFile(entry)
    assert.equal(content.trim(), `
// space at the line head
 $include ./docs/installation.md
`.trim())
  })

  it('should throw an error when it includes a path which is not a file', async () => {
    const entry = path.join(__dirname, '../fixtures/entry3.md')
    await assert.rejects(() => includeFile(entry))
  })

  it('should escape ^$$include', async () => {
    const entry = path.join(__dirname, '../fixtures/entry4.md')
    const content = await includeFile(entry)
    assert.equal(content.trim(), `
## Installation

\`\`\`
$ npm install some-awsome-library
\`\`\`

$include ./docs/installation.md
`.trim())
  })
})
