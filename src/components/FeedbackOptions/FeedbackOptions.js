import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.list}>
            {options.map((item, i) => {
                 return (
                    <li className={styles.listItem} key={i}>
                        <button
                            className={styles.btn}
                            type="button"
                            name={item}
                            onClick={onLeaveFeedback}
                        >
                            {item}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}