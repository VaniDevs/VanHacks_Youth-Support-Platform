var nodemailer = require('nodemailer');
 
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: 'weekendfuelbag2018@gmail.com',
      pass: ''
  }
});
 
exports.send = function(userInfo) {
     switch (userInfo.type) {
          // Organizations
          case 1:
               mailOptions = {
                    from: 'weekendfuelbag2018@gmail.com', // login user must equel to this user
                    to: userInfo.mails, 
                    subject: 'Hello World',
                    html: '<p>Hi ' + userInfo.name + ', </p><p>There are 3 new candidates applying for your program ' + userInfo.programName + ' today! See their application information here ' + userInfo.url + '.</p><p>Weekend Fuelbag</p>'
               };
               break;
          case 2:
               mailOptions = {
                    from: 'weekendfuelbag2018@gmail.com', // login user must equel to this user
                    to: userInfo.mails, 
                    subject: 'Hello World',
                    html: '<p>Dear ' + userInfo.name + ',</p><p>We have some new resources for you near your location.</p>' + 
                    '<p>1. Boy Scouts Of Canada Fraser Valley Council</p><p>Programs for youth in municipalities and' +
                    ' areas in the territory covered by the council. Programs include group and individual activities' +
                    ' that emphasize experiential learning with emphasis on the outdoors. Training programs for adult' + 
                    ' members to teach new skills and enhance existing skills.</p><p>2. Canada Ice Dance Theatre' + 
                    ' Association</p><p>Share School for youth, kids and adults. Performance program-general audie' + 
                    ' nce shows, community skating events storytelling on ice for Schools</p><p>Weekend Fuelbag</p>'
               };
               break;
          case 3:
               mailOptions = {
                    from: 'weekendfuelbag2018@gmail.com', // login user must equel to this user
                    to: userInfo.mails, 
                    subject: 'Hello World',
                    html: '<p>Hi ' + userInfo.name + '</p><p>We need you! There 2 open positions for volunteer in Weekend' + 
                    ' Fuelbags. Apply through this link ' + userInfo.url + ' </p><p>Weekend Fuelbag</p>'};
               break;
     };

  // mailOptions = mailOptions ? mailOptions : {
  //     from: 'weekendfuelbag2018@gmail.com', // login user must equel to this user
  //     to: 'lijixing3377@gmail.com', 
  //     subject: 'Hello World',
  //     text: 'Some simple words.', 
  //     html: '<b>The main content of the mail. You have successfully logged in to Nodejs.</b>' 
  // };
 
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
}








