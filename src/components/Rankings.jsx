import React from 'react';
import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '../secrets';

async function getAccessToken() {
  const response = await axios.post('https://us.battle.net/oauth/token', {
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  return response.data.access_token;
}

async function getUserData(accessToken) {
  const response = await axios.get('https://us.api.blizzard.com/wow/user/characters', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}

async function handleLogin() {
  const accessToken = await getAccessToken();
  const userData = await getUserData(accessToken);

  // Use the user data in your application
}

function Rankings() {
    return (
      <div>
        <h2>Rankings</h2>
      </div>
    );
}

export default Rankings