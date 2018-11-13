"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweeter").insertOne(newTweet, (err, writeResult) => {
        if (err) {
          return callback(err);
        }
        callback(null, newTweet);
      });
  },

    // Get all tweets in `db`, sorted by newest first
    getTweets : function(callback) {
      db.collection("tweeter").find().toArray((err, tweets) => {
        // console.log("There are the tweets: ", tweets);
        // console.log("This is the error: ", err);
        if (err) {
          return callback(err);
        } 
          const sortNewestFirst = (a, b) => b.created_at - a.created_at;
          callback(null, tweets.sort(sortNewestFirst));
        });
  }
}
}