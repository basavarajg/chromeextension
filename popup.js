function onSelection(payload) {
  document.getElementById("output-text").value = payload.text;
  document.getElementById("output-html").value = payload.html;
  //chrome.extension.onRequest.removeListener(window.onSelection);
};

chrome.extension.onRequest.addListener(onSelection);
chrome.tabs.executeScript({
   file: "contentscript.js"
 });
