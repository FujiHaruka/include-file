/**
 * Resolve `$include` and build a file content.
 */
declare function includeFile(
  entryPath: string,
  options?: { dest?: string; stdout?: boolean },
): Promise<string>

export = includeFile
