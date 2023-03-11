import { ReactNode, useState } from 'react';
import classes from './SelectableList.module.css';
import clsx from 'clsx';

type SelectItem = { id: string };

type SelectableListProps<T> = {
  items: T[];
  renderItem?: (item: T) => ReactNode;
};

const takeId = ({ id }: SelectItem) => id;

export function SelectableList<T extends SelectItem>({
  items,
  renderItem = takeId,
}: SelectableListProps<T>) {
  const [selectedItem, setSelectedItem] = useState<T>();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={classes.listWrapper}>
      <div className={classes.selectedValue} onClick={handleToggle}>
        {selectedItem ? renderItem(selectedItem) : 'Nothing is selected'}
      </div>
      <ul className={clsx(classes.list, isOpen && classes.visible)}>
        {items.map((item) => (
          <li
            className={clsx(classes.item, item.id === selectedItem?.id && classes.selected)}
            key={item.id}
            onClick={() => {
              setIsOpen(false);
              setSelectedItem(item);
            }}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
