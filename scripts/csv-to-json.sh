#!/bin/bash

# CSV to JSON converter using BASH
# original script from https://gist.github.com/dsliberty/3de707bc656cf757a0cb
# Usage ./csv2json.sh input.csv > output.json

#set -x
shopt -s extglob

input="${1:-}"
SEP=","

[ -z "${input}" ] && echo "No CSV input file specified" && exit 1
[ ! -e "${input}" ] && echo "Unable to locate ${input}" && exit 1

read first_line <"${input}"
a=0
headings=$(echo ${first_line} | awk -F"${SEP}" {'print NF'})
lines=$(cat "${input}" | wc -l)
while [ ${a} -lt ${headings} ]; do
  head_array[${a}]=$(echo ${first_line} | awk -v x=$((${a} + 1)) -F"${SEP}" '{print $x}' | sed 's/\r//g')
  a=$((${a} + 1))
done

c=0
echo "["
while [ ${c} -lt ${lines} ]; do
  read each_line
  each_line="$(echo "${each_line}" | sed 's/\r//g')"

  if [[ ${c} -eq 0 ]]; then
    c=$((${c} + 1))
  else
    d=0
    echo "    {"
    while [[ ${d} -lt ${headings} ]]; do
      item="$(echo "${each_line}" | awk -v x=$((${d} + 1)) -F"${SEP}" '{print $x}')"
      echo -n "        \"${head_array[${d}]}\": "
      case "${item}" in
      "")
        echo -n "null"
        ;;
      null | true | false | \"*\" | +([0123456789]))
        echo -n ${item}
        ;;
      *)
        echo -n "\"${item}\""
        ;;
      esac
      d=$((${d} + 1))
      [[ ${d} -lt ${headings} ]] && echo "," || echo ""
    done

    echo -n "    }"

    c=$((${c} + 1))
    [[ ${c} -lt ${lines} ]] && echo "," || echo ""
  fi

done <"${input}"
echo "]"
