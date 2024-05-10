window.onload = function() {
    var array = [];
    for (var i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * 100) + 1); 
    }
   
    array.sort(function(a, b) {
        return a - b;
    });

    var sortedArrayElement = document.createElement("div");
    sortedArrayElement.textContent = "Відсортований масив: " + array.join(", ");
    document.body.insertBefore(sortedArrayElement, document.getElementById("container"));

    document.getElementById("generate-button").addEventListener("click", function() {
        var height = document.getElementById("height").value;
        
        var div = document.createElement("div");
        div.style.backgroundColor = "blue";
        div.style.width = "30px";
        div.style.height = height + "px";
        div.style.position = "relative"; 

        document.body.insertBefore(div, sortedArrayElement.nextSibling);

        var leftButton = document.createElement("button");
        leftButton.textContent = "Посунути вліво";
        leftButton.onclick = function() {
            div.style.left = (parseInt(div.style.left) || 0) - 20 + "px";
        };
        document.body.insertBefore(leftButton, div.nextSibling);

        var rightButton = document.createElement("button");
        rightButton.textContent = "Посунути вправо";
        rightButton.onclick = function() {
            div.style.left = (parseInt(div.style.left) || 0) + 20 + "px";
        };
        document.body.insertBefore(rightButton, div.nextSibling);
    });
};

