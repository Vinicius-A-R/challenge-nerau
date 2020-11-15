import React from 'react';

import {
  SectionCover,
  SectionCompany,
  SectionSport,
  SectionProductOne,
  SectionPost,
  SectionInstagram,
  SectionAthletes,
  SectionPartner,
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
      <SectionPartner />
    </Container>
  );
}

export default Homepage;
