var selection = window.getSelection();

var off = selection.anchorOffset;

// Only works with a single range
var range = selection.getRangeAt(0);

var elements = range.cloneContents();
var children = elements.childNodes;
//alert(children[0].innerHTML);
var payload = {
  'html': children[0].innerHTML
};
chrome.storage.sync.set({'payload': payload});
