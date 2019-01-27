import React, { Component } from 'react'
import { graphql } from 'gatsby'

import { Layout, PageTitle, SEO } from '../components/index'

class Courses extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const pageContent = data.allMarkdownRemark.edges[0].node.html

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Courses"
          keywords={[`Courses`, `gatsby`, `javascript`, `react`]}
        />
        <PageTitle title="Courses" link="Courses" />
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </Layout>
    )
  }
}

export default Courses

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/courses/" } }) {
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
