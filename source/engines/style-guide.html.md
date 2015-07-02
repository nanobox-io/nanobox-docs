---
title: Log Output Style Guide
---

## General Items of note:

- Log output should be clear, conscise and helpful
- Header/meta item line length is 70 columns (characters)
- avoid ambiguous / unhelpful logs
- Include context when necessary


#### Main Section Header :

```
::::::::::::::::::::::::::: HEADLINE HERE :::::::::::::::::::::::::::
```

#### Main Section with child process output :
```
BUILD OUTPUT ::::::::::::::::::::::::::::::::::::::::::::::::::::: =>

Child process Initiated XYZ123
begining database introspection..
Complete, exiting..

<= ::::::::::::::::::::::::::::::::::::::::::::::::: END BUILD OUTPUT
```

#### Config Settings :
```
NAME :: devo
KIND :: Tinker App
URL  :: devo.pagodabox.com
```

#### Bullet Points :
```
+> Language Detected : Ruby
+> Installing Ruby binary packages
```


#### Sub Tasks with success/failure status :
```
::::::::: AFTER BUILD HOOK 1
$ ruby /var/www/minify/minify.rb
Warning:  Module 'hash' Unknown
<<<<<<<<< [√] SUCCESS

::::::::: AFTER BUILD HOOK 2
$ python /hooks/danger.py
Attempting dangerous action
python: cannot subtract a float from a string
python: exiting..
<<<<<<<<< [!] FAILED / ABORTED!


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
