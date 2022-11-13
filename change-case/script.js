let inputText;

document.getElementById("btn lower-case").addEventListener("click", function() {
    inputText = document.getElementById("text-area").value;
    document.getElementById("text-area").value = inputText.toLowerCase();
})

document.getElementById("btn upper-case").addEventListener("click", function() {
    inputText = document.getElementById("text-area").value;
    document.getElementById("text-area").value = inputText.toUpperCase();
})

document.getElementById("btn title-case").addEventListener("click", function() {
    inputText = document.getElementById("text-area").value;

    inputText = inputText.replace(/\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          })

    document.getElementById("text-area").value = inputText;
})

