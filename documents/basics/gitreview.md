---
sidebar_position: 2
---

# Tzap review (git)

The `tzap review` to performs an automated code review of pulls requests or branches within a git repository. It's designed to evaluate each change against a set of predefined requirements to generating a list of suggestions and recommendations to improve code quality and adhere to coding standards. 

## How to Use tzap review

To initiate a code review, navigate to the root directory of your git repository and run the following command:

```bash
tzap review [branch]
```

Replace `[branch]` with the name of the branch you want to review. The command will then analyze the code changes in the specified branch and generate a list of suggestions for enhancing code readability, maintainability, and conforming to best practices.

## Ensuring Code Styles with Style Files

`tzap review` uses style files as a basis to evaluate code and patterns.

To include style files during the code review, use the `--style` flag followed by the path to the files. For example:

```bash
tzap review feature_login-flow-rehaul --style styles/file.txt
```

In this example, `styles/file.txt` is an style file that contains specific coding styles or patterns. The `tzap review` command will compare the code in the specified branch against these styles and generate suggestions for aligning the code with them. 

A style file may define various coding styles and guidelines, using various GPT techniques such as Good/Bad Examples, Zero-Shot, Chain of Thought, among others. For example:

```txt title="styles/file.txt"
Ensure that functions follow camel casing.
Avoid the use of global variables in JavaScript.
Use the logger located in logger/logger.ts in place of console.logs.
Evaluate SQL queries to ensure parameterization and prevent variables from being directly embedded in SQL string queries.

###
If a function can be rewritten as a class method, recommend it.
Good:
class Logger {
    log(tmp: string) { 
        console.log(tmp);
    }
}
Bad:
function log(tmp: string) {
    console.log(tmp); 
}
###
Enforce a structured endpoint pattern like:
app.get("/v1/service",()=>{})

```

The above style file enforces camel casing for function names, discourages the use of global variables, recommends the conversion of standalone functions to class methods, replaces `console.log` with a specific logger, ensures SQL queries are parameterized, and sets a structure for defining endpoints.

## Wrapping Up

The `tzap review` command is a vital tool for improving the quality of code in your project. Besides performing automated code reviews, it provides intelligent suggestions that conform to specified coding standards, dramatically reducing the time and effort required in manual code reviews. The inclusion of style files further empowering developers to standardize coding styles or adhere to patterns set by established codebases. 

For more information and advanced usage options, refer to the Tzap CLI documentation or the [Tzap GitHub repository](https://github.com/tzapio/tzap).