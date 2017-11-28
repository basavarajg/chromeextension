var contextMenuItem = {
  "id": "annotationHtml",
  "title": "Annotate Content",
  "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(selectedData){
  //selectedData.selectionText
  //chrome.storage.sync.set({'selectedData': selectedData});
  chrome.tabs.executeScript({
    file: "js/contentscript.js"
  }, function() {
      chrome.tabs.create({
        url: '/popup.html'
      });
  });
});
