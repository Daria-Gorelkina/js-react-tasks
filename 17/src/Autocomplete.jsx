import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
    state = {
        query: '',
        suggestions: [],
    };

    handleChange = (e) => {
        const query = e.target.value;
        this.setState({ query });

        if (query.length === 0) {
            this.setState({ suggestions: [] });
            return;
        }

        axios.get('/countries', { params: { term: query } })
            .then((res) => {
                this.setState({ suggestions: res.data });
            })
            .catch((error) => {
                console.error("Error fetching countries:", error);
                this.setState({ suggestions: [] });
            });
    };

    render() {
        const { query, suggestions } = this.state;

        return (
            <div>
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Country"
                        value={query}
                        onChange={this.handleChange}
                    />
                </form>
                {suggestions.length > 0 && (
                    <ul>
                        {suggestions.map((country) => (
                            <li key={country}>{country}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}
// END
