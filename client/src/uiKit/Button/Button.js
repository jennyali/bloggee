import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.css';

const Button = ({ text, theme, variant, icon, className, onClick, large, small, isRight }) => {
  return (
    <button
      type="button"
      className={classnames(
        'btn',
        className,
        theme,
        variant,
        { '--istype': variant },
        { '--large': large },
        { '--small': small }
      )}
      onClick={onClick}
    >
      {icon && !isRight && <span className="btn_icon">{icon}</span>}
      {text && (
        <span
          className={classnames('btn_text', { '--right': isRight }, { '--left': icon && !isRight })}
        >
          {text}
        </span>
      )}
      {icon && isRight && <span className="btn_icon">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.oneOf([
    'primary',
    'primary-invert',
    'secondary',
    'secondary-invert',
    'grey',
    'grey-altcolor',
  ]),
  variant: PropTypes.oneOf(['default', 'flat', 'transparent']),
  icon: PropTypes.element,
  className: PropTypes.string,
  onClick: PropTypes.func,
  large: PropTypes.bool,
  small: PropTypes.bool,
  isRight: PropTypes.bool,
};

Button.defaultProps = {
  text: null,
  theme: 'primary',
  variant: 'default',
  icon: null,
  className: '',
  onClick: null,
  large: false,
  small: false,
  isRight: false,
};

export default Button;
