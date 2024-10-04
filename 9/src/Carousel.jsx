import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    handleNext = () => {
        const { activeIndex } = this.state;
        const { images } = this.props;

        if (activeIndex === images.length - 1) {
            this.setState({ activeIndex: 0 });
        }
        else {
            this.setState({ activeIndex: activeIndex + 1 });
        }
    };

    handlePrev = () => {
        const { activeIndex } = this.state;
        const { images } = this.props;

        if (activeIndex === 0) {
            this.setState({ activeIndex: images.length - 1 });
        }
        else {
            this.setState({ activeIndex: activeIndex - 1 });
        }
    };

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item${index === activeIndex ? ' active' : ''}`}>
                            <img alt="" className="d-block w-100" src={image} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carousel" type="button" onClick={this.handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carousel" type="button" onClick={this.handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}
// END
