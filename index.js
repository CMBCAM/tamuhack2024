const url = 'https://api.instagram.com/oauth/access_token';
const clientId = '1062902878314084';
const clientSecret = 'd46b8207f34144c4a17694191cc713c0';
const redirectUri = 'https://CMBCAM.github.io/tamuhack2024/auth';
const authorizationCode = 'AQCGoOP60ieew_Wb0fULlfpVdystdDti4EYTaU3yQywp0noPqIolkIIqP69z1eHK4xXKszAMfcajM_xRyd-OY6NNZvXySlOk-FZPTnvV0DQERuinWDf2FLKuEYlD46NM9yttLzyfiqbwEQZMTL4yBxt2HvQigBhLtsaNDKA0L4kyvl69_C9sLPyl8GRUNXgAPWrBx45hIjNFargV073AFY2xm0o7hUgpP8WR2qNc3m7l5Q';

fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code: authorizationCode,
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));