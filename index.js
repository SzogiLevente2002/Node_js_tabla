const express = require('express')
const app = express()
var [a, b] = [0, 0]
const tosend = (a, b) => `
    <h1>Eredményjelző</h1>
    <table>
    <tr><th>${ a }</th><th> - </th><th>${ b }</th></tr>
    <tr><td> <a href="/inca">+</a></td><td> - </td><td><a href="/incb">+</a></td></tr>
    <tr><td> <a href="/deca">-</a></td><td> - </td><td><a href="/decb">-</a></tr>
    </table>
    <style>
    h1 {
        text-align:center;
        font-size: 70px;
    }
    td, th {
        text-align: center;
        width: 200px;
        font-size: 30px;
    }
    th {
        font-size: 50px;
    }
    table {
        margin: 0 auto;
    }
    a {
        all: unset;
        display:inline-block;
        cursor:pointer;
        border: solid 2px black;
        padding: 10px;
        margin: 20px;
        border-radius:10px;
        box-shadow: 5px 5px black;
        width: 70px;
        height:40px;
    }
    a:hover {
        background-color: lightblue;
    }
    </style>
    `
app.get('/', (req, res) => {
    res.send(tosend(a, b))
})

app.get('/inca', (req, res) => {
    a++
    res.send(tosend(a, b))
})

app.get('/incb', (req, res) => {
    b++
    res.send(tosend(a, b))
})

app.get('/deca', (req, res) => {
    a--
    res.send(tosend(a, b))
})

app.get('/decb', (req, res) => {
    b--
    res.send(tosend(a, b))
})

app.listen(3027)