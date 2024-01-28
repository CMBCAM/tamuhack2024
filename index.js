let jsonData = {};
let name;
let temp;
let nextPage;
let legitData;
let yuckyPosts = [[]];

function searchData(){
    console.log(name);
    //essentially go through each caption and look for keywords
    //legitdata[i]id, media_type, media_url, permalink, timestamp

    //Search through different types of data
    /*
    1. Phone numbers / email addresses general contact info ***
    2. Birthday,  elementary / secondary school graduation years ***
    3. interests/hobbies, **
    4. family connections, occupation/title, etc **
    5. vehicle **
    6. home / address ***
    7. vital government accounts etc ****
    8. pets *
    9. security question information
    10.     What is your mother's maiden name?
            What is the name of your first pet?
            In what city were you born?
            What is your favorite color?
            What is the name of your high school?
            What is your favorite movie or book?
            What is your favorite sports team?
            What is the model of your first car?
            What is your favorite food?
            What is the last name of your best childhood friend?
    11. Recent activity / predictable schedule
     recency in general
    */
    
     //Size of array
    let size = legitData.length ;
    //Loop through elements
    let wordArray;
    let currentWord;
    for (let i = 0; i < size; i++){
        //check if a caption exists
        if(legitData[i].caption !==undefined){
            wordArray = legitData[i].caption.split(/\s+/);
            for (let j = 0; j < wordArray.length;j++){
                currentWord = wordArray[j]; //each word 
                console.log(currentWord + ' ' + i);
            }
        }
    }

    console.log(size);
}

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
    searchData(); //up there!
  } catch (error) {
    console.error(error);
  }
}
//initiate the fetch operation
fetchData();