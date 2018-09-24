//ALL SECTIONS ARE COMMENTED PLEASE READ! 

//initial setup for API
//
console.log('The twitter API bot is running....') //this is to check that bot.js page is running correctly

var Twit = require('twit'); //this is to require twit on the page so we can work with it (the NPM package is installed in this directory enabling us to enable it here)

var config = require('./config'); //this requires the config page which consists of our api keys which are kept seperately for security
var T = new Twit(config); //this binds the api keys from config page to the twit configuration enabling connections to twitter API
//
//end of initial setup for API


//API get function - recall tweets with a set critera (rainbow, show 2 tweets)
//
function getTweet(){
    var params = {
        q: 'soundcloud',
        count: 2
    }

    T.get('search/tweets', params, gotData);

    function gotData(err, data, response) {
        var tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }
    };
}
getTweet();
//
//end of get function