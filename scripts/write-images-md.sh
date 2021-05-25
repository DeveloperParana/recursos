#!/bin/bash

echo '# Banco de imagens' > IMAGES.md

for f in assets/images/**/*.svg; do
  file=$(echo $f | tr " " "-")
  mv "$f" "$file"
  echo $f $file

  echo "![${f}](${f}) " >> IMAGES.md;

done;

tree -L 3 -J assets/images > assets/images.json

npx prettier IMAGES.md --write
