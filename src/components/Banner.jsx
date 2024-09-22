import React, { useState } from 'react';

const bannerList = [
  'https://glowmeko.s3.amazonaws.com/others/423147634-404469568903266-6985937685234659620-n.webp',
  'https://glowmeko.s3.amazonaws.com/others/423147634-404469568903266-6985937685234659620-n.webp'
];

export default function Banner() {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? bannerList.length - 1 : curr - 1));

  const next = () => setCurr((curr) => (curr === bannerList.length - 1 ? 0 : curr + 1));

  return (
    <div className="container mx-auto mt-2 mb-2">
    <div className="hero bg-base-200 min-h-2/3 rounded-lg">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-start justify-between w-full">
  <div className="text-center lg:text-left w-full lg:w-1/2">
    <h1 className="text-4xl lg:text-5xl font-bold">Book For You!</h1>
    <p className="py-6">
      Unlock a World of Stories – Find Your Next Favorite Book at [Old Town BookStore]
    </p>
    <button className=" bg-orange-900 text-white p-2 rounded-md">Buy Now</button>
  </div>

  <img
    src="https://media.uiargonaut.com/wp-content/uploads/2024/02/81YzHKeWq7L_cropped-1024x571.jpg"
    className="max-w-full lg:max-w-sm rounded-lg shadow-2xl lg:self-start"
    alt="Hero"
  />
</div>
    </div>
  </div>
  );
}
