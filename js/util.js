
function doPost(e) {
  var type_ = e.parameter.type
  var result = {"code": "ok"};
  if (type_ == "split") {result["prompt"] = e.parameter.prompt.split("|")}}
  
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
} 
// lang: de-DE

function doPost(e) {
  // Diese Funktion wird automatisch ausgeführt, wenn jemand eine POST-Anfrage an das Script schickt.
  // 'e' enthält alle Daten, die mitgeschickt werden (Parameter, Body, etc.)

  var type_ = e.parameter.type;  
  // Liest den custom Parameter 'type' aus der Anfrage (z.B. type=split)

  var result = {"code": "ok"};  
  // Erstellt ein Standard-Objekt für die API-Antwort, hier mit einem Erfolgs-Code.

  if (type_ == "split") {
    // Wenn der übergebene Parameter 'type' den Wert 'split' hat:
    // Nimm den Textparameter 'prompt' und teile ihn an jedem '|'-Zeichen auf.
    result["prompt"] = e.parameter.prompt.split("|");
    // Beispiel: prompt="Hallo|Wie geht's?|Tschüss" -> ["Hallo", "Wie geht's?", "Tschüss"]
  }

  // Erstelle das tatsächliche Antwortobjekt für den API-Client (z.B. Thunkable)
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
  // -> Antwort im JSON-Format (z.B. {"code":"ok", "prompt":["Hallo","Wie geht's?","Tschüss"]})
}
