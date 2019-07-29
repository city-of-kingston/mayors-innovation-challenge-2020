import React from 'react';
import NextLink from '../components/NextLink';

const NavItems = ({ active }) => (
	<div className="nav-items">
		<ul>
			<li className={active==='about'? 'active':''}><NextLink href="/index"><a>About</a></NextLink></li>
			<li className={active==='categories'? 'active':''}><NextLink href="/categories"><a>Categories</a></NextLink></li>
			<li className={active==='workshops'? 'active':''}><NextLink href="/workshops"><a>Workshops</a></NextLink></li>
			<li className={active==='submit'? 'active':''}><NextLink href="/submitProposal"><a>Submit</a></NextLink></li>
		</ul>
	</div>
);

export default NavItems;