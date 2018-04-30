chrome.downloads.download(
  {
    url: chrome.extension.getURL("/image.png"),
    saveAs: false
  },
  downloadId => {
    var elt = document.createElement("p");
    elt.innerText = "Did it!";
    document.getElementById("msgs").appendChild(elt);
  }
);
