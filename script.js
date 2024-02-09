
// script.js
let prompts = JSON.parse(localStorage.getItem('prompts')) || [
  "Write about a time you felt lost.",
  "Describe your favorite childhood memory.",
  "What are you grateful for today?"
];

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
    