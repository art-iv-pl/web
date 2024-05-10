document.getElementById('submitButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var meal = document.querySelector('input[name="meal"]:checked');
    var foods = document.querySelectorAll('input[name="food"]:checked');
    var comment = document.getElementById('comment').value;
    var resultDiv = document.getElementById('result');

    if (!username || !email || !meal || foods.length === 0 || !comment) {
        resultDiv.textContent = "Будь ласка, заповніть всі поля!";
        return;
    }

    var mealValue = meal.value;
    var foodsArray = [];
    foods.forEach(function(food) {
        foodsArray.push(food.value);
    });
    var foodsString = foodsArray.join(', ');

    var resultText = username + ' (' + email + ') з’їв на ' + mealValue + ' ' + foodsString + ' та залишив такий коментар: "' + comment + '"';
    resultDiv.textContent = resultText;
});
