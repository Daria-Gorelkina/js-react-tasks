import React from 'react';

// BEGIN (write your solution here)
const Body = ({ children }) => {
    return <div className="card-body">{children}</div>;
};
const Title = ({ children }) => {
    return <h4 className="card-title">{children}</h4>;
};

const Text = ({ children }) => {
    return <p className="card-text">{children}</p>;
};
export default class Card extends React.Component {
    static Body = Body
    static Title = Title
    static Text = Text

    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        )
    }
}
// END
