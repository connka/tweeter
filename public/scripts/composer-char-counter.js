$("document").ready(() => {
  $("#newTweet").on("keyup", function() {
    const charAmount = this.value.length;
    const maxChar = 140;
    const countdown = maxChar - charAmount;
    $(this)
      .parent()
      .children("span")
      .html(maxChar - $(this).val().length);
    if (countdown < 0) {
      document.getElementById("counter").style.color = "#ff0000";
    } else {
      document.getElementById("counter").style.color = "#000000";
    }
  });
});
