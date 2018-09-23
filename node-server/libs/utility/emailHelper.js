var nodemailer = require('nodemailer');
var mail = require("./mailer");

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'weekendfuelbag2018@gmail.com',
        pass: 'Vanhacks'
    }
});

var userInfo = {
    type: 3,
    mails: 'lijixing3377@gmail.com',
    name: 'Leo',
    programName: 'Hello',
    url: 'www.google.com'
}

module.exports.sendEmail = (users, title, content) => {
  // TODO implement here: 向emailList中的所有人发送标题为title内容为content的邮件
};

module.exports.sendTeenNotification = (users/*TODO Add other parameter here*/) => {
  // TODO 发送通知（需要帮助的）小孩，他们关注的类别中有新活动的邮件
};

module.exports.sendOrganizationNotification = (users/*TODO Add other parameter here*/) => {
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