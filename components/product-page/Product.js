import React, {Component} from 'react';
import Review from './review/Review';
import Form from './form/Form';
import Reviews from '../../models/Review';
import './Product.scss';

class Product extends Component {

    constructor(props) {
        super();
        this.state = {
            reviews: [],
        };
    }

    componentWillMount() {
        Reviews.initClass();
        this.setState({
            reviews: Reviews.getAllReviews(),
        });
    }

    showForm = () => {
        document.getElementById('form').classList.add('open');
    }

    changeContent = (newContent) => {
        if (newContent.author && newContent.rating && newContent.review) {
            document.getElementById('error').classList.remove('open');
            document.getElementById('form').classList.remove('open');
            this.setState({
                reviews: Reviews.addReview(newContent),
            });
        } else {
            document.getElementById('error').classList.add('open');
        }
    }


    render() {

        return (
            <div>
                <div className="product-container">
                    <div className="product-presentation">
                        This would be the image of the product
                    </div>
                    <div className="product-info-card">
                        <div className="product-title">
                            Product Name
                            <span className="product-price">€ 50.00</span>
                            <div className="product-category">Product Category</div>
                        </div>
                        <div className="product-rating">
                            <span className="icon icon-star"></span>
                            <span className="icon icon-star"></span>
                            <span className="icon icon-star"></span>
                            <span className="icon icon-empty-star"></span>
                            <span className="icon icon-empty-star"></span>
                        </div>
                        <div className="product-details">
                            <span className="product-info">Material</span>
                            <span className="product-info">Sizes / Length</span>
                            <span className="product-info">About usability</span>
                        </div>

                        <div className="product-size-dropdown">
                            <select className="select-size">
                                <option name="S">Maat 36 (S)</option>
                                <option name="M">Maat 38 (M)</option>
                                <option name="L">Maat 40 (L)</option>
                                <option name="XL">Maat 42 (XL)</option>
                            </select>
                        </div>

                        <div className="product-buttons">
                            <div className="button pink-button">Add to cart</div>
                            <div className="button blue-button" onClick={this.showForm}>Write a review</div>
                        </div>
                    </div>
                </div>
                <Form submit={(newContent) => this.changeContent(newContent)}/>

                <Review items={this.state.reviews}/>
            </div>
        )
    }
}

export default Product;