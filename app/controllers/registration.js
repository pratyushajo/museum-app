import Ember from 'ember';

var RegistrationController = Ember.ArrayController.extend({
	gender: ["Male","Female"],
	selectedGender: "Gender",
	newsletter: true,
	needs: ['application'],
	loggedout: Ember.computed.alias('controllers.application.is_loggedout'),
	emailVal: true, zipVal: true, genderVal: true, dayVal: true,
	birthdayVal: true,
	birthdayClicked: false,
	emailValidate: function () {
		var email = this.get('email');
		if(email) {
			if(email.match("/\\S+@\\S+\\.\\S+/")) {
				this.set('emailVal', true);
				return true;
			} else {
				this.set('emailVal', false);
				return false;
			}
		} else {
			return true;
		}
		
	},
	zipValidate: function () {
		var zip = this.get('zip');
		if(zip){
			if(zip.match("^\\d{5}$")){
				this.set('zipVal', true);
				return true;
			} else {
				this.set('zipVal', false);
				return false;
			}
		} else {
			this.set('zipVal', false);
			return false;
		}
		
	},
	genderValidate: function () {
		var gender = this.get('selectedGender');
		if( gender ) {
			this.set('genderVal', true);
			return true;
		} else {
			this.set('genderVal', false);
			return false;
			
		}
	},
	dayValidate: function () {
		var day = this.get('day');
		if( day ) {
			this.set('dayVal', true);
			return true;
		} else {
			this.set('dayVal', false);
			return false;
			
		}
	},
	// monthValidate: function () {
	// 	var month = this.get('month');
	// 	if( month ) {
	// 		this.set('monthVal', true);
	// 		return true;
	// 	} else {
	// 		this.set('monthVal', false);
	// 		return false;
			
	// 	}
	// },
	// yearValidate: function () {
	// 	var year = this.get('year');
	// 	if( year ) {
	// 		this.set('yearVal', true);
	// 		return true;
	// 	} else {
	// 		this.set('yearVal', false);
	// 		return false;
			
	// 	}
	// },


	actions:{
		save: function () {
			var email = this.get('email'),
				zip = this.get('zip'),
				day = this.get('day'),
				// month = this.get('month'),
				// year = this.get('year'),
				gender = this.get('selectedGender'),
				newsletter = this.get('newsletter');
			
			this.emailValidate();
			// if((this.dayValidate()) && (this.monthValidate()) && (this.yearValidate())) {
			if((this.dayValidate())) {
				this.set('birthdayVal', true);
			} else {
				this.set('birthdayVal', false);
			}
			// this.monthValidate();
			// this.yearValidate();
			this.genderValidate();

			console.log(this.get('genderVal'));

			// if ( this.zipValidate() && this.genderValidate() && this.dayValidate() && this.monthValidate() && this.yearValidate() ) {
			if ( this.zipValidate() && this.genderValidate() && this.dayValidate()) {
				this.set('isNotValid' , false);
				this.set('loggedout', false);
				console.log(this.get('selectedGender') + newsletter);
				var visitor = this.store.createRecord('registration', {
					zip: zip,
					email: email,
					dob: day,
					gender: gender,
					newsletter: newsletter
				});
				var controller = this;
				visitor.save().then(
					function() {
						console.log("saved!!");
						controller.get('model.registration');
						controller.set('email', '');
						controller.set('zip', '');
						controller.set('day', '');
						// controller.set('month', '');
						// controller.set('year', '');
						controller.set('gender', '');
						controller.set('newsletter', '');						
					}
				);
			} else {
				this.set('loggedout', true);
			}
		},
		logout: function () {
			this.set('loggedout', true);
			this.set('gender', ["Male","Female"]);
			this.set('selectedGender','Gender');
			this.set('newsletter', true);
			this.set('emailVal', true);
			this.set('zipVal', true);
			this.set('genderVal', true);
			this.set('dayVal', true);
			// this.set('monthVal', true);
			// this.set('yearVal', true);
			this.set('genderVal', true);
			this.set('birthdayVal', true);
			this.set('birthdayClicked', false);
		},
		birthdayClickedAction: function () {
			this.set('birthdayClicked', true);
			console.log('test');
		}

	}
});


export default RegistrationController;