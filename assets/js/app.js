// Variables
const tweetList = document.getElementById('tweet-list');

// Event Listeners
eventListener();

function eventListener(){
    //Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    //Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);


}

// Functions

function newTweet(e){
    e.preventDefault();

   // Read the Text Area Value
   const tweet = document.getElementById('tweet').value;

   //Create the remove button
   const removeBtn = document.createElement('a');
   removeBtn.classList = 'remove-tweet';
   removeBtn.textContent = 'X';
    
   // Create an <li> element
   const li = document.createElement('li')
   li.textContent = tweet;
   tweetList.appendChild(li);

   //Add remove button to each tweet
   li.appendChild(removeBtn);

   //Add to the list
   tweetList.appendChild(li);

//Add to local storage
   addTweetLocalStorage(tweet);

}

//Removes Tweets from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
      e.target.parentElement.remove();
    }
}


//Adds the tweets into the local storage
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();

    //Add the tweet into the array
    tweets.push(tweet);

    //Convert tweet array into String

    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // Get the values, if null is return then create an empty array
    if(tweetsLS === null){
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

//Prints local storage tweets on load

function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();

    //Loop through storage and then print the values

    tweets.forEach(function(tweet){
        //Create the remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';
            
        // Create an <li> element
        const li = document.createElement('li')
        li.textContent = tweet;
        tweetList.appendChild(li);

        //Add remove button to each tweet
        li.appendChild(removeBtn);

        //Add to the list
        tweetList.appendChild(li);
    })
}