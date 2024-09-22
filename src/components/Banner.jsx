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
    <div className="container mx-auto">
    <div className="hero bg-base-200 min-h-2/3">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start lg:justify-between">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-full lg:max-w-sm rounded-lg shadow-2xl" 
          alt="Hero"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </div>
  );
}
