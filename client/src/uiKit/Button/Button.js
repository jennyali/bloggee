import PropTypes from 'prop-types';
import classnames from 'classnames';

function Button({ text, variant, onClick }) {
  return (
    <button type="button" className={classnames(variant)} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  variant: 'primary',
  onClick: null,
};

export default Button;
