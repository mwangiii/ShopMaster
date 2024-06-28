
const SavedCards = (card ) => {
  return (
    <div className="p-4">
      <div className="addCard flex justify-end">
        <button className="bg-black text-white py-2 px-4 rounded">+ Add New Card</button>
      </div>
      <div className="mt-4 p-4 border border-gray-200 rounded-lg">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <span className="text-gray-600">{card.cardNumber}</span>
        </div>
        <button className="mt-2 bg-red-500 text-white py-1 px-2 rounded">Delete</button>
      </div>
    </div>
  );
};

export default SavedCards;
