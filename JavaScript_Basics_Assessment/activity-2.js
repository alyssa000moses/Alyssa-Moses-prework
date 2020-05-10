const userInput = prompt('Please enter your favorite word:');

if (userInput.length > 4) {
    alert('Your favorite word is greater than 4 characters');
} else {
    alert('Your favorite word is less than 4 characters');
}