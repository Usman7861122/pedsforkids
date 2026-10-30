#!/usr/bin/env bash
# Saves the big hero photo (kids reading in the waiting room) from the old site.
# Run on your Mac:  bash scripts/fetch-old-hero.sh
set -e
cd "$(dirname "$0")/../public/images"
curl -fLo hero-kids-reading.jpg "https://sa1s3optim.patientpop.com/assets/production/practices/393f89bc5848d93e98bd0771889762273578c143/images/2635404.jpg"
ls -la hero-kids-reading.jpg
