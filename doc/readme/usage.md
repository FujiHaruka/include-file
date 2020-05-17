## Usage

This library supports just one syntax to include other files: `$include <relative file path>`.

For example, here is `entry.md` file as below.

```markdown
$include ./example1.md
```

And here is `installation.md` file in the same directory as below.

````markdown
$include ./example2.md
````

Then, you can build `README.md` by using `include-file` CLI.

```console
$ include-file ./entry.md README.md
```

Here is content of `README.md`.

````markdown
$include ./example-result.md
````

That's it.

The responsibility of this library is building a file from a entrypoint file including other files. You can use any markup languages or other template engines with it.
