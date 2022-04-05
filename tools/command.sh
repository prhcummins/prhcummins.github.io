#!/bin/sh

xmlstarlet ed \
  -d "//_:extensions" \
  -d "/_:gpx/_:metadata/_:time" \
  -d "/_:gpx/_:trk/_:type" \
  -d "//_:trkpt/_:time" \
  -d "//_:trkpt/_:hdop" \
  -d "//_:trkpt/_:vdop" \
  -d "//_:trkpt/_:pdop" \
  -u "/_:gpx/@creator" -v "Shell script" \
  $1 \
  | xmlstarlet tr remove-unused-namespaces.xslt - \
  | xmlstarlet ed -u "/_:gpx/@xsi:schemaLocation" -v "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" \
  | xmllint --c14n11 --pretty 2 - \
  > "cleaned_$1"

rm $1