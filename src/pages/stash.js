import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import { Layout, PageTitle, SEO } from '../components/index'
import { rhythm } from '../utils/typography'

class Stash extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PageTitle title="Stash" link="stash" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} style={{ marginBottom: '2.5rem' }}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  marginTop: '2rem',
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Stash

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/stash/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
