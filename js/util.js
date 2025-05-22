document.addEventListener("message", function(event) {
    const data = event.data;

    const result = split_(data);

    window.ReactNativeWebView.postMessage(JSON.stringify(result));
  });

function split_(txt) {return txt.split("|");} // to split ai response for data tables
