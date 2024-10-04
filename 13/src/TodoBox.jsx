import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            task: '',
        };
    }

    handleChange = (e) => {
        this.setState({ task: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { task, items } = this.state;
        if (task.trim() === '') return;
        const newItem = { id: uniqueId(), task };
        this.setState({
            items: [newItem, ...items],
            task: '',
        });
    };

    handleRemove = (id) => () => {
        this.setState(({ items }) => ({
            items: items.filter(item => item.id !== id),
        }));
    };

    render() {
        const { task, items } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input type="text" value={task} onChange={this.handleChange} required="" className="form-control" placeholder="I am going..."/></div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>

                <div>
                    {items.map(({ id, task }) => (
                        <Item key={id} task={task} onRemove={this.handleRemove(id)} />
                    ))}
                </div>
            </div>
        );
    }
}
// END
