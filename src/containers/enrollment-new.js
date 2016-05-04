import React, { Component, PropTypes } from 'react';
import { reduxForm, addArrayValue } from 'redux-form';
import Address from './address';
import PureInput from '../components/pure-input';
import validate from './validate-enrollment-form';

export const fields = [
	'name',
	'physical.street1',
	'physical.street2',
	'physical.city',
	'physical.state',
	'physical.zip',
	'physical.phones[]',
	'mailing.street1',
	'mailing.street2',
	'mailing.city',
	'mailing.state',
	'mailing.zip',
	'mailing.phones[]',
	'farm[].name',
	'farm[].street',
	'farm[].city'
];

class EnrollmentForm extends Component {
	render() {
		const {
			addValue,
			fields: { name, physical, mailing, children },
			handleSubmit,
			resetForm,
			invalid,
			submitting
		} = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name</label>
					<div>
						<PureInput className="form-control" type="text" placeholder="Name" field={name} title={name.error} />
					</div>
				</div>
				<fieldset>
					<legend>Physical Address</legend>
					<Address {...physical}/>
				</fieldset>
				<hr />
				<fieldset>
					<legend>Mailing Address</legend>
					<Address {...mailing} />
				</fieldset>
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
