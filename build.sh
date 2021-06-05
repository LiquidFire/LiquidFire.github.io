#!/bin/bash
export JEKYLL_VERSION=4.2.0
docker run --rm \
    --volume="$PWD:/srv/jekyll" \
    --volume="$PWD/vendor/bundle:/usr/local/bundle" \
    -it jekyll/jekyll:$JEKYLL_VERSION \
     jekyll build -- "$@"
