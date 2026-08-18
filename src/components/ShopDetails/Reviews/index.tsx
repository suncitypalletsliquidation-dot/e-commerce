import { useGetProductReviewsQuery } from "@/redux/features/api/product";
import { Product } from "@/types/product";
import type { Review } from "@prisma/client";
import { useState } from "react";
import AddReviews from "./AddReviews";
import ReviewItem from "./ReviewItem";

export const fakeReviews: Review[] = [
  {
    id: "fake-review-1",
    name: "John D.",
    email: "johnd@example.com",
    comment:
      "Incredibly sturdy and well-built pallets. Exactly what our warehouse needed for heavy loads. Will definitely order again!",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-2",
    name: "Sarah Miller",
    email: "sarah.m@example.com",
    comment:
      "Good solid quality. They arrived on time and stacked nicely without any splintering or damaged runners.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-3",
    name: "Marcus Vance",
    email: "mvance@example.com",
    comment:
      "These pallets are fantastic for our shipping needs. Very reliable build quality and clean finish.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-4",
    name: "Elena R.",
    email: "elena.r@example.com",
    comment:
      "Pretty decent overall. A couple of them had minor cosmetic scuffs from transit, but structurally solid and hold weight well.",
    ratings: 3,
    productID: "generic",
  },
  {
    id: "fake-review-5",
    name: "David K.",
    email: "davidk@example.com",
    comment:
      "Very impressed with the durability. We put them through rigorous daily forklift use and they hold up amazingly well.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-6",
    name: "Robert Taylor",
    email: "rtaylor@example.com",
    comment:
      "Great value for the price. Exactly as described, with exact dimensions and great load capacity.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-7",
    name: "Hannah Smith",
    email: "hannah.s@example.com",
    comment:
      "Excellent craftsmanship! Clean timber, strong fasteners, and zero warping. Makes stacking and storage so much easier.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-8",
    name: "Michael B.",
    email: "mbrown@example.com",
    comment:
      "Good pallets for standard storage. Did exactly what we needed them to do. Delivery was prompt.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-9",
    name: "Lisa Wong",
    email: "lwong@example.com",
    comment:
      "Solid build and very dependable. We have tried several suppliers before, and these are definitely among the best.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-10",
    name: "Thomas Green",
    email: "tgreen@example.com",
    comment:
      "Overall a good purchase. Meets all our transport and storage standards without any issues.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-11",
    name: "Anthony P.",
    email: "anthonyp@example.com",
    comment:
      "Super tough and durable. We use these for transporting heavy industrial parts and they never flex or crack.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-12",
    name: "Jessica Turner",
    email: "jturner@example.com",
    comment:
      "Decent pallets for everyday warehouse operations. Good price point and helpful customer support.",
    ratings: 3,
    productID: "generic",
  },
  {
    id: "fake-review-13",
    name: "Carlos Gomez",
    email: "cgomez@example.com",
    comment:
      "Top notch quality! Very smooth edges and consistent sizing across the entire batch.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-14",
    name: "Emily Clark",
    email: "eclark@example.com",
    comment:
      "Very happy with this order. They hold our bulk freight securely and fit our pallet racks perfectly.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-15",
    name: "Brian Adams",
    email: "badams@example.com",
    comment:
      "Outstanding structural integrity. Sturdy deck boards and strong blocks make handling with a pallet jack effortless.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-16",
    name: "Rachel White",
    email: "rwhite@example.com",
    comment:
      "Good product. A straightforward, reliable pallet that gets the job done without hassle.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-17",
    name: "Kevin Martinez",
    email: "kmartinez@example.com",
    comment:
      "The load-bearing capacity is impressive. No sagging even under prolonged heavy weight in damp warehouse conditions.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-18",
    name: "Amanda Harris",
    email: "aharris@example.com",
    comment:
      "We ordered these for our distribution center and they exceeded our expectations. Clean, strong, and well-assembled.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-19",
    name: "Steven Scott",
    email: "sscott@example.com",
    comment:
      "Quite good. They arrived well-strapped and ready for immediate deployment in our supply chain.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-20",
    name: "Kelly Nelson",
    email: "knelson@example.com",
    comment:
      "Does the job fine for medium-weight cargo. Reasonably priced and quick dispatch.",
    ratings: 3,
    productID: "generic",
  },
  {
    id: "fake-review-21",
    name: "Patrick Carter",
    email: "pcarter@example.com",
    comment:
      "Exceptional quality! Not a single broken slat or loose nail in the whole shipment. Highly recommended.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-22",
    name: "Laura Mitchell",
    email: "lmitchell@example.com",
    comment:
      "Solid construction and very reliable. Perfect for stacking high in our logistics facility.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-23",
    name: "Eric Perez",
    email: "eperez@example.com",
    comment:
      "Super clean finish, perfect for our retail display floor as well as backroom storage.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-24",
    name: "Stephanie Roberts",
    email: "sroberts@example.com",
    comment:
      "Good sturdy construction. They withstand daily rough handling by our freight carriers quite well.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-25",
    name: "Jason Evans",
    email: "jevans@example.com",
    comment:
      "Very reliable and well-priced. We've noticed significantly less product transit damage since switching to these.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-26",
    name: "Rebecca Collins",
    email: "rcollins@example.com",
    comment:
      "Acceptable quality for standard shipping requirements. Sturdy enough for what we paid.",
    ratings: 3,
    productID: "generic",
  },
  {
    id: "fake-review-27",
    name: "Daniel Stewart",
    email: "dstewart@example.com",
    comment:
      "Brilliant build quality. We load them to maximum capacity and they stay rock solid.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-28",
    name: "Megan Sanchez",
    email: "msanchez@example.com",
    comment:
      "Consistent dimensions and great strength. Really helps streamline our automated packaging line.",
    ratings: 4,
    productID: "generic",
  },
  {
    id: "fake-review-29",
    name: "Jeffrey Morris",
    email: "jmorris@example.com",
    comment:
      "One of the most reliable pallet supplies we've worked with. Excellent durability and clean appearance.",
    ratings: 5,
    productID: "generic",
  },
  {
    id: "fake-review-30",
    name: "Brittany Rogers",
    email: "brogers@example.com",
    comment:
      "Very satisfied with the purchase. Good quality materials, sturdy construction, and excellent load distribution.",
    ratings: 4,
    productID: "generic",
  },
];

