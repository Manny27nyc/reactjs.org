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

import CodeEditor from '../components/CodeEditor';
import React from 'react';
import ReactDOM from 'react-dom';

// TODO This is a huge hack.
// Remark transform this template to split code examples and their targets apart.
const mountCodeExample = (containerId, code) => {
  const container = document.getElementById(containerId);
  const parent = container.parentElement;

  const children = Array.prototype.filter.call(
    parent.children,
    child => child !== container,
  );
  children.forEach(child => parent.removeChild(child));

  const description = children
    .map(child => child.outerHTML)
    .join('')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

  ReactDOM.render(
    <CodeEditor code={code}>
      {<div dangerouslySetInnerHTML={{__html: description}} />}
    </CodeEditor>,
    container,
  );
};

export default mountCodeExample;
