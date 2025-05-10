# URL Shortener Project

This project is a simple **URL Shortener** built using **Node.js**, **Express**, and **MongoDB**. It allows users to shorten long URLs and retrieve them using a unique short ID.

## 📂 Project Structure

```
📁 models
    ├── url.js          # Mongoose model for URL storage
📁 views
    ├── index.ejs       # Main page for entering URLs
    ├── analyze.ejs     # Page for analyzing shortened URLs
📁 routes
    ├── index.js        # Main route handler
    ├── analyze.js      # Route for analyzing URL data
📁 controllers
    ├── url.js          # Handles URL shortening and redirection logic
📁 config
    ├── db.js           # Database connection setup
📄 app.js               # Main entry point of the app
📄 .env                 # Environment variables (MongoDB, PORT)
📁 node_modules         # Dependencies installed via npm
📄 .gitignore           # Ignore unnecessary files (node_modules, .env)
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies
Run the following command to initialize the project and install required packages:
```sh
npm init -y
npm install express mongoose dotenv cors shortid
```

### 2️⃣ Create a **.env** file
Inside the root directory, create a `.env` file and add the following variables:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your actual MongoDB URI.

### 3️⃣ Start the Server
Run the following command to start the server:
```sh
node app.js
```
Or, if you have **nodemon** installed:
```sh
nodemon app.js
```

### 4️⃣ Open in Browser
Once the server is running, open your browser and go to:
```
http://localhost:5000
```

---

## 📌 Features
✅ Shorten long URLs with unique short IDs  
✅ Redirect short URLs to original links  
✅ Store and retrieve URLs using MongoDB  
✅ Analyze shortened URLs (usage stats, click tracking)  

---

## 🛠️ Technologies Used
- **Node.js** - Server-side runtime environment
- **Express.js** - Web framework for handling routes
- **MongoDB & Mongoose** - Database & ODM for URL storage
- **dotenv** - Manage environment variables
- **cors** - Handle Cross-Origin requests
- **shortid** - Generate short and unique URL IDs
- 
---

## Docker
- Use **Master** branch for dockerize code

---

### 📧 Contact
If you have any questions, feel free to reach out!

