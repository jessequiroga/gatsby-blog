import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

function PageTitle({ title, link }) {
  return (
    <h1
      style={{
        ...scale(1.2),
        marginBottom: rhythm(1.2),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={link}
      >
        {title}
      </Link>
    </h1>
  )
}

export default PageTitle
