const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Import CORS middleware

const app = express();

app.use(express.json());

app.use(cors());

// Replace with your actual database credentials
const MYSQL_HOST = "feenix-mariadb.swin.edu.au";
const MYSQL_USER = "s104212294";
const MYSQL_PASSWORD = "271104";
const MYSQL_DATABASE = "s104212294_db";

const connection = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
});

app.post('/update-nft-availability', async (req, res) => {
    try {
        const { id } = req.body; // Extract NFT ID from request body
        await connection.execute('UPDATE assets SET availability = 0 WHERE id = ?', [id]);
        res.json({ success: true });

        console.log(req.body)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update database.' });
    }
});

app.listen(3002, () => {
    console.log('Server listening on port 3002');
});