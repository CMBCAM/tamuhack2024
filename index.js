let jsonData = {};
let name;
let temp;
let nextPage;
let legitData;
let positive,culture,negative;
//emails / phones
let yucky = [];
let interests = [[]]

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
    legitData[4].caption += " 808-852-0200 ";
    for (let i = 0; i < size; i++){
        let emails;
        let phones;
        //check if a caption exists
        if(legitData[i].caption !==undefined){
            //this will be long
            let count = 0;
            for (let j = 0; j < culture.length; j++){ //culture only
                if (legitData[i].caption.toLowerCase().indexOf(culture[j].toLowerCase()) !== -1){
                    count++;
                    console.log(culture[j]);
                }
                //console.log(count + " cultures");
            }


            /*wordArray = legitData[i].caption.split(/\s+/);
            for (let j = 0; j < wordArray.length;j++){
                currentWord = wordArray[j]; //each word 
                console.log(currentWord + ' ' + i);
            }*/
            //email address
            emails = findEmailAddresses(legitData[i].caption);
            phones = findPhoneNumber(legitData[i].caption);
            //were there any emails
            if(emails.length !==0){
                yucky = yucky.concat(legitData[i]);
            }  
            else if(phones.length !== 0){
                yucky = yucky.concat(legitData[i]);
            }  
        }
    }

    console.log(yucky);
}

function parseWords(){

}

function findEmailAddresses(text) {
    // Regular expression to match email addresses
    let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    // Using the match method to find all matches in the text
    let matches = text.match(emailPattern);
    
    return matches || [];
}

function findPhoneNumber(text) {
    // Regular expression to match email addresses
    let phonePattern = /\b(?:\+?\d{1,4}[\s\-]?)?(?:\(\d{1,4}\)[\s\-]?)?\d{1,4}[\s\-]?\d{4}\b/g;
    // Using the match method to find all matches in the text
    let matches;
    matches = text.match(phonePattern);
    
    return matches || [];
}

async function fetchData() {
  try {
    //all the filters first
    fetch('filters/negative.txt')
        .then(response => response.text())
        .then(data => {
            negative = data.split('\r\n');
            console.log(negative);
        })
        .catch(error => console.error('Error loading the file:', error));
    fetch('filters/positive.txt')
        .then(response => response.text())
        .then(data => {
            positive = data.split('\r\n');
            console.log(positive);
        })
        .catch(error => console.error('Error loading the file:', error));
    fetch('filters/culture.txt')
        .then(response => response.text())
        .then(data => {
            culture = data.split('\r\n');
            console.log(culture);
        })
        .catch(error => console.error('Error loading the file:', error));
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