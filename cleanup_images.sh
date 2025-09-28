#!/bin/bash

# This script removes unused image assets from the project directory.
# Run this script from the root of your project.

echo "Starting cleanup of unused images..."

# List of files to be removed
files_to_remove=(
/public/logo/logo-template.svg

/public/logo/logoipsum-225.svg

/public/logo/logoipsum-245.svg

/public/logo/logoipsum-247.svg

/public/logo/logoipsum-248.svg

/public/logo/logoipsum-249.svg

/public/logo/logos.svg
)

# Loop through the files and remove them
for file in "${files_to_remove[@]}"; do
  if [ -f "$file" ]; then
    rm -v "$file"
  else
    echo "Warning: $file not found. Skipping."
  fi
done

echo "Cleanup complete."
