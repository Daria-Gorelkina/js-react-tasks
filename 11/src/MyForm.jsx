import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
            isSubmitted: false,
        };
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isSubmitted: true });
    };

    handleBack = () => {
        this.setState({ isSubmitted: false });
    };

    render() {
        const { email, password, address, city, country, acceptRules, isSubmitted } = this.state;

        if (isSubmitted) {
            const data = [
                { field: 'acceptRules', value: acceptRules.toString() },
                { field: 'address', value: address },
                { field: 'city', value: city },
                { field: 'country', value: country },
                { field: 'email', value: email },
                { field: 'password', value: password },
            ];

            data.sort((a, b) => a.field.localeCompare(b.field));

            return (
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
                    <table className="table">
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.field}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        return (
            <form onSubmit={this.handleSubmit} name="myForm">
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" value={email} onChange={this.handleChange} placeholder="Email"/>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" value={password} onChange={this.handleChange} placeholder="Password"/>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea className="form-control" name="address" id="address" value={address} onChange={this.handleChange} placeholder="1234 Main St"></textarea>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city" value={city} onChange={this.handleChange}/>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country" name="country" className="form-control" value={country} onChange={this.handleChange}>
                        <option value="">Choose</option>
                        <option value="argentina">Argentina</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                    </select>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={acceptRules} onChange={this.handleChange}/>Accept Rules
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}
// END
