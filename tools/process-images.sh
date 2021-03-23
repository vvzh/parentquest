#!/bin/bash

for input in images-in/*; do
  output="images-out/$(basename $input)"
  echo "Generating $output"
  convert "$input" -strip -resize x1024 "$output"
  jpegoptim --size=500 "$output"
done
