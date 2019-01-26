import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

function Elsewhere() {
  return (
    <StaticQuery
      query={ElsewhereQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <h3
              style={{
                ...scale(0.25),
                marginTop: 0,
                textTransform: 'uppercase',
              }}
            >
              Elsewhere
            </h3>
            <ul>
              <li>
                <a
                  href={`http://www.twitter.com/${social.twitter}`}
                  target="_blank"
                >
                  twitter
                </a>
              </li>
              <li>
                <a
                  href={`http://www.github.com/${social.github}`}
                  target="_blank"
                >
                  github
                </a>
              </li>
            </ul>
          </div>
        )
      }}
    />
  )
}

const ElsewhereQuery = graphql`
  query ElsewhereQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`

export default Elsewhere
