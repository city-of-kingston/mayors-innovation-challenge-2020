import React, { Component } from 'react';
import CirclesSvgGroup, { CirclesGroupDef } from '../components/CirclesSvgGroup';
import PageContent, { challenges } from '../content/catagories.mdx';
import { Accordion, AccordionItem } from '../components/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/page-layout.scss';
import { Row, Col } from 'reactstrap';


export default class Catagories extends Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		return (
			<div className="page-container">
				<div className="header">
					<div className="svg-container left">
						<svg height="200%" viewBox="0 0 600 200" preserveAspectRatio="xMinYMax">
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
					<img src="static/MIC Logo.png" alt="Mayor's Innovation Challenge Logo" className="logo"/>
					<div className="svg-container right">
						<svg height="200%" viewBox="0 0 600 200" preserveAspectRatio="xMaxYMax">
							{/*<rect x={0} y={0} width={600} height={200}
								mask="url(#fade-right-mask)" fill="red"/>*/}
							<g mask="url(#fade-right-mask)">
								<CirclesSvgGroup flip offX={50}/>
							</g>
						</svg>
					</div>
				</div>
				<div className="content-container">
					<div className="sidebar">
						<ul className="links" style={{fontFamily: 'Arial', fontSize: '25px'}}>
					
						</ul>

						<svg width="70" height="100%" viewBox="0 0 80 820" className="nav-slider" preserveAspectRatio="xMidYMid">
							<path d="M 75 10 C 40 210, 40 610, 75 810" fill="transparent" className="line"/>
						</svg>
					</div>
					<div className="content" id="scroll-container" ref={this.scrollContainer}>
						<PageContent />
						<Row style={{ position: 'relative', float: 'left', marginTop: '50px', left: '15%'}}>
							<Col xs={2} style={{padding: '0px'}}><a href='http://localhost:3000/'><img src='https://www.cityofkingston.ca/image/journal/article?img_id=21482928&t=1506624596877' width='100%'/></a></Col>
							<Col xs={2} style={{padding: '0px'}}><a href='http://localhost:3000/Catagories'><img src='https://www.cityofkingston.ca/image/journal/article?img_id=21482929&t=1506624596964' width='100%'/></a></Col>
							<Col xs={2} style={{padding: '0px'}}><a href='http://localhost:3000/Workshops'><img src='https://www.cityofkingston.ca/image/journal/article?img_id=21482930&t=1506624597046' width='100%'/></a></Col>
							<Col xs={2} style={{padding: '0px'}}><a href='http://localhost:3000/SubmitProposal'><img src='https://www.cityofkingston.ca/image/journal/article?img_id=21482931&t=1506624597128' width='100%'/></a></Col>
						</Row>
						
					</div>
				</div>
			</div>
		);
	}
}
