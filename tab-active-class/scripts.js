function openTab(tabId) {
    // Get all tab buttons and tab content elements
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Hide all tab content elements
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Remove the 'active' class from all tab buttons
    tabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add the 'active' class to the clicked tab button
    const activeTabButton = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    activeTabButton.classList.add('active');
}