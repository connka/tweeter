/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Calls on Page Load
$("document").ready(() => {

function renderTweets(tweets){
    tweets.forEach((tweetData) => {
        $('#tweets-container').append(createTweetElement(tweetData));
    })
}

//Load Tweets
    function loadTweets(callback) {
    $.ajax({ 
        url: "/tweets",
        method: 'GET', 
        success: (tweets) => {
            callback(tweets);
            }
        })
    }
    loadTweets(renderTweets);
//    console.log(tweet);

//New Tweet Handler
$("form").on("submit", function(event) {
    event.preventDefault();

    if (!($("textarea").val())) {
        alert("Please enter a tweet!")
    } else if ((Number($(".counter").text())) < 0) {
        alert("Your text is too long! Please keep your post under 140 characters.")
    } else {

        $.ajax({
            url: "/tweets",
            method: "POST",
            data: $(this).serialize(),
            success: (tweetContainer) => {
                $("textarea").val("");
                $('#tweets-container').prepend(createTweetElement(tweet));
                console.log("Successfully printed tweet.");
            }
        });
    }
});

    // -> Compose Button to Toggle Tweet Input:
    $("button").on('click', () => {
        $(".new-tweet").slideToggle();
        $("textarea").focus();
    })

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
