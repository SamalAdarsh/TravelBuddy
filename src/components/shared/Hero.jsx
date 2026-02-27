import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-linear-to-br from-indigo-50 to-blue-100 flexCenter py-22">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 "></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 "></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 "></div>
    </section>
  );
};

export default Hero;
