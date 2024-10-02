// Select the hearts container
const heartsContainer = document.querySelector('.hearts-container');

// Function to create and animate hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Randomize the starting position
  const leftPosition = Math.random() * 100;
  heart.style.left = `${leftPosition}vw`;
  
  // Random rotation between -45 and 45 degrees
  const rotateAngle = Math.random() * 90 - 45;
  heart.style.setProperty('--rotate-angle', `${rotateAngle}deg`);

  heartsContainer.appendChild(heart);

  // Remove the heart after it floats away
  setTimeout(() => {
    heart.remove();
  }, 15000); // Match the duration of the float animation (15s)
}

// Generate hearts at regular intervals
setInterval(createHeart, 1000);

// Handle the "Who me?" button click
document.getElementById('whoMeBtn').addEventListener('click', function() {
  // Hide initial gif and "Who me?" button
  document.getElementById('initialGif').classList.add('hidden');
  document.getElementById('whoMeBtn').classList.add('hidden');

  // Show compliment gif, text, and response buttons with fade-in
  document.getElementById('complimentGif').classList.remove('hidden');
  document.getElementById('complimentText').classList.remove('hidden');
  document.getElementById('response-buttons').classList.remove('hidden');

  // Add fade-in effect
  document.getElementById('complimentGif').classList.add('fade-in');
  document.getElementById('complimentText').classList.add('fade-in');
  document.getElementById('response-buttons').classList.add('fade-in');
});

// Handle either "Thank you" or "So?" button press
document.getElementById('thankYouBtn').addEventListener('click', showNameSection);
document.getElementById('soBtn').addEventListener('click', showNameSection);

function showNameSection() {
  // Hide compliment gif, text, and response buttons
  document.getElementById('complimentGif').classList.add('hidden');
  document.getElementById('complimentText').classList.add('hidden');
  document.getElementById('response-buttons').classList.add('hidden');

  // Show name input section with new gif
  document.getElementById('name-section').classList.remove('hidden');
  document.getElementById('name-section').classList.add('fade-in');
}

// Handle name submission
document.getElementById('submitNameBtn').addEventListener('click', function() {
  const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
  const nicknameHint = document.getElementById('nicknameHint');

  // If the name is "fineapple", show date section
  if (nameInput === 'fineapple') {
    document.getElementById('name-section').classList.add('hidden');
    document.getElementById('date-section').classList.remove('hidden');
    document.getElementById('date-section').classList.add('fade-in');
  } else {
    // Show nickname hint if the name isn't fineapple
    nicknameHint.classList.remove('hidden');
    nicknameHint.classList.add('fade-in');
  }
});

// Handle the "No" button press to move it
document.getElementById('noBtn').addEventListener('click', function() {
  const noBtn = document.getElementById('noBtn');
  
  // Randomize new position for "No" button within a short range
  const randomTop = Math.random() * 20 + 10; // Keep it within 10-30% top
  const randomLeft = Math.random() * 40 + 10; // Keep it within 10-50% left
  
  noBtn.style.position = 'absolute';
  noBtn.style.bottom = `${randomTop}vh`;
  noBtn.style.right = `${randomLeft}vw`;
});

// Handle the "Yes" button press
document.getElementById('yesBtn').addEventListener('click', function() {
  // Hide the date-section and show the date selection section
  document.getElementById('date-section').classList.add('hidden');
  document.getElementById('dateSelection-section').classList.remove('hidden');
  document.getElementById('dateSelection-section').classList.add('fade-in');
});

// Handle date validation and display of "Let's go" button
document.getElementById('dateInput').addEventListener('change', function() {
  const selectedDate = new Date(document.getElementById('dateInput').value);
  const targetDate = new Date('2024-10-05');
  const dateHint = document.getElementById('dateHint');
  const letsGoBtn = document.getElementById('letsGoBtn');

  // Compare selected date with the target date (5th October 2024)
  if (selectedDate.getTime() === targetDate.getTime()) {
    dateHint.classList.add('hidden'); // Hide hint
    letsGoBtn.classList.remove('hidden'); // Show "Let's go" button
    letsGoBtn.classList.add('fade-in');
  } else {
    dateHint.classList.remove('hidden'); // Show hint
    dateHint.classList.add('fade-in');
    letsGoBtn.classList.add('hidden'); // Hide "Let's go" button
  }
});

// Handle "Let's go" button press
document.getElementById('letsGoBtn').addEventListener('click', function() {
  // Hide the date selection section and show the activity section
  document.getElementById('dateSelection-section').classList.add('hidden');
  document.getElementById('activity-section').classList.remove('hidden');
  document.getElementById('activity-section').classList.add('fade-in');
});

// Ensure last question section is hidden until activities are submitted
document.getElementById('submitActivitiesBtn').addEventListener('click', function() {
    // Hide activity section
    document.getElementById('activity-section').classList.add('hidden');
    
    // Show last question section
    document.getElementById('last-question-section').classList.remove('hidden');
    document.getElementById('last-question-section').classList.add('fade-in');
    
    // Log for debugging
    console.log("Last question section is now visible.");
});

// Handle the "Yes" button press
document.getElementById('loveYouBtn').addEventListener('click', function() {
    // Hide the current question section
    document.getElementById('last-question-section').classList.add('hidden');
    
    // Show the final love response
    document.getElementById('final-love-response').classList.remove('hidden');
    document.getElementById('final-love-response').classList.add('fade-in');
});

// Handle the "No" button press with a playful reaction
document.getElementById('dontLoveBtn').addEventListener('click', function() {
    // Hide the current question section
    document.getElementById('last-question-section').classList.add('hidden');
    
    // Show playful regret section
    document.getElementById('regret-section').classList.remove('hidden');
    document.getElementById('regret-section').classList.add('fade-in');

    // Optional: Add a playful shake effect
    document.querySelector('body').classList.add('shake');
    
    // Remove the shake effect after a short duration
    setTimeout(() => {
        document.querySelector('body').classList.remove('shake');
    }, 500);
});

// Handle the "I'm Sorry!" button press
document.getElementById('retryBtn').addEventListener('click', function() {
    // Hide the regret section
    document.getElementById('regret-section').classList.add('hidden');
    
    // Optionally bring them back to the last question section or restart the flow
    document.getElementById('last-question-section').classList.remove('hidden');
});
