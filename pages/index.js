import { Link, Element } from 'react-scroll';
import Content, { ContentDiv, ContentParagraph } from '../components/content';
import content from '../content/index.yaml';

import '../css/page-layout.scss';

const Home = () => (
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
						<li><Link containerId="scroll-container" smooth to="what">What</Link></li>
						<li><Link containerId="scroll-container" smooth to="where">Where</Link></li>
						<li><Link containerId="scroll-container" smooth to="when">When</Link></li>
						<li><Link containerId="scroll-container" smooth to="why">Why</Link></li>
						<li><Link containerId="scroll-container" smooth to="how">How</Link></li>
					</ul>

					<svg width="100" height="700" className="nav-slider">
						<path d="M 100 0 C 50 50, 50 650, 100 700" fill="transparent" className="line"/>
						<path d="M 100 0 C 50 50, 50 650, 100 700" className="dot" fill="transparent"/>
					</svg>
				</div>
				<div className="content" id="scroll-container">
					<Element name="what">
						<h1>WHAT</h1>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
					</Element>
					<Element name="where">
						<h1>WHERE</h1>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
					</Element>
					<Element name="when">
						<h1>WHEN</h1>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
					</Element>
					<Element name="why">
						<h1>WHY</h1>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
					</Element>
					<Element name="how">
						<h1>HOW</h1>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
						<p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p><p>Some content will go here</p>
					</Element>
				</div>
			</div>
		</div>
	</Content.Provider>
)

export default Home;