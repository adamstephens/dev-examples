import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../layouts/Layout'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import BrowserSupport from '../common/BrowserSupport'

const shortcodes = { Link, SyntaxHighlighter, BrowserSupport } // Provide common components here

type Props = {
  data: {
    mdx: {
      frontmatter: {
        title: string
      },
      body: string
    }
  }
}

const CssPropertiesTemplate = ({ data: { mdx } }: Props) => {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CssPropertiesQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default CssPropertiesTemplate
