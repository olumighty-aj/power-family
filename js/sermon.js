// Retrieve sermon details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const sermonTitle = urlParams.get('title');

// Example sermon details (replace with actual data)
const sermonDetails = {
    "The Power of Prayer": {
        topic: "Prayer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit id nisi condimentum varius. Proin id vehicula ipsum. Ut lacinia est et elit semper, at fringilla libero tincidunt. Integer varius sem non justo interdum, ac placerat mi facilisis."
    },
    "Finding Hope": {
        topic: "Hope",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit id nisi condimentum varius. Proin id vehicula ipsum. Ut lacinia est et elit semper, at fringilla libero tincidunt. Integer varius sem non justo interdum, ac placerat mi facilisis."
    }
};

// Update detail page based on sermon details
document.getElementById('sermonTitle').innerText = sermonTitle;
document.getElementById('sermonTopic').innerText = `Topic: ${sermonDetails[sermonTitle].topic}`;
document.getElementById('sermonText').innerText = sermonDetails[sermonTitle].text;
