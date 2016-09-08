#!/bin/bash

LC_ALL=C find ./ -type f -exec sed -i '' -e "s/mixpanel\_token\_placeholder/$MIXPANEL_TOKEN/g" {} \;
