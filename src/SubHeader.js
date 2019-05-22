import React from 'react'
// import { Header } from 'semantic-ui-react'
import { Trans , useTranslation } from 'react-i18next';

const SubHeader = () => {
  const {t, i18n}= useTranslation();
  const today = new Date();
  const count=100;
  const name="WalkingTree";
  const num="12,000";
console.log(today);
  return(
    <div> Site Access details: {i18n.t('formattedDate', { date: today })}
         <br/>{i18n.t('formattedNum', { num: num })}<br/>
        <Trans i18nKey='userSite' count={count} name={name}>
        Hello <strong> {{name}}</strong>,you have {{count}} unread message. 
        </Trans>
        
      <Trans i18nKey="site" count={count} >
        <p>You are visitor number {{count}}.<br/>This site has been <strong>visited {{count}} times.</strong><br/></p>
    </Trans>
    {i18n.t('firstNum', {count: 1})}<br/>
    {i18n.t('firstNum', {count: 7})}<br/>
    {i18n.t('numWithCount', {count: 1})}<br/>
    {i18n.t('numWithCount', {count: 7})}<br/>
   
 </div>
);
}

export default (SubHeader);  
