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
 */

'use strict';

import React from 'react';
import {colors} from 'theme';

const MetaTitle = ({children, title, cssProps = {}, onDark = false}) => (
  <div
    css={{
      color: onDark ? colors.subtleOnDark : colors.subtle,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      ...cssProps,
    }}>
    {children}
  </div>
);

export default MetaTitle;
