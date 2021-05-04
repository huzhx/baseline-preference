import styles from './Slider.module.css';

const Slider = ({ step, min, max, value, onChange }) => {
  return (
    <>
      <div className={styles.slider__container}>
        <input
          className={styles.slider__input}
          type="range"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Slider;
