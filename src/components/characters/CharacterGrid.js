import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  // let itemsToRender;
  // if (items) {
  //   itemsToRender = <section className='cards'>
  //      {items.map((item) => (
  //          <CharacterItem key={item.char_id} item={item}></CharacterItem>

  //         ))}
  //       </section>
  // } else{
  //   itemsToRender = (<Spinner/>);
  // }

  // return <div>{itemsToRender}</div>;

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <section className="cards">
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    );
  }
  //   return isLoading ? (<Spinner/>) : (<section className='cards'>{items.map((item) => (<CharacterItem key={item.char_id} item={item}></CharacterItem>))}</section>)
};

export default CharacterGrid;
