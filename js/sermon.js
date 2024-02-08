// // Retrieve sermon details from URL parameters
// const urlParams = new URLSearchParams(window.location.search);
// const sermonTitle = urlParams.get('title');

// // Example sermon details (replace with actual data)
// const sermonDetails = {
//     "The Power of Prayer": {
//         topic: "Prayer",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit id nisi condimentum varius. Proin id vehicula ipsum. Ut lacinia est et elit semper, at fringilla libero tincidunt. Integer varius sem non justo interdum, ac placerat mi facilisis."
//     },
//     "Finding Hope": {
//         topic: "Hope",
//         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit id nisi condimentum varius. Proin id vehicula ipsum. Ut lacinia est et elit semper, at fringilla libero tincidunt. Integer varius sem non justo interdum, ac placerat mi facilisis."
//     }
// };

// // Update detail page based on sermon details
// document.getElementById('sermonTitle').innerText = sermonTitle;
// document.getElementById('sermonTopic').innerText = `Topic: ${sermonDetails[sermonTitle].topic}`;
// document.getElementById('sermonText').innerText = sermonDetails[sermonTitle].text;

// Function to fetch item details based on ID
// This is a placeholder function. You'll replace it with your actual data fetching logic
function fetchItemDetails(id) {
    // Example items data
    const items = {
        '1': { name: 'Shoe', description: 'A nice pair of shoes.' },
        '2': { name: 'Shirt', description: 'A lovely shirt.' }
    };
    return items[id];
}

// Function to display item details
function displayItemDetails(item) {
    document.getElementById('itemName').textContent = item.name;
    document.getElementById('itemDescription').textContent = item.description;
}

// Extracting item ID from URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

// Fetch and display item details
const itemDetails = fetchItemDetails(itemId);
displayItemDetails(itemDetails);