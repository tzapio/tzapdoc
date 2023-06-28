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

```bash
tzap commit "chore"
```

## Wrapping Up

The `tzap cli commit` command is a powerful tool for creating detailed and semantic commit messages with the help of AI. It helps to maintain a clean and clear commit history, enabling your team to better understand and track the project's progress.
---
@role:user
write docusaurus mdx about what tzap cli commit is and how to use it
