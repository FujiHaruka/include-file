# include-file

A Node.js library to build a documentation file by "including" other text files.

## Installation

```
$ npm install include-file
```

## Usage

This library supports just one syntax to include other files: `$include <relative file path>`.

For example, here is `entry.md` file as below.

```markdown
# some-awsome-library

This is a description.

$include ./installation.md

## Lisence

MIT License.
```

And here is `installation.md` file in the same directory as below.

````markdown
## Installation

```
$ npm install some-awesome-ibrary
```
````

Then, you can build `README.md` by using `include-file` CLI.

```console
$ include-file ./entry.md README.md
```

Here is content of `README.md`.

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
