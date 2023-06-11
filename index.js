require("dotenv").config("./.env")
const express = require('express')
const neo = require('neo4j-driver')

const app = express()
const port = 3000
const uri = process.env.NEO_URL

app.listen(port, () =>{
    console.log(`app running on ${port}`)
})

async function connectNeo(){

}