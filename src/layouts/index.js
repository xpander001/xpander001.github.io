import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const MainContainer = styled.section`
  height: 100%;
  &:parent: {
    height: 100%;
  }
`

const TemplateWrapper = ({ children }) => (
  <MainContainer>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Ander Suarez</title>
        <link rel="canonical" href="http://andersuarez.com" />
    </Helmet>
    {children()}
  </MainContainer>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
