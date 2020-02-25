function reinitIframe(){
  var iframe = document.getElementsByTagName("iframe")[0];
  var bHeight = iframe.contentWindow.document.body.scrollHeight;
  iframe.height = bHeight;
  }
  window.onload=reinitIframe;
  window.addEventListener("resize",reinitIframe);