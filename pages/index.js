import Content, { ContentDiv, ContentParagraph } from '../components/content';
import content from '../content/index.yaml';

const Home = () => (
	<Content.Provider value={content}>
		<ContentParagraph contentId="mainText" />
		<ContentDiv contentId="inner">
			<ContentParagraph contentId="innerText" />
		</ContentDiv>
	</Content.Provider>
)

export default Home;