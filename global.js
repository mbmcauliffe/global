function raiseError(error){
	document.getElementById("errorTitle").innerHTML = error.title + ":";
	document.getElementById("errorMessage").innerHTML = error.message;
	document.getElementById("errorBlock").style.setProperty("display", "flex");
}

function dismissError(){
	document.getElementById("errorBlock").style.setProperty("display", "none");
}

async function logout(){

	const response = await fetch('/logout', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  window.location.replace("/");

}

function enterHandling(keyPress, callback=null){

  if(keyPress == 'Enter'){

    if(callback == null){

      const inputs = Array.from(document.getElementsByTagName("input"));

      const currentIndex = inputs.indexOf(document.activeElement);

      inputs[currentIndex + 1].focus();

    } else {

      callback();

    }

    return keyPress != 'Enter';

  }

  return
  
}

function raisePrompt(){

  document.getElementById("promptBox").style.setProperty("display", "block");

}

function closePrompt(clear=false){

  const promptBox = document.getElementById("promptBox");

  promptBox.style.setProperty("display", "none");

  if(clear == true){

    const promptInputs = Array.from(promptBox.getElementsByTagName("input"));

    for(i=0;i<promptInputs.length;i++){

      promptInputs[i].value = "";

    }

  }

}