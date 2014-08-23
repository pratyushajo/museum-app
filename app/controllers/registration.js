import Ember from 'ember';

var RegistrationController = Ember.Controller.extend({
	isNotValid: false,
	actions:{
		save: function () {
			var email = this.get('email'),
				zip = this.get('zip'),
				day = this.get('day'),
				month = this.get('month'),
				year = this.get('year'),
				mailing_list = this.get('mailing_list');
				var visitor = this.store.createRecord('registration', {
					zip: zip,
					email: email,
					dob: day + '/' + month + '/' + year,
					mailing_list: mailing_list
				});
				var controller = this;
				visitor.save().then(
					function() {
						console.log("saved!!");
						controller.get('model.registration');
						controller.set('email', '');
						controller.set('zip', '');
						controller.set('day', '');
						controller.set('month', '');
						controller.set('year', '');
					}
				);
		}
	}
});

RegistrationController.reopen({
  validations: {
    email: {
      presence: true,
      length: { minimum: 5 }
    },
    zip: {
      numericality: true
    }
  }
});

export default RegistrationController;
