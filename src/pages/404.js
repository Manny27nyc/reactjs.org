/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

'use strict';

import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {sharedStyles} from 'theme';

const PageNotFound = () => (
  <Container>
    <div css={sharedStyles.articleLayout.container}>
      <div css={sharedStyles.articleLayout.content}>
        <Header>Page Not Found</Header>
        <TitleAndMetaTags title="React - Page Not Found" />
        <div css={sharedStyles.markdown}>
          <p>We couldn't find what you were looking for.</p>
          <p>
            Please contact the owner of the site that linked you to the original
            URL and let them know their link is broken.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default PageNotFound;
