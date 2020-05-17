<!-- README.md is generated automatically. DO NOT edit manually. -->

# include-file

A Node.js library to build a documentation file by "including" other text files.

## Short Usage

```
$ npx include-file <entrypoint_file> <dest_file>
```

## Usage

This library supports just one syntax to include other files: `$include <file_path>`.

For example, here is a `entry.md` file as below.

```markdown
# some-awsome-library

This is a description.

$include ./installation.md

## Lisence

MIT License.
```

The line `$include ./installation.md` means that `./installation.md` file will be included. Notice that

* `$include` declaration must be at the beginning of the line.
* the included file path is a relative path from the source file.

And here is a `installation.md` file in the same directory as below.

````markdown
## Installation

```
$ npm install some-awesome-ibrary
```
````

Then, you can create the `README.md` file by using `include-file` CLI.

```console
$ npx include-file ./entry.md README.md
```

Here is the content of `README.md`.

````markdown
# some-awsome-library

This is a description.

## Installation

```
$ npm install some-awesome-ibrary
```

## Lisence

MIT License.

````

That's it.

The responsibility of this library is building a file from a entrypoint file including other files. You can use any markup languages or other template engines with it.
