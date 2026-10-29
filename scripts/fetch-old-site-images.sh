#!/usr/bin/env bash
# Saves local copies of the images hot-linked from the old site. Run on your Mac:  bash scripts/fetch-old-site-images.sh
# Then change the src values in src/data/images.ts to /images/... paths.
set -e
cd "$(dirname "$0")/../public/images"; mkdir -p art
B=https://sa1s3optim.patientpop.com/assets
P=$B/production/practices/393f89bc5848d93e98bd0771889762273578c143/images
curl -fLo provider-lisa.png $P/1949840.png
curl -fLo provider-miriam.png $P/2692893.png
curl -fLo provider-michal.jpg $P/2824031.jpg
for i in 1949846 1949847 1949848 1949849 1949850 1949851; do curl -fLo art/art-$i.jpeg $B/images/provider/photos/$i.jpeg; done

# Office gallery
mkdir -p office
curl -fLo office/office-438733.jpeg $B/docs/438733.jpeg
curl -fLo office/office-438734.JPG $B/docs/438734.JPG
curl -fLo office/office-438735.JPG $B/docs/438735.JPG
curl -fLo office/office-438736.JPG $B/docs/438736.JPG
curl -fLo office/office-438766.JPG $B/docs/438766.JPG
curl -fLo office/office-438767.jpg $B/docs/438767.jpg
curl -fLo office/office-438768.JPG $B/docs/438768.JPG
curl -fLo office/office-438770.jpeg $B/docs/438770.jpeg
curl -fLo office/office-438772.jpeg $B/docs/438772.jpeg
curl -fLo office/office-438773.JPG $B/docs/438773.JPG
curl -fLo office/office-438774.jpeg $B/docs/438774.jpeg
curl -fLo office/office-438775.jpeg $B/docs/438775.jpeg
curl -fLo office/office-438776.jpeg $B/docs/438776.jpeg
curl -fLo office/office-438778.JPG $B/docs/438778.JPG
curl -fLo office/office-438779.jpeg $B/docs/438779.jpeg
curl -fLo office/office-438782.JPG $B/docs/438782.JPG

# TV station logos (Press section)
mkdir -p press
curl -fLo press/kutv.png $B/docs/447166.png
curl -fLo press/fox40.png $B/docs/447167.png
curl -fLo press/nbc-fort-wayne.png $B/docs/447168.png
curl -fLo press/wpta.png $B/docs/447169.png

# Insurance logos
mkdir -p insurance
curl -fLo insurance/1771740.png $B/images/provider/photos/1771740.png
curl -fLo insurance/1771750.png $B/images/provider/photos/1771750.png
curl -fLo insurance/2206449.png $B/images/provider/photos/2206449.png
curl -fLo insurance/1771839.png $B/images/provider/photos/1771839.png
curl -fLo insurance/1771694.png $B/images/provider/photos/1771694.png
curl -fLo insurance/1775100.png $B/images/provider/photos/1775100.png
curl -fLo insurance/1771833.png $B/images/provider/photos/1771833.png
curl -fLo insurance/2272134.png $B/images/provider/photos/2272134.png
curl -fLo insurance/1771909.png $B/images/provider/photos/1771909.png
curl -fLo insurance/1771896.png $B/images/provider/photos/1771896.png
curl -fLo insurance/1776303.png $B/images/provider/photos/1776303.png
curl -fLo insurance/2614660.png $B/images/provider/photos/2614660.png
curl -fLo insurance/1771835.png $B/images/provider/photos/1771835.png
curl -fLo insurance/1790359.png $B/images/provider/photos/1790359.png
curl -fLo insurance/1790728.png $B/images/provider/photos/1790728.png
curl -fLo insurance/1789309.png $B/images/provider/photos/1789309.png

# Doctors' Day photos
mkdir -p events
curl -fLo events/doctors-day-463055.jpeg $B/docs/463055.jpeg
curl -fLo events/doctors-day-463056.jpeg $B/docs/463056.jpeg
curl -fLo events/doctors-day-463057.jpeg $B/docs/463057.jpeg
curl -fLo events/doctors-day-463058.jpeg $B/docs/463058.jpeg
curl -fLo events/doctors-day-463059.jpeg $B/docs/463059.jpeg

# Book
mkdir -p book
curl -fLo book/cover.jpeg $B/docs/423709.jpeg
curl -fLo book/finalist.jpg $B/docs/427002.jpg
