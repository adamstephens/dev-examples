import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layouts/layout'

type Props = {
  data: {
    allMdx: any
  }
}

type Page = {
  node: {
    id: string,
    slug: string,
    excerpt: string,
    frontmatter: {
      title: string
    }
  }
}

const CssPage = ({ data }: Props): JSX.Element => {
  const { edges: pages } = data.allMdx
  return (
    <Layout>
      <h1>This is the CSS page</h1>
      <ul>
        {pages.map(({ node: page }: Page) => (
          <li key={page.id}>
            <Link to={`/${page.slug}`}>
              <h2>{page.frontmatter.title}</h2>
            </Link>
            <p>{page.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(filter: {frontmatter: {category: {eq: "css"}}}) {
      edges {
        node {
          id
          slug
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default CssPage
