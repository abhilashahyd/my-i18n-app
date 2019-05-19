import React from 'react'
import { Header } from 'semantic-ui-react'
import { Trans  } from 'react-i18next';

const SubHeader = () => {
  const today = new Date();
  const count=100;
  const name="WalkingTree";
console.log(today);
  return(
    <div>
        Site Access details<br/>
        <Trans i18nKey='userMessagesUnread' count={count}>
        Hello <strong> {{name: 'Jan', title:'Mr.'}}</strong>, you have {{count}} unread message. 
        </Trans>
    {/*s*/}
      {/*<Trans i18nKey="site" count={count} name={name}>
        <p>You are visitor number {{count}}.<br/>This site has been <strong>visited {{count}} times.</strong><br/></p>
    </Trans>*/}
 </div>
);
}

export default SubHeader;  
