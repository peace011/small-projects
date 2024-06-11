import React from 'react';

interface CardProps {
  id: number;
  img: string;
  isFlipped: boolean;
  handleClick: (id: number) => void;
}

const Cards: React.FC<CardProps> = ({ id, img, isFlipped, handleClick }) => {
 
  return (
    <div onClick={() => handleClick(id)} className='h-full transition-transform ease-out duration-500' 
    style={{transform:isFlipped? 'rotateY(180deg)':'rotate(0deg)'}}>
      <img src={isFlipped ? img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgnmwiv2cGEYSjCzxC49vf6d7mSO29O6sVQ&s'} alt="card" className='h-full' />
    </div>
  );
};

export default Cards;
