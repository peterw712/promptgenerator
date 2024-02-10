
// script.js
let prompts = JSON.parse(localStorage.getItem('prompts')) || [
    "What’s a small act of kindness you were once shown, that you’ll never forget?",
    "Describe a moment in your life where you felt completely at peace.",
    "What’s one thing you’ve always wanted to do but haven’t, and why?",
    "If you could change one aspect of society, what would it be and why?",
    "What does your ideal version of self-care look like?",
    "Share a fear you overcame and how you did it.",
    "What’s a tradition you’d love to start in your life or family?",
    "If you could live in any book, TV show, or movie world for a week, where would you go?",
    "What’s the most valuable lesson a mistake has taught you?",
    "Describe a time when you felt most alive.",
    "What are three things you value most in a friendship?",
    "If you could give one piece of advice to the entire world, what would it be?",
    "What’s a goal you have for the next year that excites you?",
    "What’s something you’re looking forward to right now?",
    "If you could have one superpower for a day, what would it be and why?",
    "What’s a hobby you’ve always wanted to pick up and why haven’t you?",
    "Describe your happiest childhood memory.",
    "What’s one change you’ve made in your life that has made a significant impact?",
    "If you could witness any event past, present, or future, what would it be?",
    "What does home mean to you?",
    "Share a moment when a stranger made a lasting impact on your life.",
    "What’s something you’ve done that you never thought you could?",
    "How do you deal with stress or anxiety? Share your strategies.",
    "What’s one mystery you’d like solved in your lifetime?",
    "If you could ask one person, living or dead, only one question, who and what would you ask?",
    "Describe a moment when you felt proud of yourself.",
    "What’s a song that always brings you joy or comfort?",
    "What’s an unpopular opinion you hold?",
    "Share a dream you remember vividly.",
    "What’s something new you learned about yourself recently?",
    "If you could send a message to the entire world, what would you say in 30 seconds?",
    "What’s a skill you’ve learned as an adult that you wish you learned as a child?",
    "Describe a piece of art (any form) that moved you and why.",
    "What’s something you do to make the world a better place?",
    "If you could spend a day with a fictional character, who would it be and why?",
    "What’s a personal rule you never break?",
    "Share a quote that inspires you and explain why.",
    "What’s an experience that changed your outlook on life?",
    "How do you find peace in challenging times?",
    "What’s something you forgive yourself for?",
    "Describe a time when you helped someone, and it made your day better.",
    "What’s a book or movie that everyone should read or see at least once?",
    "What are you most passionate about, and why?",
    "If you could master any skill instantly, what would it be?",
    "What’s the most beautiful place you’ve ever been?",
    "Describe a challenge you’re facing right now and how you’re dealing with it.",
    "What’s something that makes you unique?",
    "If you could go back in time to witness any historical event, which would you choose?",
    "What’s a habit you’re trying to develop or break, and why?",
    "Share a moment when you felt like you were exactly where you were supposed to be."
]
;

function savePrompts() {
  localStorage.setItem('prompts', JSON.stringify(prompts));
}

function displayPrompt() {
  if(prompts.length === 0) {
    document.getElementById('promptDisplay').textContent = "No prompts available. Add a new one!";
    return;
  }
  const promptDisplay = document.getElementById('promptDisplay');
  const randomIndex = Math.floor(Math.random() * prompts.length);
  promptDisplay.textContent = prompts[randomIndex];
}

function addPrompt() {
  const newPromptInput = document.getElementById('newPromptInput');
  if(newPromptInput.value.trim() !== "") {
    prompts.push(newPromptInput.value.trim());
    savePrompts(); // Save the updated array to local storage
    newPromptInput.value = ''; // Clear input after adding
    displayPrompt(); // Display a prompt immediately after adding
  }
}

function removePrompt() {
  const promptDisplay = document.getElementById('promptDisplay');
  prompts = prompts.filter(prompt => prompt !== promptDisplay.textContent);
  savePrompts(); // Save the updated array to local storage
  displayPrompt(); // Display next prompt after removing
}

document.getElementById('shufflePrompt').addEventListener('click', displayPrompt);
document.getElementById('addPrompt').addEventListener('click', addPrompt);
document.getElementById('removePrompt').addEventListener('click', removePrompt);

// Display an initial prompt
displayPrompt();
    
