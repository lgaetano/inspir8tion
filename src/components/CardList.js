// import React from 'react';
import Card from "./Card";

const CardList = ({cards}) => {
  console.log(cards);
  const getCardsList = (cards) => {
    return cards.cards.map((card) => {
      return (
        <Card
          card={card}
        />
      );
    });
  };
  return <ul>{getCardsList(cards)}</ul>;
};

export default CardList;
/* will just pass props board through to Board */