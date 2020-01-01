import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { 
	HeaderContainer, 
	LogoContainer, 
	OptionsContainer, 
	OptionLink,
	OptionDiv,
	Icon
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/shop">CONTACT</OptionLink>
			{
				currentUser ? 
				<OptionDiv onClick={signOutStart}>
					SIGN OUT
					<Icon icon={faSignOutAlt} />
				</OptionDiv>
				:
				<OptionLink to="/signin">
					SIGN IN
					<Icon icon={faSignInAlt} />
				</OptionLink>
			}
			<CartIcon />
		</OptionsContainer>
		{
			hidden ? null :
			<CartDropdown />
		}
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
