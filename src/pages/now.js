import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import { Layout, PageTitle, SEO } from '../components/index'
import { rhythm, scale } from '../utils/typography'

class Now extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const pageContent = data.allMarkdownRemark.edges[0].node.html

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Now" keywords={[`now`, `gatsby`, `javascript`, `react`]} />
        <PageTitle title="Now" link="now" />
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </Layout>
    )
  }
}

export default Now

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/now/" } }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
  }
`
