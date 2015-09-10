---
title: Log Output Style Guide
---

## General Items of note:

- Log output should be clear, concise and helpful
- Header/meta item line length is 70 columns (characters)
- Avoid ambiguous / unhelpful logs
- Include context when necessary


#### Main Section Header :

```
::::::::::::::::::::::::::: HEADLINE HERE :::::::::::::::::::::::::::
```

#### Main Section with Child Process Output :
```

INSTALLING RUBY-2.2 ------------------------------------------------>
  Child process Initiated XYZ123
  beginning database introspection..
  Complete, exiting..

```
- Headline should be in the active present tense when possible. ie : "Installing ruby" vs "Install ruby"
- Hard return before and after

#### Config Settings :
```
NAME :: devo
KIND :: Tinker App
URL  :: devo.nanobox.io
```

#### Tasks :
```
+> Doing some tasks
+> Doing another task
+> Detecting Language...
   Language Detected : Ruby
+> Installing Ruby binary packages
   - verifying packages
   - preparing install
   - Installing
+> Doing some other task
+> Verifying checksum
```
- Description should be active present tense when possible
- Sub information should be prefixed with three spaces
- Sub bullet points should be prefixed with three spaces and a dash

#### Sub Tasks with Success/Failure Status :
```
AFTER BUILD HOOK 1 ------------------>
   $ ruby /var/www/minify/minify.rb
   Warning:  Module 'hash' Unknown
   [√] SUCCESS

AFTER BUILD HOOK 2 ------------------>
   $ python /hooks/danger.py
   Attempting dangerous action
   python: cannot subtract a float from a string
   python: exiting..
   [!] FAILED / ABORTED!
```

#### Warning :
```
-----------------------------  WARNING  -----------------------------
We've detected you may be using sessions in a way that could cause
unexpected behavior. Feel free to review the following guide for
more information : bit.ly/2sA9b

Next output comes after one hard return..
```

#### Fatal Errors :
```
! DEPLOY STREAM DISCONNECTED !

Oh snap the deploy stream just disconnected. No worries, you can
visit the dashboard to view the complete output stream.

```
