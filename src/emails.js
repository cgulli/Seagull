var Email = require('email').Email;

var getEmail = function (body) {
  return new Email(
    { from: "caitlin.gulliford@gmail.com",
    to: "caitlin.gulliford@gmail.com",
    subject: "URGENT ROOM REQUEST",
    body: body
    }
  );
};

module.exports = getEmail;
