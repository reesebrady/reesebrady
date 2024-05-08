interface Props {
  items: string[];
  heading: string;
  // takes an item of type string and returns void 
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //how we tell react that we have a component whose state will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /*
    because the compiler doesn't know what kind of object event is, 
    we need to leave the : MouseEvent in order to specify the type of the
    parameter. To do this, we had to import it above. 
    MouseEvent is called an event handler
  */
  //   const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1> {heading} </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
