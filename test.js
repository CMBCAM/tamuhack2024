
const clientId = '1062902878314084';
const redirectUri = 'https://CMBCAM.github.io/tamuhack2024/auth';
const scope = 'user_profile,user_media';
const responseType = 'AQCGoOP60ieew_Wb0fULlfpVdystdDti4EYTaU3yQywp0noPqIolkIIqP69z1eHK4xXKszAMfcajM_xRyd-OY6NNZvXySlOk-FZPTnvV0DQERuinWDf2FLKuEYlD46NM9yttLzyfiqbwEQZMTL4yBxt2HvQigBhLtsaNDKA0L4kyvl69_C9sLPyl8GRUNXgAPWrBx45hIjNFargV073AFY2xm0o7hUgpP8WR2qNc3m7l5Q';
const state = 'your_random_state_string';

https://api.instagram.com/oauth/authorize
  ?client_id=1062902878314084
  &redirect_uri=https://CMBCAM.github.io/tamuhack2024/auth
  &scope=user_profile,user_media
  &response_type=code

curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=1062902878314084 \
  -F client_secret=d46b8207f34144c4a17694191cc713c0 \
  -F grant_type=authorization_code \
  -F redirect_uri=https://CMBCAM.github.io/tamuhack2024/auth \
  -F code=AQBeEWJGCIMy2mmOJ5pf0pl4vg9fTJqqYbiXfa1GOxQZuuYWLnw5RScn3odPinLhwctPnWjuMHmCphUK5ARYJxcW86CvGi80Bviai_xIW4_zIsU0_2ihWYyz0bt43Cfs-w1kugRoNRvyIgiDQInoLWKT6YwuO3QrysgBDVe-gNFaRNquBsH-4G_7UoUebmmjiR9QNa4_jt2qzj--J-TVGyeLTQEeTPCi_f26oBlp-27TVw

AQCGoOP60ieew_Wb0fULlfpVdystdDti4EYTaU3yQywp0noPqIolkIIqP69z1eHK4xXKszAMfcajM_xRyd-OY6NNZvXySlOk-FZPTnvV0DQERuinWDf2FLKuEYlD46NM9yttLzyfiqbwEQZMTL4yBxt2HvQigBhLtsaNDKA0L4kyvl69_C9sLPyl8GRUNXgAPWrBx45hIjNFargV073AFY2xm0o7hUgpP8WR2qNc3m7l5Q

// Construct the authorization URL
const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&state=${state}`;

// Redirect the user to the authorization URL
window.location.href = authUrl;

{"access_token": "IGQWRQYW5CNGhFNUg4cG5iZAnJTN2JMZA2x2U0NCV0ZADVlB2clRJSFViZAnZAlcE1ZAUllFLVBmTlRkNHlSYkgtZA0pNTDlqdEUySjhVX0hOUGdFRmpHMG1SSEE2cVNWMGhuTVZAlbzJ6MGJRVkZAKaGxaZA3JFUUtDOUp6VUdBUXR3Y2NBTGpQUQZDZD", "user_id": 7091364407614663}