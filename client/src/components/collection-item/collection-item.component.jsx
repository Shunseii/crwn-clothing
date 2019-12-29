import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
	CollectionItemContainer,
	BackgroundImage,
	AddItemButton,
	CollectionFooterContainer,
	ItemNameContainer,
	ItemPriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
	const { imageUrl, name, price } = item;

	return (
		<CollectionItemContainer>
			<BackgroundImage className="image" imageUrl={imageUrl} />

			<CollectionFooterContainer>
				<ItemNameContainer>{name}</ItemNameContainer>
				<ItemPriceContainer>{price}</ItemPriceContainer>
			</CollectionFooterContainer>
			<AddItemButton onClick={() => addItem(item)} inverted>
				Add to cart
			</AddItemButton>
		</CollectionItemContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
