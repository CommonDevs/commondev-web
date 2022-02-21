import React from 'react';
import "./styles/style.css";

const FirstPartySetComponent = () => {
  const location = useLocation();
  React.useEffect(pageview(location.pathname));
  return (
  <div className={styles.FirstPartySetComponent}>
    <iframe src="https://fps-member1.glitch.me/dumpcookies" width="700" height="400"></iframe>
  </div>
);}

FirstPartySetComponent.propTypes = {};

FirstPartySetComponent.defaultProps = {};

export default FirstPartySetComponent;
