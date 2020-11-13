import React from 'react';

import {
  SectionCover,
  SectionCompany,
  SectionSport,
  SectionProductOne,
} from '../../components';

import { Container } from './styles';

function Homepage() {
  return (
    <Container>
      <SectionCover />
      <SectionCompany />
      <SectionSport />
      <SectionProductOne />
    </Container>
  );
}

export default Homepage;
