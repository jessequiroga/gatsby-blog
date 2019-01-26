import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

function Links({ location }) {
  return (
    <div>
      <hr
        style={{
          margin: '2.58rem 0 1.58rem',
        }}
      />
      <h3
        style={{
          ...scale(0.25),
          marginTop: 0,
          textTransform: 'uppercase',
        }}
      >
        more
      </h3>
      {location.pathname === '/' && (
        <ul>
          <li>
            <Link to={'/about'}>about</Link>
          </li>
          <li>
            <Link to={'/now'}>now</Link>
          </li>
        </ul>
      )}

      {location.pathname.indexOf('stash') === 1 && (
        <ul>
          <li>
            <Link to={'/about'}>about</Link>
          </li>
          <li>
            <Link to={'/now'}>now</Link>
          </li>
        </ul>
      )}

      {location.pathname === '/about' && (
        <ul>
          <li>
            <Link to={'/now'}>now</Link>
          </li>
          <li>
            <Link to={'/stash'}>stash</Link>
          </li>
        </ul>
      )}

      {location.pathname === '/now' && (
        <ul>
          <li>
            <Link to={'/about'}>about</Link>
          </li>
          <li>
            <Link to={'/stash'}>stash</Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Links
