//ALL SECTIONS ARE COMMENTED PLEASE READ! 

//initial setup for API
//
console.log('The twitter API bot is running....') //this is to check that bot.js page is running correctly

var Twit = require('twit'); //this is to require twit on the page so we can work with it (the NPM package is installed in this directory enabling us to enable it here)

var config = require('./config'); //this requires the config page which consists of our api keys which are kept seperately for security
var T = new Twit(config); //this binds the api keys from config page to the twit configuration enabling connections to twitter API
//
//end of initial setup for API


//API post function
//
tweetIt(); //run the function once first and then after this the setInterval will take over (in this scenario every 20 seconds)
setInterval (tweetIt, 1000*20); //this allows you to post in set intervals (timing is in milliseconds multiplied so 1000*10 is 10 seconds)
function tweetIt(txt) {

    var txt = "I am the number " + Math.floor(Math.random() * 200) + " #codingtrain #cloudone";

    var tweet = {
        status: txt
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong... please try back later!");
        } else {
            console.log("Your tweet has been posted!");
        }
    }
}
//
//end of post function
