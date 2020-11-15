import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Container>
  );
}

export default Footer;
