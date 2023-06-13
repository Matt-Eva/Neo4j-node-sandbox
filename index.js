require("dotenv").config("./.env")
const express = require('express')
const neo = require('neo4j-driver')

const app = express()
const port = 3000
const uri = process.env.NEO_URL
const user = process.env.NEO_USER
const password = process.env.NEO_PASSWORD
let driver;

const server = app.listen(port, () =>{
    console.log(`app running on ${port}`)
})

server.on('listening', async () =>{
    console.log("server listening")
    await connectNeo()
    console.log("resources ready")
    runQuery()
})

async function runQuery(){
    try{
        const query = 'SHOW DATABASES'
        const result = await driver.executeQuery(query, {})
        // console.log(records.fields)
        // console.log(summary)
        console.log(result)
    } catch(err){
        console.error(err)
    }
}

async function connectNeo(){
    try{
        driver = neo.driver(uri, neo.auth.basic(user, password))
        await driver.verifyConnectivity()
        console.log("connection established")
    } catch(err){
        console.error(error)
        closeServer()
    }   
}

function closeServer(){
    server.close(() =>{
        console.log("server closing")
        process.exit(0)
    })
}