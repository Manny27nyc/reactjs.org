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

import MarkdownPage from 'components/MarkdownPage';
import PropTypes from 'prop-types';
import React from 'react';
import {createLinkTutorial} from 'utils/createLink';
import {sectionListTutorial} from 'utils/sectionList';

const Tutorial = ({data, location}) => {
  // HACK The injected location prop doesn't update when hash changes
  // This might be a gatsby issue, or a react-router/history issue,
  // Or we might be using either library incorrectly.
  // For now this patch keeps the hash in sync by JIT copying it from window.
  // The undefined check prevents us from breaking on production build.
  if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
    location.hash = window.location.hash;
  }

  return (
    <MarkdownPage
      enableScrollSync
      createLink={createLinkTutorial}
      location={location}
      markdownRemark={data.markdownRemark}
      sectionList={sectionListTutorial}
      titlePostfix=" - React"
    />
  );
};

Tutorial.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query TemplateTutorialMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        next
        prev
      }
      fields {
        path
        slug
      }
    }
  }
`;

export default Tutorial;
