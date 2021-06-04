import React from 'react';
import './Pagination.css';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Button from '../Button';

const Pagination = ({ onNextPage, onPrevPage, currentPage, totalPages, className }) => {
  const clampedPageNumber = _.clamp(currentPage, 1, totalPages);

  const renderPageNums = _.times(totalPages, (n) => {
    const page = n + 1;
    return (
      <div
        key={page}
        className={classnames('page-number', { current: page === clampedPageNumber })}
      >
        {page}
      </div>
    );
  });

  const hasNextButton = clampedPageNumber < totalPages;
  const hasPreviousButton = clampedPageNumber !== 1;

  return (
    <div className={classnames('pagination', className)}>
      {hasPreviousButton && (
        <Button
          icon={<BsChevronDoubleLeft />}
          className="pagination__button pagination__previous-button previous"
          type="grey-altcolor"
          variant="transparent"
          onClick={onPrevPage}
        />
      )}
      <div className="pagination__pages">{renderPageNums}</div>
      {hasNextButton && (
        <Button
          icon={<BsChevronDoubleRight />}
          className="pagination__button pagination__next-button next"
          type="grey-altcolor"
          variant="transparent"
          onClick={onNextPage}
        />
      )}
    </div>
  );
};

Pagination.propTypes = {
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  onNextPage: null,
  onPrevPage: null,
  currentPage: 1,
  totalPages: 1,
  className: null,
};

export default Pagination;
