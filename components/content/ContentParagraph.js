import React from 'react';
import Content from './Content';

const ContentParagraph = ({ contentId, ...rest }) => (
    <Content.Consumer>
        { parentContent => {
            const content = parentContent? parentContent[contentId] : null;
            return (
                <p {...rest}>{ content }</p>
            );
        }}
    </Content.Consumer>
);

export default ContentParagraph;