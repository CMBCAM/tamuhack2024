let jsonData;
let name;

async function fetchData() {
  try {
    //id and username
    const response = await fetch('https://graph.instagram.com/7091364407614663?fields=id,username&access_token=IGQWRQVGlxdHhGeVVWbk8yRllOdV8yWnBkcENFT0F1SzhPSFFIUmVFbzJWNlRlX3ZAsV1BDWHVkeUttU29jNnlUU0lUR01BYWY0OXg0TXdXWWUwY1YtaUFQNTA2OFpIVjNvMVpYbDcySGdvTU1pY2VDdk1uanU1aHMZD');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    jsonData = await response.json();
    console.log(jsonData);
    //save name
    name = jsonData.username;

  } catch (error) {
    console.error(error);
  }
  //media
  //captions might need to loop
  try {
    //captions
    const response = await fetch('https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQWRQVGlxdHhGeVVWbk8yRllOdV8yWnBkcENFT0F1SzhPSFFIUmVFbzJWNlRlX3ZAsV1BDWHVkeUttU29jNnlUU0lUR01BYWY0OXg0TXdXWWUwY1YtaUFQNTA2OFpIVjNvMVpYbDcySGdvTU1pY2VDdk1uanU1aHMZD');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    jsonData = await response.json();
    console.log(jsonData);

    
  } catch (error) {
    console.error(error);
  }
}

// Call the function to initiate the fetch operation
fetchData();