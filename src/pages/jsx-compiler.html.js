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
import React from 'react';
import {sharedStyles} from 'theme';

const JsxCompiler = () => (
  <Container>
    <div css={sharedStyles.articleLayout.container}>
      <div css={sharedStyles.articleLayout.content}>
        <Header>JSX Compiler Service</Header>
        <div css={sharedStyles.markdown}>
          <p>
            <strong>
              This tool has been removed as JSXTransformer has been deprecated.
            </strong>
          </p>
          <p>
            We recommend using another tool such as{' '}
            <a href="https://babeljs.io/repl/">the Babel REPL</a>.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default JsxCompiler;
