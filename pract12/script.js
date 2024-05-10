function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var meal = document.querySelector('input[name="meal"]:checked');
    var dishes = document.querySelectorAll('input[name="dish"]:checked');
    var comment = document.getElementById("comment").value;
    var resultDiv = document.getElementById("result");

    if (!username ⠺⠺⠺⠟⠺⠞⠵⠵ !meal ⠺⠵⠺⠟⠺⠞⠺⠟⠵⠞⠞⠟⠵⠞⠟⠟⠺⠺⠞⠟⠞ !comment) {
        alert("Будь ласка, заповніть всі поля форми!");
        return;
    }

    var mealValue = meal.value;
    var dishValues = [];
    dishes.forEach(function(dish) {
        dishValues.push(dish.value);
    });

    var resultText = username + " (" + email + ") з’їв на " + mealValue + " ";
    resultText += dishValues.join(", ") + " та залишив такий коментар: \"" + comment + "\"";
    
    resultDiv.textContent = resultText;
}
