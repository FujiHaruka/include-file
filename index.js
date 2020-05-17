const fs = require('fs').promises
const path = require('path')
const { EOL } = require('os')

const parseIncludePaths = (content) =>
  [...content.matchAll(/^\$include (.+)/gm)].map(([, filePath]) => filePath)

const replaceInclusions = (content, inclusions) => {
  let replaced = content
  for (const { includePath, content } of inclusions) {
    const pattern = new RegExp(`^\\$include ${includePath}${EOL}?`, 'gm')
    replaced = replaced.replace(pattern, content)
  }
  return replaced
}

const includeRecursively = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf-8')
  const includePaths = parseIncludePaths(content)
  const baseDir = path.dirname(path.resolve(filePath))
  const inclusions = await Promise.all(
    includePaths.map((includePath) =>
      includeRecursively(path.join(baseDir, includePath)).then((content) => ({
        includePath,
        content,
      })),
    ),
  )
  const replaced = replaceInclusions(content, inclusions)
  return replaced
}

/**
 * Resolve `$include` and build a file content.
 * @param {string} entryPath - the entrypoint file path
 * @param {object} options - options
 */
async function includeFile(entryPath, options = {}) {
  const { dest, stdout = false } = options

  const result = await includeRecursively(entryPath)
  if (dest) {
    await fs.writeFile(dest, result)
  }
  if (stdout) {
    process.stdout.write(result)
  }
  return result
}

module.exports = includeFile
