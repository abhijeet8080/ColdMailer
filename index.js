const dotenv = require("dotenv");

// Load environment variables first
dotenv.config({ path: "./config.env" });

const { start } = require('./app');

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    console.error("Shutting down the server due to Uncaught Exception");
    process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", err => {
    console.error(`Unhandled Rejection: ${err.message}`);
    console.error("Shutting down the server due to unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});

start();
