import React from 'react';

import {
  SectionCover,
  SectionCompany,
  SectionSport,
  SectionProductOne,
  SectionPost,
  SectionInstagram,
  SectionAthletes,
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
      <SectionAthletes />
    </Container>
  );
}

export default Homepage;
