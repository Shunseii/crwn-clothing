import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
	CheckoutItemContainer,
	ImageContainer,
	NameContainer,
	ValueContainer,
	PriceContainer,
	QuantityContainer,
	RemoveButton,
	Arrow
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<NameContainer>{name}</NameContainer>
			<QuantityContainer>
				<Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
				<ValueContainer>{quantity}</ValueContainer>
				<Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
			</QuantityContainer>
			<PriceContainer>{price}</PriceContainer>
			<RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
