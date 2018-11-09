/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$("document").ready(() => {

    const data = [
        {
        "user": {
            "name": "Newton",
            "avatars": {
                "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    },
    {
        "user": {
            "name": "Descartes",
            "avatars": {
                "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" 
        },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    },
    {
        "user": {
            "name": "Johann von Goethe",
            "avatars": {
            "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
            "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
            "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
            "handle": "@johann49"
        },
        "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
        },
        "created_at": 1461113796368
    }
];

    function renderTweets(tweets){
        tweets.forEach((tweetData) => {
            $('#tweets-container').append(createTweetElement(tweetData));
        })
    }
    
    function createTweetElement(tweetData) {
        let tweetsContainer = `<article class="tweet">
        <header class="tweet-header">
        <img class="avatar" src="${tweetData.user.avatars.small}">
        <header class="name" name="name">${tweetData.user.name}</header>
        <header class="handle" name="handle">${tweetData.user.handle}s</header>
        </header>
        <div class="content" name="content">${tweetData.content.text}</div>
        <footer class="footer">
        <time class="datestamp">${tweetData.created_at}</time>
        <span class="connect">
            <img class="retweet" src="/images/retweet.png">
            <img class="like" src="/images/like.png">
            <img class="flag" src="/images/flag.png">
        </span>
        </footer>
        </article>`
        console.log("Tweets Container:",tweetsContainer);
        return tweetsContainer;
    }

    renderTweets(data);
    
});
