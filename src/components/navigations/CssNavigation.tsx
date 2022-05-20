import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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

const CssNavigation = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query cssPropertiesQuery {
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
  `)

  const { edges: pages } = data.allMdx

  return (
    <>
      <h2>All CSS properties</h2>
      <nav>
        <ul>
          {pages.map(({ node: page }: Page) => (
            <li key={page.id}>
              <Link to={`/${page.slug}`}>
                {page.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default CssNavigation
