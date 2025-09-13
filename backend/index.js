import express from 'express';
const port = process.env.PORT || 8080
const app = express()
app.use(express.json())
import db from './db.js'

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})


app.post('/insert',async(req,res)=>{
    const {name} = req.body
    await db.execute('INSERT INTO user(name) VALUES(?)',[name],(err,result)=>{
        if(err) return console.log('inserting error',err)
        res.json({msg:"data inserted", result})
    })
})

app.get('/getdata',async(req,res)=>{
    await db.execute('SELECT * FROM user',(err,result)=>{
        if(err) return console.log('fetching error',err)
        res.json({msg:"data fetched", result})
    })
}
)
app.delete('/delete/:id',async(req,res)=>{
    const {id} = req.params
    await db.execute('DELETE FROM user WHERE id=?',[id],(err,result)=>{
        if(err) return console.log('delete error',err)
        res.json({msg:"data deleted", result})
    })
})

app.put('/update/:id',async(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    await db.execute('UPDATE user SET name = ? WHERE id = ?',[name,id], (err,result)=>{
        if(err) return console.log("update error",err)
        res.json({message:"data successfully updated", result})
    })
})
app.get('/',(req,res)=>{
    res.send('hello world')
})