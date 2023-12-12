// Function to show initial image and confirmation prompt
function showInitialImage() {
    const initialImageDiv = document.getElementById('initialImage');
    initialImageDiv.classList.remove('hidden');

    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Event listener for 'Yes' button click
    yesBtn.addEventListener('click', function() {
        initialImageDiv.classList.add('hidden');
        showContent(); // Show content if 'Yes' is clicked
    });

    // Event listener for 'No' button click
    noBtn.addEventListener('click', function() {
        // Redirect or handle based on your requirement if 'No' is clicked
    });
}

// Function to show content after confirmation
function showContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.classList.remove('hidden');
    // Display the original content here
}

// Call the function to show the initial image and confirmation prompt
showInitialImage();