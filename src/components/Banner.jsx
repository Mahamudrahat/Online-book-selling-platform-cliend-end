import React, { useState } from 'react';


export default function Banner() {
 

  return (
    <div className="container mx-auto mt-2 mb-2">
    <div
  className="hero h-96 rounded-lg shadow-lg"
  style={{
    backgroundImage: "url(https://cdn4.vectorstock.com/i/1000x1000/92/23/banner-online-book-store-shelf-or-bookcase-vector-18869223.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Online Edu Care</h1>
      <p className="mb-5">
        Read, Explore & Gain Knowledge
      </p>
    </div>
  </div>
</div>
  </div>
  );
}
