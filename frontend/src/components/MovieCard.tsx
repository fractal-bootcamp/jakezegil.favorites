import React from 'react';

interface MovieCardProps {
  title: string;
  imageUrl: string;
  description: string;
  isLiked: boolean;
  onLike: () => void;
}

const LikeButton: React.FC<{ isLiked: boolean; onClick: () => void }> = ({ isLiked, onClick }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
  >
    {isLiked ? '❤️' : '🤍'}
  </button>
);

export const MovieCard: React.FC<MovieCardProps> = ({ title, imageUrl, description, isLiked, onLike }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" >
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-xl">{title}</div>
          <LikeButton isLiked={isLiked} onClick={onLike} />
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};
