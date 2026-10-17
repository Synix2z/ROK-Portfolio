import styles from './commanderGrid.module.css';

function CommandersGrid({ images }) {
  return (
    <div className={styles.commandersGrid}>
      {images.map((src, index) => (
        <div key={index} className={styles.commanderItem}>
          <img src={src} alt={`Item ${index + 1}`} className={styles.commanderImage} 
            loading="lazy"
            decoding="async" />
        </div>
      ))}
    </div>
  );
}

export default CommandersGrid;