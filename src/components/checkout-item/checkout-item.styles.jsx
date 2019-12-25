import styled from 'styled-components';

const attributeWidth = `width: 23%`;

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const NameContainer = styled.span`
	${attributeWidth}
`;

export const QuantityContainer = styled.span`
	${attributeWidth}
	display: flex;
	padding-left: 20px;
`;

export const PriceContainer = styled.span`
	${attributeWidth}
`;

export const Arrow = styled.div`
	cursor: pointer;
`;

export const ValueContainer = styled.span`
	margin: 0 10px;
`;

export const RemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
