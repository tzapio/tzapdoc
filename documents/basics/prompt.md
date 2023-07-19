---
id: prompt
title: Prompt
sidebar_label: Tzap prompt
sidebar_position: 2
---

# Tzap prompt

The `tzap prompt` command is used to generate code by combining a user-given prompt and code-searching existing files.

## Usage

Use the `tzap prompt` command as follows:

```bash
tzap prompt <prompt>
```

Specify the `<prompt>` you want tzap to generate the code from.

You can specify various options such as:
- The number of embeddings to use for the prompt generation using the `--embeds` flag.
- The number of embeddings to include in the search space before filtering out the matches with inspiration files using the `--searchsize` flag.
- Whether to disable indexing for large projects to speed up the process using the `--disableindex` flag.

# Getting started with prompts

Here are some examples of how to use the `tzap prompt` command:


## Improved Examples for Using Tzap Prompt

**Example 1:** Creating an HTTP server endpoint

You want GPT to write a new HTTPS endpoint for a server using express.js with a specific functionality like fetching user data.
```bash
tzap prompt "Write an endpoint named '/fetch-user-data' which fetches user data from the database."
```
---

**Example 2:** Refactoring nested code

You have a complex function is deeply nested and you want to refactor it to make it more readable and maintainable.
```bash
tzap prompt --k 30 -m gpt4 -i "./deepNesting.js" "Refactor the function 'processData' in 'deepNesting.js' to reduce nesting and improve code readability."
```
---

**Example 3:** Understanding architectural design

You are learning a new library and want a quick overview of how it is designed.

```bash
tzap prompt "Explain the architectural design of this project and give an example of its application."
```

The prompt must be descriptive and specific about what you want GPT to generate. It's like talking to a colleague, sometimes they get it, sometimes you need to explain deeper.


:::note 
You can make your prompts as simple or complex as the situation requires for optimal results.
:::
## Configuring prompt options

The Tzap CLI provides several flags for configuring the prompt options. Here's how you can use these options:

```bash
# Using `-k` flag to specify the number of embeddings for prompt generation
tzap prompt -k 10 "Write a python function for calculating factorial of a number."
```

# Reading prompt from a file


It's possible to use tzap to read prompt from a file instead of a string. Use the `-f` flag to specify the file:

```sh
tzap prompt -f "./file.txt"
```

Here, Tzap will read the file `file.txt` and extracts the prompt from it.

## Including Inspiration Files

In case you want to refer to certain files while generating the prompt, you can include them as inspiration files:

```bash
# Using `-i` flag to specify the inspiration files
tzap prompt -i ./helperFunctions.js -i ./constants.js "Write a function that uses helper functions from 'helperFunctions.js' to manipulate data defined in 'constants.js'."
```

These examples show how to use directives instead of questions when giving a prompt. A directive provides a clear action for GPT to perform, making your prompts more effective.

# Adding Inspiration Files

Tzap allows you to add inspiration files to your commands. This enables the model to base its responses on the contents of specified files.

To include the inspiration files, use the `-i` option:

```sh
tzap prompt -i "./file1.js,./file2.js" "<prompt>"
```

For instance:

```sh
tzap prompt -i "./start.js,./baseClass.js" "Implement a new model user model. Give it email and some simple parameters"
```

This gives the model the context from `start.js` and `baseClass.js` as additional knowledge to answer the question. Sometimes, it might not include a baseClass. 


# Configuring prompt options

Tzap also provides several flags for configuring the prompt options. Two primary ones are `-k` (number of embeddings to use for prompt generation) and `-n` (number of embeddings to include in the search space before filtering out the matches with inspiration files):

```sh
tzap prompt -i "./file1.js,./file2.js" -k 10 "<prompt>"
```

In this example, Tzap searches through 15 embeddings (or code pieces) in the files and selects the top 10 embeddings to include in the text generation.

## Conclusion

The `tzap prompt` command is general tool for rubberducking and to some extent generate code.

For more information and advanced usage options, you can refer to the TZap CLI documentation or the [TZap GitHub repository](https://github.com/tzapio/tzap).