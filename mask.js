console.log("Masking script running");

var imgURL = chrome.runtime.getURL("images/linkedin-logo.png");
var newName = "Nomen Nescio";

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {


  for (var i = 0; i < mutations.length; i += 1) {
    if (mutations[i].target.id == "search-results" && mutations[i].addedNodes.length > 0) {

      var profileImgs = document.getElementsByClassName("profile-img");
      console.log("Masking " + profileImgs.length + " candidates...");
      for (var i = 0; i < profileImgs.length; i += 1) {
          profileImgs[i].src = imgURL;
      }
      
      var names = document.getElementsByClassName("search-result-profile-link");
      for (var i = 0; i < names.length; i += 1) {
          names[i].innerHTML = newName;
      }
    }
  }

});

var content = document.getElementById('content');
observer.observe(content, {
  subtree: true,
  childList: true
});

