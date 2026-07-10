import { useGetProductReviewsQuery } from '@/redux/features/api/product';
import { Product } from '@/types/product';
import { useState } from 'react';
import AddReviews from './AddReviews';
import ReviewItem from './ReviewItem';

const Reviews = ({ product }: { product: Product }) => {
  const { data: reviews = [], isLoading } = useGetProductReviewsQuery(
    product._id
  );
  
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(4);

  const handleShowMore = () => {
    setVisibleReviewsCount((prev) => prev + 4);
  };

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <>
      <div className="max-w-[570px] w-full">
        <h2 className="font-medium text-2xl text-dark mb-9">
          {reviews.length} Review{reviews.length > 1 && 's'} for this product
        </h2>

        <div className="flex flex-col gap-6">
          {reviews?.slice(0, visibleReviewsCount).map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))}
        </div>

        {reviews.length > visibleReviewsCount && (
          <div className="mt-8 flex justify-center sm:justify-start">
            <button
              onClick={handleShowMore}
              className="font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark disabled:opacity-70 disabled:pointer-events-none"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      <AddReviews productId={product._id} />
    </>
  );
};

export default Reviews;
