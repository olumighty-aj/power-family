document.addEventListener("DOMContentLoaded", function () {
    showLoadingIndicator();
    // Fetch devotional content
    fetchDevotionalContent()
      .then(function (content) {
        hideLoadingIndicator();
        // Display devotional content
        displayDevotionalContent(content);
      })
      .catch(function (error) {
        console.error("Error fetching devotional content:", error);
        setTimeout(() =>{
            hideLoadingIndicator();
        }, 60000)
        displayDevotionalContent("No devotional content available for today.");
      });
  });
  
  function showLoadingIndicator() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.id = 'loader';
    document.body.appendChild(loader);
  }

  function hideLoadingIndicator() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.remove();
    }
  }

  function fetchDevotionalContent() {
    // Get today's date in the format 'YYYY-MM-DD' (strictly match JSON format)
    const today = new Date().toISOString().split("T")[0];
  
    return fetch("js/devotional.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch devotional content");
        }
        return response.json();
      })
      .then((data) => {
        // Check if content exists for today's date using strict equality (===)
        if (data.hasOwnProperty(today)) {
          // Return today's devotional content
          return data[today];
        } else {
          throw new Error("No devotional content found for today");
        }
      });
  }
  
  function displayDevotionalContent(content) {
    const devotionalContentElement = document.getElementById("devotional-content");
  
    // Check if content is a string or an object
    if (typeof content === 'string') {
      devotionalContentElement.textContent = content;
      devotionalContentElement.style.color = "green"; // Set text color to red for error messages
    devotionalContentElement.style.fontSize = "16px";
    devotionalContentElement.style.padding = "20px"; // Set font size
    } else {
      // Create a structured HTML content
      const htmlContent = `
        <h2><strong>Topic:</strong> ${content.title}</h2>
        <p><strong>Verse:</strong> ${content.verse}</p>
        <p>${content.content}</p>
        <p>${content.content2}</p>
        <p><strong>Prayerpoint:</strong> ${content.prayerPoint}</p>
        <h6>Do have a great day ahead!</h6>
        
      `;
  
      // Set the innerHTML of the devotional content element to the structured HTML content
      devotionalContentElement.innerHTML = htmlContent;

      devotionalContentElement.querySelector('h2').style.color = "#fff"; // Example: Set title color
      devotionalContentElement.querySelector('h2').style.fontSize = "27px";
      devotionalContentElement.querySelector('h6').style.textAlign = "center";
      devotionalContentElement.querySelector('h6').style.color = "white";
      devotionalContentElement.querySelector('h2').style.paddingLeft = "20px"; // Set font size for title
      devotionalContentElement.querySelectorAll('p').forEach(p => {
        p.style.color = "#fff";
        p.style.padding = "20px" // Set text color for paragraphs
        p.style.fontSize = "18px";
        p.style.fontFamily = "sans-serif" // Set font size for paragraphs
      });
    }
  }

  function displayDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDateTime); // Output to console
    // If you want to display this in the HTML document, you can do so like this:
    // document.body.innerHTML = `<p>Current Date and Time: ${formattedDateTime}</p>`;
    document.getElementById('date-time-display').innerText = `Date & Time: ${formattedDateTime}`;

    setInterval(displayDateTime, 1000);
  }
  
  displayDateTime();