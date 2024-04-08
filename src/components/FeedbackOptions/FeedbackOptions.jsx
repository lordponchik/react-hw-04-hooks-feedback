import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="buton"
            onClick={() => {
              onLeaveFeedback(option);
            }}
            className={s[option]}
          >
            {option.replace(option[0], option[0].toUpperCase())}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
