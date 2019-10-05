chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ coloer: "green" }, function() {
    console.log("The color is green.");
  });
});
