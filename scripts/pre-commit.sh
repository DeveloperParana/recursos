#!/bin/bash

set -e

echo 'Check Format'
npm run format:check

echo 'Lint Workspace & Code'
npm run affected:lint

echo 'Unit Tests'
npm run affected:test

echo 'Build affected projects'
npm run affected:build  --prod

# echo 'Release affected libraries'
# npm run affected -- --target release --debug --dry-run --base origin/main
