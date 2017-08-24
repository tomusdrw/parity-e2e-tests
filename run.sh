#!/bin/bash

set -xe

echo "aaBBccDDeeFFggHH" > ./generated/authcodes
mkdir -p generated/screenshots

TESTCAFE=(
  ./node_modules/.bin/testcafe
  --screenshots ./generated/screenshots
  --screenshots-on-fails
  --quarantine-mod # re-run failed tests and mark them as unstable if they fail randomly
  --concurrency 2
  # --app-init-delay 4000
  # --app 'parity --config ./res/config.toml'
)

"${TESTCAFE[@]}" chrome ./src/* ${@}
