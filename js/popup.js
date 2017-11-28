function HashObject(annotationObject) {
  this.annotationObject=annotationObject;
}

function AnnotationObject(html, cid) {
  this.html=html;
  this.cid=cid;
}


$(function() {
  chrome.storage.sync.get(['payload'], function(obj) {
      $("#dialog").append(obj.payload.html);
  });
});
