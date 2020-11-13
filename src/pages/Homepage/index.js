import React from 'react';

import { SectionCover, SectionCompany, SectionSport } from '../../components';

import { Container } from './styles';

function Homepage() {
  return (
    <Container>
      <SectionCover />
      <SectionCompany />
      <SectionSport />
    </Container>
  );
}

export default Homepage;
