$(function() {
  chrome.storage.local.get(['arr'], function(obj) {
      var array = obj.arr?obj.arr:[];
      for(let i=0; i< array.length; i++) {
        //alert('[ps]'+array[i]);
        //$('#dialog').append(array[i]);
        var div = document.createElement('div');
        div.id = 'htmlContent' + i;
        div.innerHTML = array[i];
        document.body.appendChild(div);
        //$('body').append('<div>' + array[i]  + '</div>');
      }
  });
});
//chrome.storage.sync.clear()
