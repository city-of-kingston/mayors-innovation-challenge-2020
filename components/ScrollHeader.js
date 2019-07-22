import React, { Fragment } from 'react';

import { Element } from 'react-scroll';
import ScrollTrigger from './ScrollTrigger';

let scrollTriggerCallback = (name, state) => {};
const bindScrollTriggerCallback = (cb) => scrollTriggerCallback = cb;

const ScrollHeader = ({ children, name }) => (
	<Fragment>
		<Element name={name} />
		<ScrollTrigger containerRef="#scroll-container"
			onEnter={() => scrollTriggerCallback(name, true)}
			onExit={() => scrollTriggerCallback(name, false)}>

			<h2>{ children }</h2>
		</ScrollTrigger>
	</Fragment>
);

export default ScrollHeader;
export { bindScrollTriggerCallback };