import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
    removeItem = (id) => (e) => {
        e.preventDefault();
        const newItems = this.state.items.filter((item) => item.id !== id);
        this.setState({ items: newItems });
    };
    constructor(props) {
        super(props);
        this.state = { items: [] }
    }

    handleAdd = () => {
        const { items } = this.state;
        const lastValue = items.length > 0 ? items[0].value : 0;
        const newItem = { id: uniqueId(), value: lastValue + 1 };
        this.setState({ items: [newItem, ...items] });
    };

    handleSubtract = () => {
        const { items } = this.state;
        const lastValue = items.length > 0 ? items[0].value : 0;
        const newItem = { id: uniqueId(), value: lastValue - 1 };
        this.setState({ items: [newItem, ...items] });
    };

    renderItem = ({ id, value }) => (
        <button key={id} type="button" className="list-group-item list-group-item-action" onClick={this.removeItem(id)}>{value}</button>
    );

    render() {
        const { items } = this.state;
        return (<div>
            <div class="btn-group font-monospace" role="group">
                <button type="button" class="btn btn-outline-success" onClick={this.handleAdd}>+</button>
                <button type="button" class="btn btn-outline-danger" onClick={this.handleSubtract}>-</button>
            </div>
            {items.length > 0 && (
                <div className="list-group">
                    {items.map(this.renderItem)}
                </div>
            )}
        </div>)
    }
}
// END
