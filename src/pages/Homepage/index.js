import React from 'react';

import { SectionCover, SectionCompany } from '../../components';

import { Container } from './styles';

function Homepage() {
  return (
    <Container>
      <SectionCover />
      <SectionCompany />
    </Container>
  );
}

export default Homepage;
