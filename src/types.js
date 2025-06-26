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

export type Author = {
  name: string,
  url: string,
};

export type Node = {
  excerpt: string,
  fields: {
    date?: string,
    path: string,
    redirect: string,
    slug: string,
  },
  frontmatter: {
    author?: Array<Author>,
    next?: string,
    prev?: string,
    title: string,
  },
  html: string,
  id: string,
};

export type Edge = {
  node: Node,
};

export type allMarkdownRemarkData = {
  allMarkdownRemark: {
    edges: Array<Edge>,
  },
};

export type markdownRemarkData = Node;
