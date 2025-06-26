/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

export default url =>
  new Promise((resolve, reject) =>
    document.head.appendChild(
      Object.assign(document.createElement('script'), {
        async: true,
        src: url,
        onload: resolve,
        onerror: reject,
      }),
    ),
  );
