// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

'use strict';

import React from 'react';
import {colors, fonts} from 'theme';

import type {Node} from 'react';

const Header = ({children}: {children: Node}) => (
  <h1
    css={{
      color: colors.dark,
      marginRight: '5%',
      ...fonts.header,
    }}>
    {children}
  </h1>
);

export default Header;
