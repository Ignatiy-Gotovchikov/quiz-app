import { useState } from 'react';
import BubbleItem from '../../../shared/ui/BubbleItem/BubbleItem';
import styles from './Bubble.module.scss';

interface BubbleProps {
  options: { id: string; label: string; emoji: string }[];
  maxSelection: number;
  onSelect: (selected: string[]) => void;
}

const Bubble = ({ options, maxSelection, onSelect }: BubbleProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (label: string) => {
    const isSelected = selectedOptions.includes(label);
    let newSelectedOptions: string[] = [];

    if (isSelected) {
      newSelectedOptions = selectedOptions.filter((option) => option !== label);
    } else if (selectedOptions.length < maxSelection) {
      newSelectedOptions = [...selectedOptions, label];
    } else {
      newSelectedOptions = selectedOptions;
    }

    setSelectedOptions(newSelectedOptions);
    onSelect(newSelectedOptions);
  };

  const renderItem = (id: string) => {
    const option = options.find((opt) => opt.id === id);
    if (!option) return null;

    return (
      <BubbleItem
        key={option.id}
        label={option.label}
        emoji={option.emoji}
        isSelected={selectedOptions.includes(option.label)}
        onClick={() => handleSelect(option.label)}
      />
    );
  };

  return (
    <div className={styles.bubbleContainer}>
      <div className={styles.leftCol}>
        {renderItem('1')}
        {renderItem('2')}
      </div>
      <div className={styles.centerCol}>
        {renderItem('3')}
        {renderItem('4')}
      </div>
      <div className={styles.rightCol}>
        {renderItem('5')}
        {renderItem('6')}
      </div>
      <div className={styles.lastEmoji}>
        {renderItem('7')}
      </div>
    </div>
  );
};

export default Bubble;
