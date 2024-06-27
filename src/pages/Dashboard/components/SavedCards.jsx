
const SavedCards = (card) => {
  return (
    <div className="saved-cards">
      <button>+ Add new card</button>
      <div className="card-info">
        <h3>{card.title}</h3>
        <span>{card.cardNumber}</span>
        <button>delete</button>
      </div>
    </div>
  );
};

export default SavedCards;