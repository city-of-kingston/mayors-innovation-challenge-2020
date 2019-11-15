import React from 'react';
import NextLink from '../components/NextLink';

const NavItems = ({ active }) => (
	<div className="nav-items">
		<ul>
			<li className={active==='about'? 'active':''}><NextLink href="/index">About</NextLink></li>
			<li className={active==='categories'? 'active':''}><NextLink href="/categories">Categories</NextLink></li>
			<li className={active==='workshops'? 'active':''}><NextLink href="/workshops">Workshops</NextLink></li>
			<li className={active==='submit'? 'active':''}><NextLink href="/submitProposal">Submit</NextLink></li>
		</ul>
	</div>
);

export default NavItems;