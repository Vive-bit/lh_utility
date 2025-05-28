function doPost(e) {
  var type_ = e.parameter.type
  var result = {"code": "ok"};
  if (type_ == "split") {result["prompt"] = e.parameter.prompt.split("|")}}
  
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
} 
