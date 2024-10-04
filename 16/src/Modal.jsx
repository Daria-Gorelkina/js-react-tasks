import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Header = ({ children, toggle }) => (
    <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
        />
    </div>
);

const Body = ({ children }) => (
    <div className="modal-body">
        {children}
    </div>
);

const Footer = ({ children }) => (
    <div className="modal-footer">
        {children}
    </div>
);
export default class Modal extends React.Component {
    static Header = Header
    static Body = Body
    static Footer = Footer
    render() {
        const { isOpen, children } = this.props;

        const modalClass = cn('modal', 'fade', {
            show: isOpen,
        });

        const displayStyle = isOpen ? { display: 'block' } : { display: 'none' };

        return (
            <div className={modalClass} style={displayStyle} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
// END
