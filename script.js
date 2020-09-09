document.getElementById("inputs").addEventListener("submit",function(event) {
    event.preventDefault();
    const imgUrl = document.getElementById("img_url").value;
    if (imgUrl === "") {
        return alert("You can't meme air. Please enter URL");
    }
   
    generatMeme(imgUrl, function(result) {
        if (result === false) {
            return alert("Come on, you're better than that. Enter REAL url");
        }
        const topText = document.getElementById("top_text").value.toUpperCase();
        const bottomText = document.getElementById("bottom_text").value.toUpperCase();
        let theImage = document.createElement("img");
        let element = document.createElement("div");
        let topTextInput = document.createElement("span");
        let bottomTextInput = document.createElement("span");
        let overlay = document.createElement("div");
        let overlayText = document.createElement("div");

        element.className = "meme";
        element.addEventListener("click", deleteMeme);
        theImage.src = imgUrl;
        topTextInput.textContent = topText;
        topTextInput.className = "memetext top";
        bottomTextInput.textContent = bottomText;
        bottomTextInput.className = "memetext bottom";
        element.appendChild(theImage);
        element.appendChild(topTextInput);
        element.appendChild(bottomTextInput);
        overlay.appendChild(overlayText);
        element.appendChild(overlay);
        overlay.className = "overlay";
        overlayText.className = "overlayText";
        overlayText.textContent = "Delete";
       
        document.getElementById("meme_container").appendChild(element);
        document.getElementById("img_url").value;
        document.getElementById("top_text").value;
        document.getElementById("bottom_text").value; 
        
    });
});
   
function generatMeme(url, callback, timeout) {
  timeout = timeout || 5000;
  var timedOut = false, timer;
  var img = new Image();
  img.onerror = img.onabort = function() {
    if (!timedOut) {
      clearTimeout(timer);
      callback(false);
    }
  };
  img.onload = function() {
    if (!timedOut) {
      clearTimeout(timer);
      callback(true);
    }
  };
  img.src = url;
    timer = setTimeout(function() {
    timedOut = true;
    callback(false);
    }, timeout); 
  }
   
function deleteMeme(event) {
  if (event.target.className === "overlayText") {
    event.target.parentNode.parentNode.remove();
  } else {
    event.target.parentNode.remove();
  }
};


    
