import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import { Layout, PageTitle, SEO } from '../components/index'

class About extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const pageContent = data.allMarkdownRemark.edges[0].node.html

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`about`, `gatsby`, `javascript`, `react`]}
        />
        <PageTitle title="About" link="about" />
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
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
