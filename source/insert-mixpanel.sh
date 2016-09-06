#!/bin/bash

for i in $(find .)
do
  sed -i "s/mixpanel_token_placeholder/$MIXPANEL_TOKEN/g"
done
