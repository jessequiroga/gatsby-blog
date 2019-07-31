import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { PageTitle } from './index'

function Intro() {
  return (
    <StaticQuery
      query={IntroQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div>
            <PageTitle title="Hello, hi 👋🏼" link="/" />
            <p>
              I'm Tina, a product-focused software developer based in{' '}
              <del>Cape Town</del> Ireland.
            </p>
            <p>
              I love building{' '}
              <a
                href={`http://www.github.com/${social.github}`}
                target="_blank"
              >
                things
              </a>{' '}
              and, partly due to a keen interest in people and process, I always
              strive to surround myself with{' '}
              <a href="http://www.weareleaf.com" target="_blank">
                people who are smarter than me
              </a>
              .
            </p>
            <p>
              The purpose of this site is to <a href="/stash">stash</a> and
              share some of the things I learn along the way, exercise my
              writing muscle and keep track of my{' '}
              <a href="/about">personal and professional growth</a>.
            </p>
          </div>
        )
      }}
    />
  )
}

const IntroQuery = graphql`
  query IntroQuery {
    site {
      siteMetadata {
        author
        social {
          github
        }
      }
    }
  }
`

export default Intro
