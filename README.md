Check out the live demo of the project:  
👉 **[Reddit Clone Live](https://reddit-c.netlify.app)**

Reddit Clone
A simplified Reddit clone built using React, implementing a sidebar, a dynamic "Popular Posts" section powered by Reddit's API, and basic pagination functionality. The project aims for a pixel-perfect UI, emulating the Reddit app experience.

Features
Dynamic Popular Posts

Fetch posts dynamically using Reddit's API.
Sorting options: hot, new, controversial, etc.
Pagination for seamless navigation across posts.
Static Sidebar

Favorites and Reddit Feeds sections with hardcoded subreddit links.
Community section featuring top subreddit links.
Sidebar scrolls independently of the main content.
Responsive Design

Optimized for a clean and modern UI with responsiveness.
Search (Optional Bonus)

Search functionality using Reddit’s search API.
Technologies Used
Frontend Framework: React
CSS Styling: Custom CSS for Reddit-like appearance
API: Reddit API (https://www.reddit.com/dev/api)
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js
npm or yarn
Installation

**Clone the repository:**

git clone https://github.com/SaiKumargithub1/reddit.git  
cd reddit

**Install dependencies:**

npm install

Start the development server:
npm start

**API Usage**

Reddit API Endpoints

Popular posts:

https://www.reddit.com/r/{subreddit}/{sort}/.json?limit={limit}

Search:

https://www.reddit.com/search.json?q={query}

**Parameters**

subreddit: Name of the subreddit (e.g., technology).
sort: Sorting option (hot, new, controversial).
limit: Number of posts to fetch.
