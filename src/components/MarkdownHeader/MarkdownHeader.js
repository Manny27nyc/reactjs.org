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

import Flex from 'components/Flex';
import React from 'react';
import {colors, fonts, media} from 'theme';

const MarkdownHeader = ({title}: {title: string}) => (
  <Flex type="header" halign="space-between" valign="baseline">
    <h1
      css={{
        color: colors.dark,
        marginBottom: 0,
        marginTop: 40,
        ...fonts.header,

        [media.size('medium')]: {
          marginTop: 60,
        },

        [media.greaterThan('large')]: {
          marginTop: 80,
        },
      }}>
      {title}
    </h1>
  </Flex>
);

export default MarkdownHeader;
