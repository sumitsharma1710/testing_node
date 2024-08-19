const express = require('express');
const userCtrl = require('./routes/userRoute')

const app = express();
const port = 3000;

app.use('/user', userCtrl)

app.get('/', (req,res)=>{
    res.send("Hello World");

})
app.listen(port, ()=>{
    console.log(`Server started running on url http://localhost:${port}`);
})

module.exports = app;