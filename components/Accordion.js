import React from 'react';
import '../css/accordion.scss';

const Accordion = ({ children }) => (
        <div className='wrapper'>
          <ul className='accordion-list'>
            {children}
          </ul>
        </div>
    )
  

  class AccordionItem extends React.Component {
    state = {
      opened: false
    }
    
    render () {
      const {
        props: {
          paragraph,
          title
        },
        state: {
          opened
        }
      } = this
      
      return (
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div className='accordion-item__line'>
            <h3 className='accordion-item__title'>
              {this.props.title}
            </h3>
            <span className='accordion-item__icon'/>
          </div>
            <div className='accordion-item__inner'>
              <div className='accordion-item__content'>
                {this.props.children}
              </div>
            </div>
        </div>
      )
    }
  }

  export { AccordionItem, Accordion };