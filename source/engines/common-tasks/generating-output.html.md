---
title: Printing Output
---

Engines have to ability to output information to users in the build process. This output should provide the developer with information about what the engine is doing. Nanobox provides a [style guide](/engines/style-guide) for formatting output, which should always be followed for consistency across all engines. In addition to providing a style guide, Nos includes convenient helper methods to implement the styleguide.

#### Warning
You should be familiar with the [style guide](/engines/style-guide) before continuing.

## Usage

### Printing a Header

To print a [main section header](/engines/style-guide#main-section-header), Nos provides a `print_header` function. This function accepts a single argument, which is the header title. The header will be formatted to 70 characters, uppercased, and centered.

#### Example:
```bash
print_header "headline here"
```

#### Would produce:
```text
::::::::::::::::::::::::::: HEADLINE HERE :::::::::::::::::::::::::::
```

### Printing the Start of a Process

To print a [main section header with child process output](/engines/style-guide/#main-section-with-child-process-output) indicating the start of a process, Nos provides a `print_process_start` function. This function accepts a single argument, which is the header title. The header will be formatted to 70 characters, uppercased, and left-aligned.

#### Example:
```bash
print_process_start "installing ruby-2.2"
```

#### Would produce:
```text
INSTALLING RUBY-2.2 ------------------------------------------------>
```

### Printing the End of a Process
To print the end of a process, Nos provides a `print_process_end` function. This function does not accept any arguments, and will create a delineation of the process with a hard newline.

### Printing the Start of a Sub-Process

To print a header indicating the [start of a sub-process](/engines/style-guide/#sub-tasks-with-success-failure-status), Nos provides a `print_subtask_start` function. This function accepts a single argument, which is the header title. The header will be formatted to 40 characters, uppercased, and left-aligned.

#### Example:
```bash
print_subtask_start "after build hook 1"
```

#### Would produce:
```text
AFTER BUILD HOOK 1 -------------------->
```

### Printing the End of a Subtask
According to the style guide, a subtask is terminated by printing either a success or failure message. The following functions: `print_subtask_success` and `print_subtask_fail` are provided by Nos and do not take any arguments.

#### Example 1:
```bash
print_subtask_success
```

#### Would produce:
```text
   [√] SUCCESS
```

#### Example 2:
```bash
print_subtask_fail
```

#### Would produce:
```text
   [!] FAILED
```

### Printing a Bullet
To print a [bullet](/engines/style-guide/#tasks) item, Nos provides a `print_bullet` function. This function accepts a single argument, which is the line to print in a bullet style.

#### Example:
```bash
print_bullet "Language Detected : Ruby"
```

#### Would produce:
```text
+> Language Detected : Ruby
```

### Printing Bullet Information
When printing [follow-up](/engines/style-guide/#tasks) information to a bullet, Nos provides the `print_bullet_sub` function. This function accepts a single argument, which is the line to print.

#### Example:
```bash
print_bullet_info "Language Detected : Ruby"
```

#### Would produce:
```text
   Language Detected : Ruby
```

### Printing Bullet Sub-Item
When printing a [sub-item](/engines/style-guide/#tasks) to a bullet, Nos provides the `print_bullet_sub` function. This function accepts a single argument, which is the sub item to print in a bullet style.

#### Example:
```bash
print_bullet_sub "Language Detected : Ruby"
```

#### Would produce:
```text
   - Language Detected : Ruby
```

### Printing a Warning
When printing a [warning message](/engines/style-guide/#warning), Nos provides a `print_warning` function. This function accepts a single argument, which is the warning message. The message is formatted to a 70 character block paragraph.

#### Example:
```bash
print_warning "We've detected you may be using... (abbreviated for clarity)"
```

#### Would Produce:
```text
-----------------------------  WARNING  -----------------------------
We've detected you may be using sessions in a way that could cause
unexpected behavior. Feel free to review the following guide for
more information : bit.ly/2sA9b
```

### Printing a Fatal Message
When printing a [fatal message](/engines/style-guide/#fatal-errors), Nos provides a `print_fatal` function. This function accepts 2 arguments: The title, and the message. The title will be uppercase, and the message will be formatted to a 70 character block paragraph.

#### Example:
```bash
print_fatal "deploy stream disconnected", "Oh snap... (abbreviated for clarity)"
```

#### Would produce:
```text
! DEPLOY STREAM DISCONNECTED !

Oh snap the deploy stream just disconnected. No worries, you can
visit the dashboard to view the complete output stream.
```
