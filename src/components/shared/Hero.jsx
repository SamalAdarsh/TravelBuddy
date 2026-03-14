import React from "react";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { DollarSign, Heart, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();
//   return (
//     // <section className="min-h-screen relative overflow-hidden bg-linear-to-br from-indigo-50 to-blue-100 flexCenter py-22">

//    <section className="min-h-screen relative overflow-hidden bg-linear-to-br from-indigo-50 to-blue-100 dark:from-background dark:to-background flexCenter py-22 transition-colors duration-500">
//       {/* Background */}
//       {/* <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 "></div>
//       <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 "></div>
//       <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 "></div> */}

//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" />
//       <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" />

//       {/* Container */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
//         {/* <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full mb-6 border-white/50 shadow-sm ">
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
//             <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500" />
//           </span>
//           <span className="text-sm font-medium text-indigo-900">
//             AI-Powered Travel Guide v2.0
//           </span>
//         </div> */}

//        <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-secondary/40 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/50 dark:border-border shadow-sm">
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
//             <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500" />
//           </span>
//           <span className="text-sm font-medium text-indigo-900 dark:text-secondary-foreground">
//             AI-Powered Travel Guide v2.0
//           </span>
//         </div>

//         {/* <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 mb-6 tracking-tight leading-tight">
//           Plan Your Dream Getaway in Seconds
//         </h1> */}
//         <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-primary dark:to-indigo-400 mb-6 tracking-tight leading-tight">
//           Plan Your Dream Getaway in Seconds
//         </h1>
//         {/* <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
//           Tell us where you want to go, and let our advanced AI craft the
//           perfect itinerary tailored to your budget and interests.
//         </p> */}
//         <p className="text-xl text-gray-600 dark:text-muted-foreground mb-10 max-w-2xl mx-auto">
//           Tell us where you want to go, and let our advanced AI craft the
//           perfect itinerary tailored to your budget and interests.
//         </p>
// {/*
//         <Button onClick={()=>navigate('/create-trip')} className="group relative inline-flexCenter px-8! py-8! text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700 hover:scale-105 shadow-xl ">
//           {" "}
//           Start Planning{" "}
//           <FaArrowRightLong className="ml-2 w-5! h-5! group-hover:translate-x-1 transition-transform" />
//         </Button> */}

//         {/* <Button onClick={()=>navigate('/create-trip')} className="group relative inline-flexCenter px-8 py-8 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 dark:bg-primary dark:text-primary-foreground rounded-full hover:bg-indigo-700 dark:hover:bg-primary/90 hover:scale-105 shadow-xl ">
//           Start Planning
//           <FaArrowRightLong className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//         </Button>
//          */}
//          <div className="inline-block p-1 mt-10 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 dark:from-background dark:to-background">
//           {/* THE CTA BUTTON: Refined size, font, and interaction */}
//           <Button
//             onClick={() => navigate('/create-trip')}
//             size="lg" // Use shadcn's prominent size
//             className="group relative flexCenter gap-x-3 px-10! py-6! md:px-12! md:py-7! text-xl md:text-2xl font-extrabold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-primary/30 ..."
//           >
//             {/* Light Mode: Adaptive Gradient Background */}
//             <span className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full transition-all" />

//             {/* Dark Mode: deep oklch Primary Button with subtle glow */}
//             <span className="absolute inset-0 bg-primary dark:border dark:border-border rounded-full opacity-0 dark:opacity-100 transition-all duration-300" />

//             {/* The Pulsing Text & Arrow Group */}
//             <span className="relative z-10 flex items-center gap-x-3 text-white dark:text-primary-foreground">
//               Start Planning
//               <FaArrowRightLong className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1.5 transition-transform" />
//             </span>
//           </Button>
//         </div>

//         <div className="mt-12 grid grid-cols-3 gap-4 text-gray-500 dark:text-muted-foreground  text-sm">
//           <div className="flex flex-col items-center">
//             <div className="p-3 bg-white rounded-2xl shadow-sm mb-2 text-indigo-600">
//               <Plane size={24} />
//             </div>
//             <span>Smart Routes</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="p-3 bg-white rounded-2xl shadow-sm mb-2 text-indigo-600">
//               <DollarSign size={24} />
//             </div>
//             <span>Budget Control</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="p-3 bg-white rounded-2xl shadow-sm mb-2 text-indigo-600">
//               <Heart size={24} />
//             </div>
//             <span>Perosnalized</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Hero = () => {
//   const navigate = useNavigate();
//   return (
//     /* ADAPTIVE LAYOUT: Stays linear and py-22, but changes colors automatically */
//     <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100 dark:bg-background flexCenter py-22 transition-colors duration-500">

//       {/* Background Blobs - Adjusted opacity for dark mode */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" />
//       <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" />

//       {/* Container */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

//         {/* Version Badge - Refined and adaptive */}
//         <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-secondary/40 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/50 dark:border-border shadow-sm">
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
//             <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500" />
//           </span>
//           <span className="text-sm font-medium text-indigo-900 dark:text-secondary-foreground">
//             AI-Powered Travel Guide v2.0
//           </span>
//         </div>

//         {/* Title - Stays exactly as your original code, it works well in both! */}
//         <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-primary dark:to-indigo-400 mb-6 tracking-tight leading-tight">
//           Plan Your Dream Getaway in Seconds
//         </h1>

//         {/* Description - Adaptive text color for dark mode */}
//         <p className="text-xl text-gray-600 dark:text-muted-foreground mb-10 max-w-2xl mx-auto">
//           Tell us where you want to go, and let our advanced AI craft the
//           perfect itinerary tailored to your budget and interests.
//         </p>

//         {/* Adaptive CTA Button block */}
//         <Button
//           onClick={()=>navigate('/create-trip')}
//           className="group relative inline-flexCenter px-10! py-8! text-lg font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-primary/30 ..."
//         >
//           {/* Light Mode Design: bg-indigo-600 and transition hover-scale-105 */}
//           <span className="absolute inset-0 bg-indigo-600 rounded-full transition-all duration-300" />

//           {/* Dark Mode Design: A deep indigo/purple gradient override for that premium feel */}
//           <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 dark:border dark:border-border rounded-full opacity-0 dark:opacity-100 transition-all duration-300" />

//           <span className="relative z-10 flexCenter items-center gap-x-2.5 text-white dark:text-primary-foreground">
//             Start Planning
//             <FaArrowRightLong className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
//           </span>
//         </Button>

//         {/* Features - Adaptive grid for mobile and adaptive text/bg colors */}
//         <div className="mt-12 grid grid-cols-1 xs:grid-cols-3 gap-4 text-gray-500 dark:text-muted-foreground text-sm">
//           <div className="flex flex-col items-center">
//             <div className="p-3 bg-white dark:bg-card border dark:border-border rounded-2xl shadow-sm mb-2 text-indigo-600 dark:text-primary">
//               <Plane size={24} />
//             </div>
//             <span>Smart Routes</span>
//           </div>

//           <div className="flex flex-col items-center">
//             <div className="p-3 bg-white dark:bg-card border dark:border-border rounded-2xl shadow-sm mb-2 text-indigo-600 dark:text-primary">
//               <DollarSign size={24} />
//             </div>
//             <span>Budget Control</span>
//           </div>

//           <div className="flex flex-col items-center">
//             <div className="p-3 bg-white dark:bg-card border dark:border-border rounded-2xl shadow-sm mb-2 text-indigo-600 dark:text-primary">
//               <Heart size={24} />
//             </div>
//             <span>Personalized</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Hero = () => {
  const navigate = useNavigate();
  return (
    /* RESTORED: Solid bg-background in dark mode to fix the "Pic 2" light background issue */
    <section className="min-h-screen relative overflow-hidden bg-linear-to-br from-indigo-50 to-blue-100 dark:from-background dark:to-background flexCenter py-22 transition-colors duration-500">
      {/* Background Blobs - Keep them subtle */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" />
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10" /> */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/30 dark:bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300/30 dark:bg-pink-600/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Version Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-card/60 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/50 dark:border-border shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500" />
          </span>
          <span className="text-sm font-medium text-indigo-900 dark:text-foreground">
            AI-Powered Travel Guide v2.0
          </span>
        </div>

        {/* Title - Matches Pic 1's centered look */}
        {/* <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-primary dark:to-indigo-400 mb-6 tracking-tight leading-tight">
          Plan Your Dream Getaway in Seconds
        </h1> */}

        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-primary dark:to-cyan-200 mb-6 tracking-tight leading-tight">
          Plan Your Dream Getaway in Seconds
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-10 max-w-2xl mx-auto">
          Tell us where you want to go, and let our advanced AI craft the
          perfect itinerary tailored to your budget and interests.
        </p>

        {/* RESTORED BUTTON: Simple, clean, and purple in dark mode as requested */}
        <Button
          onClick={() => navigate("/create-trip")}
          className="group relative inline-flex items-center justify-center px-10! py-8! text-lg font-bold text-white transition-all duration-200 bg-indigo-600 dark:bg-primary hover:bg-indigo-700 dark:hover:bg-primary/90 hover:scale-105 shadow-xl rounded-full"
        >
          Start Planning
          <FaArrowRightLong className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
        </Button>

        {/* RESTORED GRID: Fixed back to 3 columns to match the clean layout in Pic 1 */}
        {/* <div className="mt-12 grid grid-cols-3 gap-4 text-gray-500 dark:text-muted-foreground text-sm">
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white dark:bg-card border dark:border-border rounded-2xl shadow-sm mb-2 text-indigo-600 dark:text-primary">
              <Plane size={24} />
            </div>
            <span className="font-medium">Smart Routes</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white dark:bg-card border dark:border-border rounded-2xl shadow-sm mb-2 text-indigo-600 dark:text-primary">
              <DollarSign size={24} />
            </div>
            <span className="font-medium">Budget Control</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white dark:bg-card border dark:border-border rounded-2xl shadow-sm mb-2 text-indigo-600 dark:text-primary">
              <Heart size={24} />
            </div>
            <span className="font-medium">Personalized</span>
          </div>
        </div> */}

        {/* RESTORED GRID: 3 columns with added Micro-interactions */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-gray-500 dark:text-muted-foreground text-sm">
          {[
            { icon: <Plane size={24} />, label: "Smart Routes" },
            { icon: <DollarSign size={24} />, label: "Budget Control" },
            { icon: <Heart size={24} />, label: "Personalized" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* 1. Animated Container: Lifts on hover and adds indigo glow in dark mode */}
              <div
                className="p-3 bg-white dark:bg-card border border-border dark:border-border rounded-2xl  mb-2 text-indigo-600 dark:text-primary
          transition-all duration-300 ease-out
          /* HOVER EFFECTS: Lift up and add shadow */
          group-hover:-translate-y-1.5 group-hover:shadow-md 
          dark:group-hover:shadow-[0_0_15px_rgba(165,180,252,0.3)] 
          /* CLICK EFFECT: Subtle shrink */
          active:scale-90 active:duration-75"
              >
                {/* 2. Animated Icon: Slight rotation on hover */}
                <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {feature.icon}
                </div>
              </div>

              {/* 3. Text Label: Transitions to full color on hover */}
              <span className="font-medium transition-colors duration-300 group-hover:text-foreground">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
