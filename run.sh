#!/bin/bash

set -xe

TESTCAFE=(
  ./node_modules/.bin/testcafe
  # --app-init-delay 4000
  # --app 'parity --config ./res/config.toml'
)

"${TESTCAFE[@]}" chrome ./src/* ${@}
