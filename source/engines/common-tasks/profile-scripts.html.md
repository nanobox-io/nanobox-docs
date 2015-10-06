---
title: Profile.d Scripts
---

When the app starts, a bash session is initiated within the container. When bash runs, scripts inside of `etc_dir`/profile.d are sourced.

Profile.d scripts will also be sourced when a console session is initiated.

#### Warning!

Profile scripts are not sourced in any particular order.

#### Note

Profile scripts should be used for preparing the environment, such as adding symlinks from the home directory into the code directory or other scripted processes. While you can export environment variables, it is recommended to use a more [offical](/engines/common-tasks/environment-variables/) approach.