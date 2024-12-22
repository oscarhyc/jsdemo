const mysql = require('mysql2/promise'); // Ensure you're using the promise version
require('dotenv').config();

const config = {
    host: process.env.DB_SERVER,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
};

const connectDB = async () => {
    
    try {
       const connection = await mysql.createConnection(config);
      
        console.log('DB connected');
        return connection;
     
    
    } catch (err) {
        console.error('Database connection failed:', err.message);
        throw err; // Rethrow the error for handling
    } finally {
        if (connection) {
         
            await connection.end(); // Ensure the connection is closed
        }
    }
};

// Example usage
connectDB()
    .then(rows => {
        // Handle the rows if needed
    })
    .catch(err => {
        // Handle errors
    });

// Create a Post object with methods


// Export the Post object
module.exports = connectDB;