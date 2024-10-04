import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: null };
    }

    onClickb = (button) => {
        this.setState(({ active }) => ({ active: button }));
    };

    render() {
        const { active } = this.state
        return <div className="btn-group" role="group">
            <button type="button" className={`btn btn-secondary left ${active === 'left' ? 'active' : ''}`} onClick={() => this.onClickb('left')}>Left</button>
            <button type="button" className={`btn btn-secondary right ${active === 'right' ? 'active' : ''}`} onClick={() => this.onClickb('right')}>Right</button>
        </div>;
    }
}
// END
