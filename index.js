let jsonData = {};
let name;
let temp;
let nextPage;
let legitData;

async function fetchData() {
  try {
    //id and username
    let response = await fetch('https://graph.instagram.com/7091364407614663?fields=id,username&access_token=IGQWRQVGlxdHhGeVVWbk8yRllOdV8yWnBkcENFT0F1SzhPSFFIUmVFbzJWNlRlX3ZAsV1BDWHVkeUttU29jNnlUU0lUR01BYWY0OXg0TXdXWWUwY1YtaUFQNTA2OFpIVjNvMVpYbDcySGdvTU1pY2VDdk1uanU1aHMZD');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    temp = await response.json();
    console.log(temp);
    //save name
    name = temp.username;
    console.log(name);

  } catch (error) {
    console.error(error);
  }
  //media
  //grab all the ids might need to loop
  try {
    //rest of the data
    let response = await fetch('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp,permalink&access_token=IGQWRQVGlxdHhGeVVWbk8yRllOdV8yWnBkcENFT0F1SzhPSFFIUmVFbzJWNlRlX3ZAsV1BDWHVkeUttU29jNnlUU0lUR01BYWY0OXg0TXdXWWUwY1YtaUFQNTA2OFpIVjNvMVpYbDcySGdvTU1pY2VDdk1uanU1aHMZD');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    temp = await response.json();
    //console.log(temp);

    legitData = temp.data;
    console.log(legitData);
    //now loop until next is finished
    while(temp.paging.next !== undefined){
        nextPage = temp.paging.next;
        response = await fetch(nextPage);
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        temp = await response.json();
        //console.log(temp);


        legitData = legitData.concat(temp.data);
        console.log(legitData);
    }

  } catch (error) {
    console.error(error);
  }
}

// Call the function to initiate the fetch operation
fetchData();