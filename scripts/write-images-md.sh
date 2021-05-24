#!/bin/bash

echo '# Banco de imagens' > IMAGES.md

for f in assets/images/**/*.svg; do
  # file=$(echo $f | tr " " "-")
  # mv "$f" "$file"
  # echo $f $file

  echo "![${f}](${f}) " >> IMAGES.md;

done;

npx prettier IMAGES.md --write
