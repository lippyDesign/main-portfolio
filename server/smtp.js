import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email'
import { check } from 'meteor/check';

Meteor.startup(function () {
  process.env.MAIL_URL = '';
});

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    Email.send({
      to: 'volo_lipu@yahoo.com',
      from: from,
      subject: subject,
      text: text
    });
  }
});
