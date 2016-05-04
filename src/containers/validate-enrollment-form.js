const requireFields = (...names) => data => 
 	names.reduce((errors, name) => {
		if (!data[name]) {
			errors[name] = 'Required';
		}
		return errors;
	}, {});

const validateAddress = requireFields('street1', 'city', 'zip');
const validateFarm = requireFields('name', 'street', 'city');
const validateEnrollmentForm = data => {
	const errors = {};
	if (!data.name) {
		errors.name = 'Required';
	}
	errors.mailing = validateAddress(data.mailing)
	errors.physical = validateAddress(data.physical)
	errors.farm = data.farm.map(validateFarm)
	return errors
}

export default validateEnrollmentForm;
