import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Shoppingicon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({toogleCart}) => (
    <div className='cart-icon' onClick={toogleCart}>
      <Shoppingicon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  toogleCart: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps) (CartIcon);