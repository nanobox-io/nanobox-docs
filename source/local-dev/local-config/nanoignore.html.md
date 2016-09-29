---
title: .nanoignore
---

In many cases, there are files stored in your local codebase that do not need to be included in your app's [build packages](/cli/build/). In fact, these files can add unnecessary bloat leading to larger builds and longer upload times.

The `.nanoignore` file allows you to omit specific files and directories from your deployable build. It should be included in the root of your project.

#### Basic .nanoignore Example
```txt
.DS_Store
.git/
.gitignore
/application/logs/
```

## Use Cases
### Version Control Histories
Version control projects such as Git, SVN, Mercurial, etc., all store version histories within your project directory. These can often be very large and are not needed in your build package.

### Library, Vendor, & Package Directories
Dependency managers run during your apps build process, so its good to ignore the directories where dependencies are stored. These directories are replaced with your cached libraries in the build process, but ignoring their local contents will decrease your build time.

### Application Logs/Caches in the Filesystem
When working in a [local dev environment](http://localhost:4567/local-dev/dev-sim/#nanobox-dev), it's possible for your app to write things such as logs and/or caches to your local filesystem. To keep your build small, we recommend ignoring those files/directories.

### Network Directories
If your app includes [network directories](/app-config/network-storage/#configuring-network-storage), we highly recommend adding those same directories to your `.nanoignore`. The contents of these directories are replaced by network mounts when deployed your production app. Anything contained in these directories doesn't need to be included in the build.

## Syntax
*The syntax of the .nanoignore is based on rsync's exclude pattern rules*

- If the pattern starts with a `/` then it is anchored to a particular spot in the hierarchy of files, otherwise it is matched against the end of the pathname. This is similar to a leading `^` in regular expressions. Thus `/foo` would match a name of `foo` at either the "root of the transfer" (for a global rule) or in the merge-file's directory (for a per-directory rule). An unqualified `foo` would match a name of `foo` anywhere in the tree because the algorithm is applied recursively from the top down; it behaves as if each path component gets a turn at being the end of the filename. Even the unanchored `sub/foo` would match at any point in the hierarchy where a `foo` was found within a directory named `sub`.

- If the pattern ends with a `/` then it will only match a directory, not a regular file, symlink, or device.

- rsync chooses between doing a simple string match and wildcard matching by checking if the pattern contains one of these three wildcard characters: `*`, `?`, and `[` .

- A `*` matches any path component, but it stops at slashes.

- use `**` to match anything, including slashes.

- A `?` matches any character except a slash (`/`).

- A `[` introduces a character class, such as `[a-z]` or `[[:alpha:]]`.

- In a wildcard pattern, a backslash can be used to escape a wildcard character, but it is matched literally when no wildcards are present. This means that there is an extra level of backslash removal when a pattern contains wildcard characters compared to a pattern that has none. e.g. if you add a wildcard to `foo\bar` (which matches the backslash) you would need to use `foo\\bar*` to avoid the `\b` becoming just `b`.

- If the pattern contains a `/` (not counting a trailing `/`) or a `**`, then it is matched against the full pathname, including any leading directories. If the pattern doesn't contain a `/` or a `**`, then it is matched only against the final component of the filename. (Remember that the algorithm is applied recursively so "full filename" can actually be any portion of a path from the starting directory on down.)

- A trailing `dir_name/***` will match both the directory (as if `dir_name/` had been specified) and everything in the directory (as if `dir_name/**` had been specified).

### Examples
- `*.o` would exclude all names matching `*.o`
- `/foo` would exclude a file (or directory) named foo in the transfer-root directory
- `foo/` would exclude any directory named foo
- `/foo/*/bar` would exclude any file named bar which is at two levels below a directory named foo in the transfer-root directory
- `/foo/**/bar` would exclude any file named bar two or more levels below a directory named foo in the transfer-root directory
