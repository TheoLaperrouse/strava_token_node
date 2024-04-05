const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const redirectUri = 'http://localhost:3000/exchange_token';

const scope = 'read_all';

app.get('/auth/strava', (req, res) => {
    const stravaAuthUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=${scope}`;
    res.redirect(stravaAuthUrl);
});

app.get('/exchange_token', async (req, res) => {
    const code = req.query.code;
    try {
        const response = await fetch('https://www.strava.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
                grant_type: 'authorization_code',
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const accessToken = data.access_token;
        res.send(`Access Token: ${accessToken}`);
    } catch (error) {
        console.error('Error exchanging token:', error);
        res.status(500).send('An error occurred.');
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
