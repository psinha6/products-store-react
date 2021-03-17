import { NavLink } from 'react-router-dom';
import './productList.css';

function CardContainer(data) {
  return (
    <div className="card-container">
      <NavLink to={`/product/${data.product.id}`} activeClassName="active-link">
      <div className="card">
        <div className="prod-img">
          <img src={data.product.image} alt={data.product.title} width="100%" height="100%"/>
        </div>
        <span>{data.product.title}</span>
      </div>
      </NavLink>
    </div>

  );
}

export default CardContainer;
