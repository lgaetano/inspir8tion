import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <ul>
      <li>Message: {props.card.message}</li>
      <li>Likes: {props.card.likes_count}</li>
      <li onClick={() => props.onLike(props.card)}>+1</li>
      <li onClick={() => props.onCardDelete(props.card)}>Delete</li>
    </ul>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    }).isRequired,
  onLike: PropTypes.func.isRequired,
  onCardDelete: PropTypes.func.isRequired,
};

export default Card;