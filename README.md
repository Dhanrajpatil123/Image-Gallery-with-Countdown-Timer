React Photo Gallery

Overview

This is a simple React Photo Gallery Application that allows users to filter, sort, and search images by category, likes, and name. The app is built using React.js and styled with Bootstrap.

Features

✅ Filter images by category (Nature, Art, Technology, etc.)

✅ Sort images by name and likes (ascending & descending order)

✅ Search images by name or category

✅ Responsive UI using Bootstrap

Tech Stack

React.js - Frontend framework

Bootstrap - Styling framework

Installation

Clone the repository:

git clone https://github.com/your-username/photo-gallery-app.git
cd photo-gallery-app

Install dependencies:

npm install

Start the development server:

npm start

Usage

📌 Filtering

Click on the Filter By Category dropdown to filter images based on categories like Nature, Art, and Technology.

📌 Sorting

Use the Sort By dropdown to sort images:

By Likes (High to Low / Low to High)

By Name (A-Z / Z-A)

📌 Searching

Enter a keyword in the search bar to find images based on:

Name

Category

Project Structure

src/
├── assets/Images/       # Image assets
├── components/
│   ├── ImageGallery.js  # Main gallery component
│   ├── ImageGallery.css # Styling for the gallery
├── App.js               # Root component
├── index.js             # React entry point
└── README.md            # Project documentation

Dependencies

{
  "react": "^18.0.0",
  "bootstrap": "^5.3.0"
}

Contributing

If you'd like to contribute:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -m 'Add new feature').

Push to your branch (git push origin feature-name).

Open a Pull Request.

License

This project is open-source and available under the MIT License.