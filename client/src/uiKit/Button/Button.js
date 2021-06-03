import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.css';
import '../../App.css';

const Button = ({
  text,
  theme = 'primary',
  variant = 'default',
  icon,
  className,
  onClick,
  large,
  small,
  left,
  right,
}) => {
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
      {icon && left && <span className="btn_icon">{icon}</span>}
      {icon && !left && !right && <span className="btn_icon">{icon}</span>}
      {text && (
        <span className={classnames('btn_text', { '--right': right }, { '--left': left })}>
          {text}
        </span>
      )}
      {icon && right && <span className="btn_icon">{icon}</span>}
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
  left: PropTypes.bool,
  right: PropTypes.bool,
};

Button.defaultProps = {
  text: 'Button',
  theme: 'primary',
  variant: 'default',
  icon: null,
  className: '',
  onClick: null,
  large: false,
  small: false,
  left: false,
  right: false,
};

export default Button;
