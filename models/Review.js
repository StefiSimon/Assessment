class Review {

    author;
    rating;
    review;
    date;

    constructor(author,rating,review,date) {
        this.author = author;
        this.rating = rating;
        this.review = review;
        this.date = date;
    }
}

export default class Reviews {

    static reviews = [];

    static initClass() {
        this.reviews.push(
            new Review('Stefi Simon', 4, 'Pretty nice', '12th of May'),
            new Review('Stefi Simon', 4, 'Pretty nice', '12th of May'),
            new Review('Stefi Simon', 4, 'Pretty nice', '12th of May')
        );
    }

    static getAllReviews() {
        return this.reviews;
    }

    static addReview(newReview) {
        newReview.date = "today";
        this.reviews.push(newReview);
        return this.reviews;
    }

}