import React, {
  Component
} from 'react';
import './productdescription.css';
import { useParams } from "react-router";

class ProductDescription extends Component {
  id = 0;
  state = {
    product: {}
  };

  componentDidMount() {
    console.log(this.id);
    fetch(`https://fakestoreapi.com/products/${this.id}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ product: data })
      })
      .catch(e => {
        const data = {
          id: 1,
          image: 'data:image/png;base64,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',
          category: 'Male',
          title: 'Title 1',
          description: 'Description 1',
          price: '20'
        };
        this.setState({ product: data });
      });
  }
  render() {
    this.id = this.props.match.params.id;
    return (
      <div className="container">
        <div className="left-column">
          <img src={this.state.product.image} alt="product" />
        </div>
        <div className="right-column">
          <div className="product-description">
            <span>{this.state.product.category}</span>
            <h1>{this.state.product.title}</h1>
            <p>{this.state.product.description}</p>
          </div>
          <div className="product-price">
            <span>{this.state.product.price}$</span>
            <a href="#" className="cart-btn">Add to cart</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescription;