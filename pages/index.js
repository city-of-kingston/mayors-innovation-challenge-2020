import React, { Component } from 'react';
import { Link, Element, Events } from 'react-scroll';
import ScrollTrigger from '../components/ScrollTrigger';

import CirclesSvgGroup, { CirclesGroupDef } from '../components/CirclesSvgGroup';
import PageContent, { bindScrollTriggerCallback, headers } from '../content/index.mdx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/page-layout.scss';
import { Row, Col } from 'reactstrap';



export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeHeader: null,
			headerProgress: 0,
			transitioning: false
		};

		for (let { name } of headers) {
			this.state[name] = false;
		}

		this.scrollContainer = React.createRef();
		bindScrollTriggerCallback(this.setSectionState.bind(this));
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', (to, element) => {
			let i = headers.map(({name})=>name).indexOf(to);
			this.setState({
				activeHeader: to,
				headerProgress: (i + 0.5) / headers.length,
				transitioning: true,
			});
		});
	
		Events.scrollEvent.register('end', (to, element) => {
			this.setState({
				transitioning: false
			})
		});
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	setSectionState(name, state) {
		this.setState({ [name]: state });
	}

	componentDidUpdate(oldProps, oldState) {
		let changed = false;
		for (let { name } of headers) {
			if (this.state[name] !== oldState[name]) {
				changed = true; break;
			}
		}

		if (changed && !this.state.transitioning) {
			for (let i = 0; i < headers.length; i++) {
				let { name } = headers[i];
				if (this.state[name]) {
					this.setState({
						activeHeader: name,
						headerProgress: (i + 0.5) / headers.length,
					});
					break;
				}
			}
		}
	}

	render() {
		return (
			<div className="page-container">
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
					<a href='/'><img src="static/MIC Logo.png" alt="Mayor's Innovation Challenge Logo" className="logo"/></a>
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
				<div className="content-container">
					<div className="sidebar">
						<ul className="links" style={{fontFamily: 'Arial', fontSize: '25px'}}>
							{ headers.map(({name, label}) => (
								<li key={name} className={name === this.state.activeHeader? 'active' : ''}>
									<Link containerId="scroll-container" smooth to={name} offset={-300}>{ label }</Link>
								</li>
							))}
						</ul>

						<svg width="70" height="100%" viewBox="0 0 80 820" className="nav-slider" preserveAspectRatio="xMidYMid">
							<path d="M 75 10 C 40 210, 40 610, 75 810" fill="transparent" className="line"/>
							<path d="M 75 10 C 40 210, 40 610, 75 810" className="dot" fill="transparent"
								strokeDashoffset={-this.state.headerProgress * 800}/>
						</svg>
					</div>
					<div className="content" id="scroll-container" ref={this.scrollContainer}>
						<PageContent />
						<Row>
							<Col sm={4} style={{padding: '0px'}}><a href='/mayors-innovation-challenge-2020/categories'><img src='https://www.cityofkingston.ca/image/journal/article?img_id=21482929&t=1506624596964' width='100%'/></a></Col>
							<Col sm={4} style={{padding: '0px'}}><a href='/mayors-innovation-challenge-2020/workshops'><img src='https://www.cityofkingston.ca/image/journal/article?img_id=21482930&t=1506624597046' width='100%'/></a></Col>
							<Col sm={4} style={{padding: '0px'}}><a href='/mayors-innovation-challenge-2020/submitProposal'><img src='https://www.cityofkingston.ca/image/journal/article?img_id=21482931&t=1506624597128' width='100%'/></a></Col>
						</Row>
					</div>
				</div>
			</div>
		);
	}
}
