---
sidebar_position: 1
---

# Tzap init

The `tzap init` command, part of the Tzap CLI toolkit, is designed to initiate a Tzap configuration. When you run this command, it creates necessary configuration files, including `.tzapignore`, `.tzapinclude`, and a main configuration file. This command is essential for setting up Tzap in your project.

## Usage

The `tzap init` command should be run from the root of your project. It functions by traversing the folder structure from the root, and it tries to find `.git` in the folder. The command generates all the necessary configuration files in your root directory for Tzap to run smoothly.

```bash
tzap init
```

If you run the command and the Tzap configuration files already exist, you will receive a message saying `Tzap is already initialized`. 

## What can you expect?

Here's a step-by-step breakdown of what the `tzap init` command does after you call it:

1. **Check existing Tzap configuration:**
The command first checks whether Tzap has already been initialized in your project. If a configuration already exists, it notifies you that `Tzap is already initialized`.

2. **Optional: Locate the root directory:**
The command then looks for a `.git` directory to identify the root of your project. If it can't find it, it warns you to ensure that you're executing the command from the project's root directory.

3. **Start initialization:**
It starts the initialization process, setting up necessary configuration files, such as `.tzapignore`, `.tzapinclude`, and a main configuration file.

Note that it also offers a general information walkthrough about Tzap if this is your first time initializing Tzap.

4. **Setups your preferred editor:**
It asks you to choose a preferred text editor, which will be stored in the configuration file. This can later be edited in `.tzap-data/config.json`

## Conclusion

The `tzap init` command is the first command to run when introducing Tzap to your project. It sets up an environment tailored for Tzap to run smoothly in your project, initializing best practices, and preparing all necessary configuration files. 

Remember, it is always a good practice to run this command from the root directory of your project. For more information and advanced usage options, you can refer to the Tzap CLI documentation or the [Tzap GitHub repository](https://github.com/tzapio/tzap).