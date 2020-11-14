import React from 'react';

import {
  SectionCover,
  SectionCompany,
  SectionSport,
  SectionProductOne,
  SectionPost,
  SectionInstagram,
} from '../../components';

import { Container } from './styles';

function Homepage() {
  return (
    <Container>
      <SectionCover />
      <SectionCompany />
      <SectionSport />
      <SectionProductOne />
      <SectionPost />
      <SectionInstagram />
    </Container>
  );
}

export default Homepage;
