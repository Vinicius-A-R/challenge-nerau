import React from 'react';

import {
  SectionCover,
  SectionCompany,
  SectionSport,
  SectionProductOne,
  SectionPost,
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
    </Container>
  );
}

export default Homepage;
