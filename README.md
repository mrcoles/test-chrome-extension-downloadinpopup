
Popup download + Ask where to save each file before downloading
===============================================================

Using [chrome.downloads.download](https://developer.chrome.com/extensions/downloads#method-download) with the `saveAs: false` option gets overriden by Chrome > Preferences > Advanced > Ask where to save each file before downloading.

This leads to an interesting bug when downloads are triggered from an extension’s popup window where the save as dialog tries to center on the popup window and ends up sliding off screen.

1. I would assume it should stay centered on the main screen, not the popup.
2. Is there any way to tell if this preference is set from a Chrome extension?
3. Why doesn’t the downloads API override this preference?

Tested on Mac OS 10.13.2, Chrome 66.0.3359.117 (Official Build) (64-bit).
