import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({
  options: { good, neutral, bad },
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.statistics}>
      <li className={s.item}>
        <p>Good:</p>
        <p className={s.result}>{good}</p>
      </li>
      <li className={s.item}>
        <p>Neutral:</p>
        <p className={s.result}>{neutral}</p>
      </li>
      <li className={s.item}>
        <p>Bad:</p>
        <p className={s.result}>{bad}</p>
      </li>
      <li className={s.item}>
        <p>Total:</p>
        <p className={s.result}>{total}</p>
      </li>
      <li className={s.item}>
        <p>Positive feedback:</p>
        <p className={s.result}>{positivePercentage}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
