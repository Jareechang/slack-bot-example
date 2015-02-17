var Slack = require('slack-client');

var token = process.env.SLACK_TOKEN;
var autoReconnect = true;
var autoMark = true;

var slack = new Slack(token,autoReconnect,autoMark);

slack.login();
console.log(slack.users)

slack.on('message', function(){
  var channel = slack.getChannelGroupOrDMById(message.channel);
  var user = slack.getUserByID(message.user);
  var text= message.text;

})