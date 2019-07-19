import React, { Component } from 'react';
import { Link, Element, Events } from 'react-scroll';
import ScrollTrigger from '../components/ScrollTrigger';
import Content, { ContentDiv, ContentParagraph } from '../components/content';
import content from '../content/index.yaml';

import '../css/page-layout.scss';

const HEADERS = [
	{ name: 'what', label: 'What' },
	{ name: 'where', label: 'Where' },
	{ name: 'when', label: 'When' },
	{ name: 'why', label: 'Why' },
	{ name: 'how', label: 'How' },
];

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeHeader: null,
			headerProgress: 0,
			transitioning: false
		};

		for (let { name } of HEADERS) {
			this.state[name] = false;
		}

		this.scrollContainer = React.createRef();
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', (to, element) => {
			let i = HEADERS.map(({name})=>name).indexOf(to);
			this.setState({
				activeHeader: to,
				headerProgress: (i + 0.5) / HEADERS.length,
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
		for (let { name } of HEADERS) {
			if (this.state[name] !== oldState[name]) {
				changed = true; break;
			}
		}

		if (changed && !this.state.transitioning) {
			for (let i = 0; i < HEADERS.length; i++) {
				let { name } = HEADERS[i];
				if (this.state[name]) {
					this.setState({
						activeHeader: name,
						headerProgress: (i + 0.5) / HEADERS.length,
					});
					break;
				}
			}
		}
	}

	render() {
		return (
			<Content.Provider value={content}>
				{/*<ContentParagraph contentId="mainText" />
				<ContentDiv contentId="inner">
					<ContentParagraph contentId="innerText" />
				</ContentDiv>*/}

				<div className="page-container">
					<div className="header">
						<h1>Mayor's Innovation Challenge</h1>
					</div>
					<div className="content-container">
						<div className="sidebar">
							<ul className="links">
								{ HEADERS.map(({name, label}) => (
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
							<Element name="what" />
							<ScrollTrigger containerRef="#scroll-container" onEnter={() => this.setSectionState('what', true)} onExit={() => this.setSectionState('what', false)}>
								<h1>WHAT</h1>
							</ScrollTrigger>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>

							<Element name="where" />
							<ScrollTrigger containerRef="#scroll-container" onEnter={() => this.setSectionState('where', true)} onExit={() => this.setSectionState('where', false)}>
								<h1>WHERE</h1>
							</ScrollTrigger>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>

							<Element name="when" />
							<ScrollTrigger containerRef="#scroll-container" onEnter={() => this.setSectionState('when', true)} onExit={() => this.setSectionState('when', false)}>
								<h1>WHEN</h1>
							</ScrollTrigger>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>

							<Element name="why" />
							<ScrollTrigger containerRef="#scroll-container" onEnter={() => this.setSectionState('why', true)} onExit={() => this.setSectionState('why', false)}>
								<h1>WHY</h1>
							</ScrollTrigger>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>

							<Element name="how" />
							<ScrollTrigger containerRef="#scroll-container" onEnter={() => this.setSectionState('how', true)} onExit={() => this.setSectionState('how', false)}>
								<h1>HOW</h1>
							</ScrollTrigger>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
							<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>

						</div>
					</div>
				</div>
			</Content.Provider>
		);
	}
}
