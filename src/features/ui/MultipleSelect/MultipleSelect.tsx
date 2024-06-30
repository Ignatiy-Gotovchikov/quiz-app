import { useState } from 'react';
import MultipleSelectItem from '../../../shared/ui/MultipleSelectItem/MultipleSelectItem';
import styles from './MultipleSelect.module.scss';

interface MultipleSelectProps {
  options: { id: string; label: string }[];
  onSelect: (selected: string[]) => void;
}

const MultipleSelect = ({ options, onSelect }: MultipleSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (label: string) => {
    const isSelected = selectedOptions.includes(label);
    const newSelectedOptions = isSelected
      ? selectedOptions.filter((option) => option !== label)
      : [...selectedOptions, label];

    setSelectedOptions(newSelectedOptions);
    onSelect(newSelectedOptions);
  };

  return (
    <div className={styles.multipleSelect}>
      {options.map((option) => (
        <MultipleSelectItem
          key={option.id}
          label={option.label}
          isSelected={selectedOptions.includes(option.label)}
          onClick={() => handleSelect(option.label)}
        />
      ))}
    </div>
  );
};

export default MultipleSelect;
