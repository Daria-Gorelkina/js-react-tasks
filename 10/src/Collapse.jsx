import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opened: props.opened ?? true };
    }

    onClickB = () => {
        this.setState((prevState) => ({ opened: !prevState.opened
        }));
    };

    render() {
        const { text } = this.props;
        const { opened } = this.state;

        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded={opened} onClick={this.onClickB}>Link with href</a>
                </p>
                <div className={`collapse${opened ? ' show' : ''}`}>
                    <div className="card card-body">{text}</div>
                </div>
            </div>
        );
    }
}
// END
