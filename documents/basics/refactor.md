---
sidebar_position: 1
---


# Tzap refactor

The `tzap refactor` command is used to refactor code using either command-line flags or a configuration file.

## Usage

You can use the `tzap refactor` command in the following ways:

**Command-line flags:**

```bash
tzap refactor [filein] [fileout]
```

Specify the input file `[filein]` to refactor and optionally specify the output file `[fileout]` to save the refactored code. If `[fileout]` is not provided, the refactored code will be saved back to the input file.

**Configuration file:**

You can also use a configuration file to specify the refactor task. Here is an example of a JSON configuration:

```json
{
  "filein": "[filein]",
  "fileout": "[fileout]",
  "mission": "Improve code readability and maintainability",
  "task": "Analyze what can be improved. Refactor code to use better variable names and remove duplication. Refactor the following file to be more readable. Add documentation. Do not add any new public functions, only rewrite.",
  "plan": "Do not write any text because this file will be saved directly to output.go",
  "outputformat": "golang code",
  "example": "func doSomething(w http.ResponseWriter, r *http.Request, db *sql.DB) error {\n          // function logic\n    }",
  "inspirationfiles": [
    "/path/to/inspiration/file1.go",
    "/path/to/inspiration/file2.go"
  ]
}
```

Replace `[filein]` with the path to the file you want to refactor and `[fileout]` with the desired output file path. Adjust the other parameter to refactor according to your specification.

## Examples

Here are some examples of how to use the `tzap refactor` command:

```bash
# Refactor a file using command-line flags
tzap refactor main.go main_refactored.go

# Refactor a file using a configuration file
tzap refactor --refactorconfig refactorconfig.json
```

Make sure to provide the appropriate file paths and configuration data based on your project requirements.

## Conclusion

The `tzap refactor` command is a powerful tool for refactoring code and improving code readability and maintainability. It provides flexibility in how you specify the refactor task, whether through command-line flags or a configuration file.

For more information and advanced usage options, you can refer to the Tzap CLI documentation or the [TZap GitHub repository](https://github.com/tzapio/tzap).