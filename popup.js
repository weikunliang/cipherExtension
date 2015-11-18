function save() {
  var txt = $("#saveTxt").text();
  if(!txt) {
    console.log("Error!");
  } else {
    chrome.storage.local.set({'user': txt}, function() {
      console.log("Saved!");
    });
  }
}

function load() {
  var user = "";
  chrome.storage.local.get('user', function (result) {
        user = result.channels;
        console.log(result.channels);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  // do something
  save();
});
