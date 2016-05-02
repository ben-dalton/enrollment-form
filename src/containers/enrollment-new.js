import React, { Component, PropTypes } from 'react';
import { reduxForm, addArrayValue } from 'redux-form';
import Address from './address';
import PureInput from '../components/pure-input';
import validate from './validate-enrollment-form';

export const fields = [
	'name',
	'shipping.street',
	'shipping.city',
	'shipping.phones[]',
	'billing.street',
	'billing.city',
	'billing.phones[]',
	'farm[].name',
	'farm[].street',
	'farm[].city'
];

class EnrollmentForm extends Component {
	render() {
		const {
			addValue,
			fields: { name, shipping, billing, children },
			handleSubmit,
			resetForm,
			invalid,
			submitting
		} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name</label>
					<div>
						<PureInput type="text" placeholder="Name" field={name} title={name.error} />
					</div>
				</div>
				<div>
					<fieldset>
						<legend>Shipping</legend>
						<Address {...shipping}/>
					</fieldset>
				</div>
				<div>
					<fieldset>
						<legend>Billing</legend>
						<Address {...billing} />
					</fieldset>
				</div>
			</form>
		)
	}
}

EnrollmentForm.propTypes = {
	addValue: PropTypes.func.isRequired,
	fields: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	resetForm: PropTypes.func.isRequired,
	invalid: PropTypes.bool.isRequired,
	submitting: PropTypes.bool.isRequired
}

export default reduxForm({
	addValue: PropTypes.func.isRequired,
	form: 'enroll',
	fields,
	validate
}, undefined, {
	addValue: addArrayValue // mapDispatchToProps (will bind action creator to dispatch)
})(EnrollmentForm);
