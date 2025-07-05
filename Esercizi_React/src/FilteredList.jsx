// FilteredList.jsx
import { useMemo } from 'react';

function FilteredList({ items }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.age > 18);
  }, [items]); // ricalcola solo se `items` cambia

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>
          {item.name} ({item.age} anni)
        </li>
      ))}
    </ul>
  );
}

export default FilteredList;
