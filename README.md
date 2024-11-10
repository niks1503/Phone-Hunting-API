# Phone Search App

This Phone Search App fetches and displays a list of phones from an external API based on user search input. Users can search for specific phones, view limited results initially, and expand to see all results. Each phone has a "Show Details" button for additional information in a popup window.

## Features
- **Phone Search**: Users can search for phones by name or keyword.
- **Display Limited Results**: Initially shows the top 6 search results with an option to view all.
- **Detailed View**: Each phone has a "Show Details" button to view more information in a popup.
- **Responsive**: Adjusts for different screen sizes.

## Technologies Used
- **HTML** and **CSS**: For structuring and styling the UI.
- **JavaScript**: For handling user interactions and data fetching.
- **API**: Data fetched from [Programming Hero API](https://openapi.programming-hero.com/api/phones).

## Setup and Usage

### Prerequisites
Ensure you have a modern web browser to run this project.

### Instructions
1. Clone or download this repository.
2. Open the `index.html` file in a browser to launch the app.

### Usage
1. Enter the phone name or keyword in the search bar.
2. Click the **Search** button or press **Enter** to search.
3. View the top 6 results initially.
4. Click **Show All** to display all results (if more than 6 are found).
5. Click **Show Details** on a phone to see more information in a popup window.
6. Close the popup by clicking the **Close** button.

## Code Overview
### Main Components
- **`searchPhones(query)`**: Fetches and displays the phone list based on the search query.
- **`displayPhones(phones)`**: Displays the list of phones in the main section of the page.
- **`showPhoneDetails(phone)`**: Opens a popup with details of a selected phone.
  
### Event Listeners
- **Search button and Enter key**: Triggers `searchPhones` based on user input.
- **Show Details**: Opens a popup with the phone's details.
- **Close Popup**: Closes the details popup.

## API Reference
The app uses the following endpoint from the Programming Hero API:
- **Search Phones**: `https://openapi.programming-hero.com/api/phones?search=<query>`

## License
This project is open-source and available under the MIT License.

---

This README covers the project’s purpose, setup, and usage instructions, along with an overview of the main code functionality.
