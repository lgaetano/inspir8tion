// import React from 'react';
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const CardList = (props) => {
  const [cards, setCards] = useState([]);
  const [cardsStatus, setCardsStatus] = useState("Loading...");

  useEffect(() => {
    axios
      .get(`https://inspir8tion-board.herokuapp.com/boards/${props.selectedBoard.id}/cards`)
      .then((res) => {
        const newCards = res.data.cards.map((card) => {
          return {
            id: card.card_id,
            message: card.message,
            likes_count: card.likes_count,
          };
        });
        setCardsStatus("Loaded");
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.selectedBoard.id, cards]);

  const onCardDelete = (selectedCard) => {
    axios
    .delete(`https://inspir8tion-board.herokuapp.com/cards/${selectedCard.id}`)
    .then((response) => {
      console.log(response.data)
    });
  }

  const getCardsList = cards.map((card) => {
    return (
      <Card
        card={card}
        onCardDelete={onCardDelete}
      />
    );
  });
  return <ul>{getCardsList}</ul>;

};

export default CardList;
/* will just pass props board through to Board */