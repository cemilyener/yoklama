import express from 'express';
const app =express()

app.get('/', (req,res)=>{
    res.status(200).json({
        msg:'Hayatta'
    })
})
app.listen('3000',()=>{
    console.log('port 3000 den dinleniyor' )
})

