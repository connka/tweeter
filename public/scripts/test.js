$("document").ready(() => {
    const tweetData = {
        user: {
        name: "Newton",
        avatars: {
        small: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        regular: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        large: "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    handle: "@SirIsaac"
    },
    content: {
        text:
        "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
};

var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $("#tweets-container").append($tweet);

  function createTweetElement(tweetData) {
    let $tweet = $("<tweet>").addClass("tweet");
    let header = $("<header>");
    let avatar = $("<img>", {
      src: tweetData["user"]["avatars"]["small"]
    }).addClass("avatar");
    let name = $("<div>")
      .addClass("name")
      .text(tweetData["user"]["name"]);
    let handle = $("<div>")
      .addClass("handle")
      .text(tweetData["user"]["handle"]);
    let content = $("<div>").addClass("content");
    let message = $("<div>")
      .addClass("message")
      .text(tweetData["content"]["text"]);
    let footer = $("<footer>");
    let postAgo = $("<div>")
      .addClass("post-ago")
      .prepend(tweetData["created_at"]);
    let flag = $("<img>", { src: "../images/flag.png" }).addClass("flag");
    let retweet = $("<img>", { src: "../images/retweet.png" }).addClass(
      "retweet"
    );
    let like = $("<img>", { src: "../images/like.png" }).addClass("like");

    return $tweet;
  }
  console.log(createTweetElement(tweetData));
});