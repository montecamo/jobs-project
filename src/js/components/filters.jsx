import React from 'react';

import { FiltersWrapper } from '../styled-components';
import SalaryFilter from './salary-filter.jsx';
import ExtendedSearchFilter from './extended-search-filter.jsx';

const Filters = (props) => (
  <FiltersWrapper>
    <SalaryFilter /> 
    <ExtendedSearchFilter />
  </FiltersWrapper>
);

export default Filters;
