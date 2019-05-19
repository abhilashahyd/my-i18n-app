import React, { Component } from 'react';
import { Accordion, Icon, Message } from 'semantic-ui-react';
import { withTranslation, Translation  } from 'react-i18next';

class AccordionSample extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
     let { t } = this.props;

    return (
    <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          {t("accordion.title1")}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
             {t("accordion.details1")}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
           {t("accordion.title2")}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          {/*<p>
           {t("accordion.details2")}
          </p>*/}
           <Translation ns="messages">
                {
                    (t, { i18n }) => <p>{t("accordionMsg.details2")}</p>
                }
            </Translation>
        </Accordion.Content>
    </Accordion>
        )
  }
}

export default withTranslation()(AccordionSample);