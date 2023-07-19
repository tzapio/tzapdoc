---
id: tzap-editdir
title: Tzap editdir
sidebar_label: Tzap editdir
---

# Tzap editdir

The `tzap editdir` command is used to apply templates on a directory.

## Usage

You can use the `tzap editdir` command in the following way:

```bash
tzap editdir [template] [directory]
```

Replace `[template]` with the desired template name and `[directory]` with the path to the directory you want to refactor.

## Available Templates
Editdir supports some templates such as `refactor`, `documentation` and `test`.

## Examples
Here are some examples of how to use the `tzap editdir` command:

```bash
# Refactor code using the "refactor" template with a file glob
tzap editdir refactor "src/components/*.ts"

# Refactor code using the "documentation" template in the /path/to/directory
tzap editdir documentation "src/components/*.ts" -e .md
```

Make sure to provide the the glob pattern is wrapped with quotes else there is a risk it collides with the standard terminal.

## Conclusion

The `tzap editdir` command is a powerful tool for refactoring source code using different templates. It provides flexibility in improving code readability and maintainability in a directory.

For more information and advanced usage options, you can refer to the Tzap CLI documentation or the [TZap GitHub repository](https://github.com/tzapio/tzap).