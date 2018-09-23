var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'weekendfuelbag2018@gmail.com',
        pass: 'Vanhacks'
    }
});

module.exports.sendEmail = (users, title, content) => {
    for (let userInfo in users) {
        mailOptions = {
            from: 'weekendfuelbag2018@gmail.com', // login user must equel to this user
            to: userInfo.mails,
            subject: title,
            html: '<p>Hi ' + userInfo.name + ', </p><p>' + content + '</p><p>Weekend Fuelbag</p>'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }
};

module.exports.sendTeenNotification = (users, content) => {
    for (let userInfo in users) {
        mailOptions = {
            from: 'weekendfuelbag2018@gmail.com', // login user must equel to this user
            to: userInfo.mails,
            subject: 'Notification: New resources are available!',
            html: '<p>Dear ' + userInfo.name + ',</p><p>We have some new resources for you near your location.</p>' +
            '<p>' + content + '</p><p>Weekend Fuelbag</p>'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }};

module.exports.sendOrganizationNotification = (users) => {
    for (let userInfo in users) {
        mailOptions = {
            from: 'weekendfuelbag2018@gmail.com', // login user must equel to this user
            to: userInfo.mails,
            subject: 'Notification: New children join!',
            html: '<p>Hi ' + userInfo.name + ', </p><p>There are 3 new candidates applying for your program ' +
            userInfo.programName + ' today! See their application information here ' + userInfo.url +
            '.</p><p>Weekend Fuelbag</p>'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }
};