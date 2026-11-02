import { useState} from "react";
// {items: [], heading: string}

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem?: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    const [SelectedIndex, setSelectedIndex] = useState(-1);

    // Event handler for list item click
    const handleClick = (index: number) => {
        setSelectedIndex(index);
        console.log(items[index]);
        if (onSelectItem) onSelectItem(items[index]);
    };

  
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
      {items.map((item , index) => (
        <li className={`list-group-item ${SelectedIndex === index ? "active" : ""}`} key={item} onClick={() => handleClick(index)}>{item}</li>
      ))}
      </ul>
    </>
  );
}
export default ListGroup;