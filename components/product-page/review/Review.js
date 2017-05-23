import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {

    generateStars = (number) => {
        let stars = [];
        for (var i=0; i < number; i++) {
            stars.push(<span className="icon icon-star"></span>);
        }
        return <span>{stars}</span>;
    }

    displayReviews = () => {
        return this.props.items.map((element) =>
            (
                <div className="card-container">
                    <div className="card-image">
                        <img src="https://www.peerspace.com/web-templates/assets/images/no_avatar_placeholder.png" />
                    </div>
                    <div className="card-info">
                        <div className="card-name" id="row">
                            {element.author}
                            {this.generateStars(element.rating)}
                        </div>
                        <div className="card-date">
                            Posted: {element.date}
                        </div>
                        <div className="card-comment">
                            {element.review}
                        </div>
                    </div>
                </div>
            )
        );
    }


    render() {
        return (
            <div className="review-container">
                <div className="review-title">Other reviews</div>
                {this.displayReviews()}
            </div>
        )
    }
}

export default Review;