# Thorium NetLog Viewer <img src="https://raw.githubusercontent.com/Alex313031/Thorium_NetLog_Viewer/main/netlog_viewer/json-file.png" width="48">
Fork of the [Chromium NetLog Viewer](https://chromium.googlesource.com/catapult/+/master/netlog_viewer/) for [Thorium.rocks](https://thorium.rocks/).

This app loads [NetLog .json files](https://www.chromium.org/developers/design-documents/network-stack/netlog) generated by Thorium's `chrome://net-export`. Log data is processed and visualized entirely on the client side (your browser). Data is never uploaded
to a remote endpoint.

The latest version of the Thorium Net Log Viewer can be accessed: [Here](https://thorium.rocks/misc/thorium_netlog_viewer/netlog.html) \
The latest version of the Chromium Net Log Viewer can be accessed: [Here](https://netlog-viewer.appspot.com/)

## Usage
Go to *chrome://net-export/* and start a logging session. When you stop the session it will save the log file. By default it will save `chrome-net-export-log.json` to your Downloads folder. You can then upload/drag n' drop the file into the NetLog window.

__Advanced Usage:__ For more advanced usage, including starting logging when Thorium starts, see > https://www.chromium.org/for-testers/providing-network-details/

To run locally, clone the repo, and then you can run `serve_static.sh` (Linux), or `serve_static.bat` (Windows) and open your browser to *http://0.0.0.0:8086/netlog.html* to use it.

See [CONTRIBUTING.md](https://github.com/Alex313031/Thorium_NetLog_Viewer/blob/main/CONTRIBUTING.md) for details on how to modify and run locally, or report bugs.
