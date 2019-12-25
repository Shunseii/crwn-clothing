import React from 'react';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import {
	PreviewCollectionContainer,
	TitleContainer,
	PreviewContainer
} from './preview-collection.styles';

const PreviewCollection = ({ title, items }) => (
	<PreviewCollectionContainer>
		<TitleContainer>{title.toUpperCase()}</TitleContainer>
		<PreviewContainer>
			{items
				.filter((item, ind) => ind < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</PreviewCollectionContainer>
)

export default PreviewCollection;
