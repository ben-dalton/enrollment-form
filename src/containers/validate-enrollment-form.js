const requireFields = (...names) => data => 
 	names.reduce((errors, name) => {
		if (!data[name]) {
			errors[name] = 'Required';
		}
		return errors;
	}, {});

const validateAddress = requireFields('street', 'city');
const validateFarm = requireFields('name', 'street', 'city');
const validateEnrollmentForm = data => {
	const errors = {};
	if (!data.name) {
		errors.name = 'Required';
	}
	errors.shipping = validateAddress(data.shipping)
	errors.billing = validateAddress(data.billing)
	errors.farm = data.farm.map(validateFarm)
	return errors
}

export default validateEnrollmentForm;
