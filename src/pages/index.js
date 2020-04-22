import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import '../styles/global.css.js'
import { linkTextColor } from '../styles/variables.css.js'

const MainSection = styled.section`
  height: 100%;
  display: flex;
`

const MainSectionContent = styled.section`
  padding: 2rem 0;
  margin: auto;
  height: auto;
  width: 70%;
  max-width: 750px;
  & * {
    margin-bottom: 1rem;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`

const Subtitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`

const Text = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5rem;
`

const InlineLink = styled.a`
  color: ${linkTextColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export default () => (
  <MainSection>
    <MainSectionContent>
      <Title>Ander Suárez Martínez</Title>
      <Subtitle>Senior Frontend Developer at <InlineLink href="http://www.unbound.com">Unbound</InlineLink>. I build websites.</Subtitle>
      <Text>Previously, frontend lead at <InlineLink href="http://www.jinnapp.com">Jinn</InlineLink>. I co-founded <InlineLink href="http://perpetuall.net/">Perpetuall</InlineLink>. I was born in Bilbao, and moved to the UK looking for new challenges. I like music & arts. I play guitar for <InlineLink href="http://walnut.bandcamp.com">Walnut</InlineLink>.</Text>
      <Text>Find me at <InlineLink href="mailto:me@andersuarez.com">me@andersuarez.com</InlineLink></Text>
    </MainSectionContent>
  </MainSection>
)
