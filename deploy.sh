#!/bin/bash
set -e
lein cljsbuild once min
cd resources/public
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "git:github.com/timothypratley/pirates.git" master:gh-pages
