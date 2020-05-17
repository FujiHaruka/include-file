## Usage

This library supports just one syntax to include other files: `$include <file_path>`.

For example, here is a `entry.md` file as below.

```markdown
$include ./example1.md
```

The line `$include ./installation.md` means that `./installation.md` file will be included. Notice that

* `$include` declaration must be at the beginning of the line.
* the included file path is a relative path from the source file.

And here is a `installation.md` file in the same directory as below.

````markdown
$include ./example2.md
````

Then, you can create the `README.md` file by using `include-file` CLI.

```console
$ npx include-file ./entry.md README.md
```

Here is the content of `README.md`.

````markdown
$include ./example-result.md
````

That's it.

The responsibility of this library is building a file from a entrypoint file including other files. You can use any markup languages or other template engines with it.
