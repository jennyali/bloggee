import React from 'react';

import Pagination from './Pagination';

const Template = (args) => <Pagination {...args} />;

export default {
  title: 'Pagination',
  component: Pagination,
};

export const PaginationExample = Template.bind({});
PaginationExample.args = {
  totalPages: 5,
  currentPage: 3,
};
