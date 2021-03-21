import React from 'react';
import Header from '../components/header/Header';

export default function HeaderContainer() {
    return (
        <Header>
        <Header.Box>
          <Header.Team>
            Common Devs
          </Header.Team>
          <Header.Description>
            Mobile App Development Team
          </Header.Description>
        </Header.Box>
        {/* <Header.Contact></Header.Contact> */}
        <div></div>{/*  PUT IT BECAUSE OF CSS*/}
      </Header>
    )
}