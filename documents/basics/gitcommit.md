---
sidebar_position: 2
---


# Tzap commit (git)

tzap CLI provides an array of tools to simplify the process of coding and documentation. One of these tools is the tzap CLI commit command, also referred to as semanticgitcommit. 

`tzap cli commit` is a command that makes semantic commit messages easier using the power of OpenAI's GPT-4 engine. This command operates on the principles of Conventional Commits, a lightweight convention that lays on top of commit messages, providing an easy set of rules for creating an explicit commit history.

## How to use tzap CLI Commit

All you need is staged git changes and simply run:

```bash
tzap commit
```

This command generates a commit message and commits it to the current git repository. The generated commit message is based on the diff of the currently staged files.

**Stage changes to git**

For example create a add function in a new and stage the git changes.

```bash
~/code/yourproject $ echo "function add(a,b) { return a+b; }" > add.js
~/code/yourproject $ git add add.js
````

**Generate commit message**

Use `tzap commit` to prepare a commit message:
```txt
~/code/yourproject $ tzap commit

Reading staged git commit diffs

--- git commit completion:
// highlight-start
feat(add): add function to perform addition

This commit adds a new function called add, which takes two parameters (a and b) and returns their sum.

BREAKING CHANGE: None
// highlight-end
---
File:  /tmp/tzapchange1418333598

Edit git commit at file location.

 - press c and enter to open in vscode. 
 - press v and enter to open in vim. 
 - press enter to continue. 

Continue with this commit? (y/n):

```

The command aims to provide an intelligent semantic commit message that is informative and conforms to the common practice of semantic commit messages.

## Conditions for tzap CLI Commit

This command works best when:

- The current directory is a Git repository.
- There are staged files ready for commit.

## Customizing tzap Commit

You can customize the operation of the `tzap commit` command through adding some direction for the prompt completion. 

```txt
~/code/yourproject $ tzap commit "chore"
chore: create example add function
...

~/code/yourproject $ tzap commit "feature pkg/math"
feat(pkg/math): create add function
... 
```

**Further information**

[The Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:
***

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
***


The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. **fix**: a commit of the *type* `fix` patches a bug in your codebase (this correlates with [**`PATCH`**](http://semver.org/#summary) in Semantic Versioning).
2. **feat**: a commit of the *type* `feat` introduces a new feature to the codebase (this correlates with [**`MINOR`**](http://semver.org/#summary) in Semantic Versioning).
3. **BREAKING CHANGE**: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with [**`MAJOR`**](http://semver.org/#summary) in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
4. types other than fix: and feat: are allowed, for example [**@commitlint/config-conventional**](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (based on the [**Angular convention**](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommends `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
5. footers other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to [**git trailer format**](https://git-scm.com/docs/git-interpret-trailers).

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays.`



## Wrapping Up

The `tzap commit` command is a powerful tool for creating detailed and semantic commit messages with the help of LLMs. It helps to maintain a clean and clear commit history, enabling your team to better understand and track the project's progress.