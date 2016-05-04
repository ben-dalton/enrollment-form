import React, { Component, PropTypes } from 'react';
import PureInput from '../components/pure-input';

class Address extends Component {
	shouldComponentUpdate(nextProps) {
		return (
			this.props.street1 !== nextProps.street1 ||
			this.props.street2 !== nextProps.street2 ||
			this.props.city !== nextProps.city ||
			this.props.state !== nextProps.state ||
			this.props.zip !== nextProps.zip ||
			this.props.phones !== nextProps.phones
		);
	}

	render() {
		const { street1, street2, city, state, zip, phones } = this.props;
		return (
			<div>
				<div className="form-group">
					<label>Street</label>
					<div>
						<PureInput className="form-control" type="text" placeholder="Address Line 1" field={street1} title={street1.error} />
					</div>
				</div>
				<div className="form-group">
					<div>
						<PureInput className="form-control" type="text" placeholder="Address Line 2" field={street2} />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 col-xs-12">
						<div className="form-group">
							<label>City</label>
							<div>
								<PureInput className="form-control" type="text" placeholder="City" field={city} title={city.error} />
							</div>
						</div>
					</div>
					<div className="col-xs-6 col-sm-4">
						<div className="form-group">
							<label>State</label>
							<div>
								<PureInput className="form-control" type="text" placeholder="State" field={state} title={state} />
							</div>
						</div>
					</div>
					<div className="col-xs-6 col-sm-4">
						<div className="form-group">
							<label>Zip</label>
							<div>
								<PureInput className="form-control" type="text" placeholder="Zip Code" field={zip} title={zip} />
							</div>
						</div>
					</div>
				</div>
				<div>
					<button className="btn btn-secondary" type="button" onClick={event => {
						event.preventDefault() // prevent form submission
						phones.addField				 // pushes empty phone field onto the end of the array
					}}>Add Phone</button>
				</div>
				{phones.map((phone, index) => 
					<div key={index}>
						<label> Phone #{index + 1}</label>
						<div>
							<PureInput className="form-control" type="text" placeholder="Phone" field={phone} title={phone.error} />
						</div>
					</div>
				)}
			</div>
		);
	}
}

Address.propTypes = {
	street1: PropTypes.object.isRequired,
	city: PropTypes.object.isRequired,
	state: PropTypes.object.isRequired,
	zip: PropTypes.object.isRequired,
	phones: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Address;
