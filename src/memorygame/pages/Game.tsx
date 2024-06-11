import React, { useState, useEffect } from 'react';
import { images } from '../components/images'; // Assuming images is an array of image objects
import Cards from '../components/Cards';

interface CardType {
  id: number;
  img: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const Game: React.FC = () => {
  // Duplicate images array and shuffle
  const shuffledImages = [...images, ...images].sort(() => 0.5 - Math.random());

  console.log(shuffledImages);
  
  const [cards, setCards] = useState<CardType[]>(
    shuffledImages.map((img, index) => ({ id: index, img: img.img, isFlipped: false, isMatched: false }))
  );
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);

  const handleClick = (id: number) => {
    const newCards = cards.map(card =>
      card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
    );
    setCards(newCards);
    console.log("newcard",newCards);
    
    
    const flipped = newCards.filter(card => card.isFlipped && !card.isMatched); //card.isFlipped is true and card.isMatched is not true
    setFlippedCards(flipped);
    console.log("flip",flipped);

    if (flipped.length === 2) {
      if (flipped[0].img === flipped[1].img) {
        // Mark cards as matched
        setTimeout(() => {
          const matchedCards = newCards.map(card =>     //both cards ismatched will set to true due dueto same img
            card.img === flipped[0].img ? { ...card, isMatched: true, isFlipped: true } : card
          );
          setCards(matchedCards);
          setFlippedCards([]);
        });
      } else {
        // Flip cards back over
        setTimeout(() => {
          const resetCards = newCards.map(card =>
            card.isFlipped && !card.isMatched ? { ...card, isFlipped: false } : card
          );
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className='p-4'>
      <div className="w-[18rem] bg-blue-900 p-4 grid grid-cols-3 gap-3">
        {cards.map(card => (
          <div key={card.id} className='bg-red-500'>
            <Cards id={card.id} img={card.img} isFlipped={card.isFlipped} handleClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
