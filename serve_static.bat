:: Copyright (c) 2022 Alex313031.
:: Batch file to launch local instance of the Chromium netlog viewer.

echo "This batch file requires Python 3"

echo "Starting server at http://localhost:8086"

echo "Go to http://localhost:8086/netlog.html"

cd src

python -m http.server 8086
