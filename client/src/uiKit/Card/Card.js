import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Card.css';

const Card = ({ props, theme, pill, hasHover, padding }) => {
  return (
    <div className={classnames('card', theme, { pill }, { onHover: hasHover }, padding)}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  props: PropTypes.node,
  theme: PropTypes.oneOf([
    'primary',
    'primary-invert',
    'secondary',
    'secondary-invert',
    'grey',
    'grey-altcolor',
  ]),
  pill: PropTypes.bool,
  hasHover: PropTypes.bool,
  padding: PropTypes.oneOf(['default', 'large', 'xlarge']),
};

Card.defaultProps = {
  children: null,
  props: {
    children: 'Insert Card Content here.',
  },
  theme: 'secondary-invert',
  pill: true,
  hasHover: false,
  padding: 'default',
};

export default Card;
