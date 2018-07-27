import React from 'react';

import { FiltersWrapper, Wrapper } from '../styled-components';
import SalaryOnlyFilter from './salary-only-filter.jsx';
import ExtendedSearchFilter from './extended-search-filter.jsx';
import SalaryFilter from './salary-filter.jsx';
import Separator from './separator.jsx';

const Filters = (props) => (
  <Wrapper preventDefault={true}>
  <FiltersWrapper>
    <SalaryOnlyFilter /> 
    <ExtendedSearchFilter />
    <SalaryFilter />
  </FiltersWrapper>
  </Wrapper>
);

export default Filters;
