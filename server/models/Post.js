const mysql = require('mysql2/promise');

const config = {
    host: process.env.DB_SERVER,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
};

const Post = {
    getAllPosts: async () => {
        let connection; // Declare the connection variable
        try {
            connection = await mysql.createConnection(config); // Create a new connection
            const [posts] = await connection.execute('SELECT * FROM posts'); // Execute the query
            return posts; // Return the fetched posts
        } catch (err) {
            console.error('Database query failed:', err.message); // Log any errors
            throw err; // Rethrow the error for handling elsewhere
        } finally {
            if (connection) {
                await connection.end(); // Ensure the connection is closed
            }
        }
    }
};


module.exports = Post;