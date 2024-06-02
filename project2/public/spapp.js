// Function to load content dynamically
function loadContent(url) {
    $('#main-content').fadeOut('fast', function() {
        $('#main-content').load(url , function() {
            $('#main-content').fadeIn('fast');
        });
    });
}


// Function to navigate to different sections
function navigateTo(section) {
    var url = `${section}.html`; 
    loadContent(url); // Load content for the selected section
}



// Event listener for navigation links
$(document).ready(function() {
    // Initial page load
    navigateTo('slideshow'); // Load default content (slideshow.html)

   
});
