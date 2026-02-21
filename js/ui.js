// ui.js

// UI management functions for handling user interface interactions, modals, tabs, and dynamic content

// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to switch tabs
function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach((tab) => {
        tab.style.display = 'none';
    });
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}

// Function to dynamically load content
function loadContent(url, targetElementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetElementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Export functions
export { openModal, closeModal, switchTab, loadContent };