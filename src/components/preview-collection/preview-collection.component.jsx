import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import {
	PreviewCollectionContainer,
	TitleContainer,
	PreviewContainer
} from './preview-collection.styles';

const PreviewCollection = ({ title, items, history, match, routeName }) => (
	<PreviewCollectionContainer>
		<TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
		<PreviewContainer>
			{items
				.filter((item, ind) => ind < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</PreviewCollectionContainer>
)

export default withRouter(PreviewCollection);
