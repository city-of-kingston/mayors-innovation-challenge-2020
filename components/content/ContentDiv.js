import React from 'react';
import Content from './Content';

const ContentDiv = ({ contentId, children, ...rest }) => (
    <Content.Consumer>
        { parentContent => {
            const content = parentContent? parentContent[contentId] : null;
            return (
                <div {...rest}>
                    <Content.Provider value={content}>
                        { children }
                    </Content.Provider>
                </div>
            );
        }}
    </Content.Consumer>
);

export default ContentDiv;