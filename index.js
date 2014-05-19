var express = require('express');
var app = express();

app.listen(process.env.PORT || 3001);

var bernoulli = require('bernoulli');

var getSignupCopy = function(callback) {
    bernoulli.getExperiments({
//        userId: 'user59',
        experimentIds: 'signup_copy'
    }, function(experiments) {
	console.log(experiments[0]);
        switch (experiments[0].variant) {
            case 'free':
                callback('Sign up for free');
                break;
            case 'trial':
            default:
                callback('Start your trial');
                break;
        }
    }, function (message) {
	callback(message);
	});
};

app.get('/', function(request, response) {
	getSignupCopy(function(str) {
		response.send(process.env.BERNOULLI_CLIENT_ID + '<a href="/goal">' + str + '</a>');
	});
});
