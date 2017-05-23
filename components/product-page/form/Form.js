import React, {Component} from 'react';
import './Form.scss';

class Form extends Component {

    constructor(props) {
        super();
        this.state = {
            author: '',
            rating: 0,
            review: '',
        };
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    hideForm = () => {
        document.getElementById('form').classList.remove('open');
        this.setState ({
            author: '',
            rating: 0,
            review: '',
        });
    }


    fillStar = (event) => {
        const index = event.target.getAttribute('name');

        this.setState({
            rating: index,
        });

        for(let i = 1; i <= parseInt(parseInt(index)); i++) {
            document.getElementsByName(i.toString())[0].classList.remove('icon-empty-star');
            document.getElementsByName(i.toString())[0].classList.add('icon-star');
        }
        for(let i = 5; i > parseInt(parseInt(index)); i--) {
            document.getElementsByName(i.toString())[0].classList.remove('icon-star');
            document.getElementsByName(i.toString())[0].classList.add('icon-empty-star');
        }
    }

    callSubmit = () => {
        this.props.submit(this.state);
        this.setState({
            author: '',
            rating: 0,
            review: '',
        });
    }

    render() {
        return (
            <div id="form">
                <div className="form-container">
                    <div className="form-title">Write a review</div>
                    <div className="form-group">
                        <label className="input-info"> Please fill in your name </label>
                        <input onChange={this.handleChange} name='author' className="input-box" type="text"
                               placeholder="Your name..."/>
                    </div>
                    <div className="form-group">
                        <label className="input-info"> Please rate the product </label>
                        <div className="rating-group" id="stars" onClick={this.fillStar}>
                            <span name="1" className="icon icon-empty-star"></span>
                            <span name="2" className="icon icon-empty-star"></span>
                            <span name="3" className="icon icon-empty-star"></span>
                            <span name="4" className="icon icon-empty-star"></span>
                            <span name="5" className="icon icon-empty-star"></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="input-info"> Please fill in your review here </label>
                        <textarea onInput={this.handleChange} name='review' className="text-box" type="number"
                                  placeholder="Product review..."/>
                    </div>

                    <div className="error-message" id="error">Please fill in all fields</div>

                    <div className="form-buttons">
                        <div className="button pink-button" onClick={this.callSubmit}>Submit</div>
                        <div className="button blue-button" onClick={this.hideForm}>Cancel</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;