## Copyright (c) 2022 Alex313031.
# Script to launch local instance of the Chromium netlog viewer.

printf "This script requires Python 3\n" &&

printf "Starting server at http://localhost:8086\n" &&

printf "Go to http://localhost:8086/netlog.html\n" &&

cd src &&

python -m http.server 8086

exit 0
