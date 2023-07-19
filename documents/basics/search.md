---
sidebar_position: 1
---

# Tzap search

Tzap CLI's search command provides a feature for searching relevant embeddings from your code files. The search operates by taking a search query and returning the best-fitting embeddings from your code files.

Here are some of the key features of the `tzap search` command:

### Usage

This command should be used as follows from the command line:

```bash
tzap search "<query>"
```

`<query>`: This is your search phrase or question. Enclose it in double quotes for the program to comprehend it as a single string.

#### Following flags can be used with the command

- `-k` or `--embeds`: Set the number of embeddings to use for a search, default is `10`. If you want to limit the search to a specific number of embeddings, you can use this flag. 

- `-n` or `--ncount`: Set the number of embeddings to use for the search

- `-i` or `--ignore`: Set files to exclude from the search. This can be helpful if you have files with similar or duplicated content that can interfere with your results. 

- `-d` or `--disableindex`: This flag helps speed up the process for larger projects by disabling indexing.

- `-l` or `--lib`: (BETA version) Allows to select a library to search.

### Example 

Here is an example of how you can use the `tzap search` command to find relevant code snippets:

Find where the user model is defined
```bash
tzap search "Defining user model"
```

A user model might just be a class/interface/struct but the actual data populating the model might be in some fetch or database query. Imagine a user model has a dictionary property called metadata `metadata: {[key: string]: string}`. This metadata property has no upfront defined properties. But using the following query will find the relevant code locations where User Models are being used.  

```bash
tzap search "Using user model"
```

If this query returns code more related to for instance "user component" instead of "user data fetcher" the query can further be improved like: 

```bash
tzap search "Fetching data for user model"
```

The search command will find the best matches amongst the code that fit to your query.

### Your first Tzap CLI Search

Here's a glimpse of how `tzap search` might operate:

```txt
~/code/yourproject $ tzap search "user model"

Search result:
        src/model/user.tsx:1
        src/controller/user.tsx:10
        src/service/userService.tsx:43
```

You can then hover and click these links like any other error message in the IDE to directly reach the relevant source code.

For more information and advanced usage options, you can refer to the [Tzap CLI documentation](https://github.com/tzapio/tzap) or the [Tzap GitHub repository](https://github.com/tzapio/tzap).