export const getReviewIndicesForProduct = (identifier: string): number[] => {
  const str = identifier || "default-product";

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }

  const count = 4 + (hash % 2);
  const indices: number[] = [];

  let currentSeed = hash;
  while (indices.length < count) {
    currentSeed = (currentSeed * 1664525 + 1013904223) >>> 0;
    const index = currentSeed % 30;
    if (!indices.includes(index)) {
      indices.push(index);
    }
  }

  return indices;
};

const Reviews = ({ product }: { product: Product }) => {
  const { data: apiReviews = [], isLoading } = useGetProductReviewsQuery(
    product._id,
  );

  const [visibleReviewsCount, setVisibleReviewsCount] = useState(4);

  const handleShowMore = () => {
    setVisibleReviewsCount((prev) => prev + 4);
  };

  const productIdentifier =
    product?.slug?.current || product?.name || product?._id || "";
  const fakeReviewIndices = getReviewIndicesForProduct(productIdentifier);
  const fakeProductReviews: Review[] = fakeReviewIndices.map((index) => ({
    ...fakeReviews[index],
    productID: product?._id || "generic",
  }));

  const reviews: Review[] = [...apiReviews, ...fakeProductReviews];

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <>
      <div className="max-w-[570px] w-full">
        <h2 className="font-medium text-2xl text-dark mb-9">
          {reviews.length} Review{reviews.length > 1 && "s"} for this product
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
