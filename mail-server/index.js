var mail = require("./mailer");

var userInfo = {
     type: 3,
     mails: 'lijixing3377@gmail.com',
     name: 'Leo',
     programName: 'Hello',
     url: 'www.google.com'
}
mail.send(userInfo);
