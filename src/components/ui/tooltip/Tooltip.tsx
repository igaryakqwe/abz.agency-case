import {FC, useState} from "react";
import styles from './Tooltip.module.scss';

interface TooltipProps {
  text: string;
}

const Tooltip: FC<TooltipProps> = ({ text }) => {
  const [tooltipStyle, setTooltipStyle] = useState({});

  const handleMouseOver = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setTooltipStyle({
      left: `${clientX}px`,
      top: `${clientY + 20}px`, // Add 20px to position the tooltip below the mouse
    });
  };

  return (
    <div className={styles.tooltip} onMouseOver={handleMouseOver}>
      <span className={styles.text}>{text}</span>
      <span className={styles['tooltip-text']} style={tooltipStyle}>{text}</span>
    </div>
  );
}

export default Tooltip;
