import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
    connectTimeout: 10000
})
db.connect((err)=>{
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');

})
db.execute('CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))', (err, results) => {
    if (err){
        console.error('Error creating table:', err);
    }
    else{
        console.log('Table created or already exists');
    }
});

export default db