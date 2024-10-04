import React from 'react';

// BEGIN (write your solution here)
export default class Card extends React.Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        {this.props.title ? <h4 className="card-title">{this.props.title}</h4> : <h4 className="card-title">title</h4>}
                        {this.props.text ? <p className="card-text">{this.props.text}</p> : <p className="card-text">text</p>}
                    </div>
                </div>
            </>
        );
    }
}

// END
