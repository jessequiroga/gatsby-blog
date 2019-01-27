import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': { backgroundImage: `none`, boxShadow: `none` },
    a: {
      color: '#f7b733',
      backgroundImage:
        'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #f7b733 1px, #f7b733 2px, rgba(0, 0, 0, 0) 2px)',
    },
    blockquote: { borderLeft: '0.5925rem solid #f7b733' },
    '@media only screen and (max-width: 480px){blockquote{backgroundImage:0.29625rem solid #134896}}': {},
    'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
      backgroundImage: `none`,
    },
    h4: { lineHeight: 1.3 },
    'ul li': { marginBottom: 0 },
  }
}

const typography = new Typography(lincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
