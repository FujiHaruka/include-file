/**
 * Resolve `$include` and build a file content.
 */
declare function includeFile(
  entryPath: string,
): Promise<string>

export = includeFile
