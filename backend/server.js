// const express = require('express')
import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Why did the scarecrow win an award?',
            content: 'Because he was outstanding in his field!'
        },
        {
            id: 2,
            title: 'Why don’t scientists trust atoms?',
            content: 'Because they make up everything!'
        },
        {
            id: 3,
            title: 'Why did the bicycle fall over?',
            content: 'It was two-tired!'
        },
        {
            id: 4,
            title: 'What do you call fake spaghetti?',
            content: 'An impasta!'
        },
        {
            id: 5,
            title: 'How does the ocean say hi?',
            content: 'It waves!'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port
        : ${port}`);
});