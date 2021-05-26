#!/bin/bash

OUTPUT=design/assets/icons.svg
TMP=tmp/icons.svg.tmp

echo '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' >icons.svg

for path in assets/icons/svg/*.svg; do
  segments=($(echo $path | tr "/" "\n"))
  file=${segments[${#segments[@]} - 1]}

  echo "<symbol id=\"$file\">" >>$TMP

  echo "<title>$file</title>" | sed G >>$TMP

  echo "$(cat $path | sed 1,7d | sed '$d')" >>$TMP

  echo '</symbol>' >>$TMP

done

echo '</svg>' >>$TMP

cat $TMP | sed 's/.svg</</' | sed 's/.svg">/">/' >$OUTPUT
