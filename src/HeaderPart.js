import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import { useTranslation} from 'react-i18next';

const HeaderPart = () => {
  const { t, i18n, ready } = useTranslation("messages");
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const today = new Date();

  return(
    <Header as='h2' block color="teal" textAlign="center">
    {t("title")}
    <Button.Group floated='right'>
    <Button onClick={() => changeLanguage('en')}>English</Button>
     <Button.Or />
    <Button onClick={() => changeLanguage('de')}>German</Button>
  </Button.Group>
  </Header>
);
}

export default HeaderPart;