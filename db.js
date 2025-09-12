import mysql from 'mysql2'

const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"hari1999",
    database:"test"
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