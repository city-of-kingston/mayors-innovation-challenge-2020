import React from 'react';
import NextLink from 'next/link';

import CirclesSvgGroup, { CirclesGroupDef } from '../components/CirclesSvgGroup';

const Header = () => (
	<div className="header">
		<div className="svg-container left">
			<svg height="200%" viewBox="0 20 550 170" preserveAspectRatio="xMinYMax">
				<defs>
					<CirclesGroupDef />
					<radialGradient id="fade-left" cx="0.5" cy="0.5" r="0.5" fx="0.7" fy="0.7">
						<stop offset="50%" style={{stopColor: 'white', stopOpacity: 1}} />
						<stop offset="100%" style={{stopColor: 'white', stopOpacity: 0}} />
					</radialGradient>
					<radialGradient id="fade-right" cx="0.5" cy="0.5" r="0.5" fx="0.3" fy="0.7">
						<stop offset="50%" style={{stopColor: 'white', stopOpacity: 1}} />
						<stop offset="100%" style={{stopColor: 'white', stopOpacity: 0}} />
					</radialGradient>
				</defs>
				<mask id="fade-left-mask">
					<rect id="bg-left" x="0" y="0" width="600" height="200" fill="url(#fade-left)"/>
				</mask>
				<mask id="fade-right-mask">
					<rect id="bg-right" x="0" y="0" width="600" height="200" fill="url(#fade-right)"/>
				</mask>
				{/*<rect x={0} y={0} width={600} height={200}
					mask="url(#fade-left-mask)" fill="red"/>*/}
				<g mask="url(#fade-left-mask)">
					<CirclesSvgGroup offX={350}/>
				</g>
			</svg>
		</div>
		<NextLink href="/index">
			<a><img src="static/MIC Logo.png" alt="Mayor's Innovation Challenge Logo" className="logo"/></a>
		</NextLink>
		<div className="svg-container right">
			<svg height="200%" viewBox="50 0 400 200" preserveAspectRatio="xMaxYMax">
				{/*<rect x={0} y={0} width={600} height={200}
					mask="url(#fade-right-mask)" fill="red"/>*/}
				<g mask="url(#fade-right-mask)">
					<CirclesSvgGroup flip offX={50}/>
				</g>
			</svg>
		</div>
	</div>
);

export default Header;