import React from "react";
interface StarsProps {
  rating: number;
  maxStars?: number;
}

const StarRating: React.FC<StarsProps> = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center z-50">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={`full-star-${index}`}
            className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 text-lightport/70"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}

      {hasHalfStar && (
        <svg
          className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 text-lightport/70"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 9.24l-0.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2z" />
        </svg>
      )}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={`empty-star-${index}`}
            className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 text-white/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
    </div>
  );
};

export default StarRating;
