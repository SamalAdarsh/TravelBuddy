import { BUDGET_OPTIONS, traveler_OPTIONS } from "@/assets/data";
import LoginDialog from "@/components/shared/LoginDialog";
import { placesApiKey } from "@/lib/constants";
import { generateTripWithAI } from "@/services/aiModel";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronLeft,
  Loader2,
} from "lucide-react";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "@/services/firebaseConfig";
import { Button } from "@/components/ui/button";

// const CreateTrip = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     destination: null,
//     noOfDays: "",
//     traveler: "",
//     budget: "",
//   });

//   const handleInputChange = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleNext = () => {
//     if (step < 3) setStep(step + 1);
//     else generateTrip();
//   };

//   const generateTrip = async () => {
//     const user = localStorage.getItem("user");

//     if (!user) {
//       return setOpenDialog(true);
//     }
//     if (
//       !formData.destination ||
//       !formData.noOfDays ||
//       !formData.budget ||
//       !formData.traveler
//     ) {
//       toast.error("Please fill all the details");
//     }

//     if (formData.noOfDays > 7) {
//       toast.error("AI can currently generate upto 7 days only.");
//     }

//     setLoading(true);

//     // console.log(formData);

//     const DYNAMIC_PROMPT = `Generate a travel plan for Location: ${formData?.destination?.label} for ${formData?.noOfDays} days for a ${formData?.traveler} traveler on ${formData?.budget} budget. Return the result strictly as a single JSON object using camelCase keys, the travel plan with trip note and must feature hotelsOptions array, each hotel with hotelName, hotelAddress, priceRange, imageUrl, rating, description, and a coordinates, alongside an itinerary array of daily plans. Each day must include a dayNumber, theme, and an activities array, where each activity contains activityName, description, imageUrl, ticketPrice, timeRange, timeToTravel and coordinates`;

//     try {
//       const tripData = await generateTripWithAI(DYNAMIC_PROMPT);
//       //    console.log("Trip Data Log: ",tripData)
//       await saveToDB(tripData);
//     } catch (error) {
//       console.log("AI Error:", error);
//       toast.error(
//         error.message?.includes("429")
//           ? "Rate limit hit! wait 60s."
//           : "Generation failed.",
//       );
//     }
//   };

//   const saveToDB = async (tripData) => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));
//       const docId = Date.now().toString();

//       await setDoc(doc(db, "trips-ai", docId), {
//         userSelection: formData,
//         tripData: tripData,
//         userEmail: user?.email,
//         id: docId,
//       });
//       setLoading(false);
//       toast.success("Trip Generated");
//       navigate("/trips/" + docId);
//     } catch (error) {
//       setLoading(false);
//       console.error("FULL DATABASE ERROR:", error);
//       toast.error("Failed to save to Database.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flexCenter flex-col  p-4">
//         <div className="relative">
//           <div className=" absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-25" />
//           <div className="relative bg-white p-4 rounded-full shadow-xl">
//             <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
//           </div>
//         </div>
//         <h3 className="mt-8 text-gray-900">
//           Curating your trip to {formData.destination?.label?.split(",")[0]}...
//         </h3>
//         <p className="mt-2 text-gray-500 animate-pulse">
//           Our AI is finding the best stays and hidden gems...
//         </p>
//       </div>
//     );
//   }

//   //Planner Form View
//   return (
//     <div className="max-padd-container flexCenter pt-18 h-screen">
//       {/* Container */}
//       <div className="w-full max-w-3xl min-h-[86vh] sm:min-h-[80vh] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
//         {/* Progress Bar */}
//         <div className="h-2 bg-indigo-100 w-full">
//           <div
//             className="h-full bg-indigo-600 transition-all duration-500 ease-out"
//             style={{ width: `${(step / 3) * 100}%` }}
//           />
//         </div>
//         <div className="p-5 md:p-12 flex flex-col flex-1">
//           {/* Steps Indicator */}
//           <div className="flexCenter space-x-2 mb-8">
//             {[1, 2, 3].map((s) => (
//               <div
//                 key={s}
//                 className={`h-2 rounded-full transition-all duration-300 ${step === s ? "w-8 bg-indigo-600" : step > s ? "w-2 bg-indigo-600" : "w-2 bg-gray-200"} `}
//               />
//             ))}
//           </div>
//           <div className="flex-1 flex flex-col pt-2 sm:pt-12">
//             {/* Step1: Destination & Days */}
//             {step == 1 && (
//               <div className="space-y-6">
//                 <div className="text-center mb-8">
//                   <h3 className="mb-2">Where's your next adventure?</h3>
//                   <p>Select your destination and duration (max 7 days).</p>
//                 </div>

//                 <div className="space-y-4">
//                   <label className="text-sm font-medium ml-1">
//                     Destination
//                   </label>
//                   <GooglePlacesAutocomplete
//                     apiKey={placesApiKey}
//                     selectProps={{
//                       value: formData.destination,
//                       onChange: (v) => handleInputChange("destination", v),
//                       className: "w-full",
//                       placeholder: "Search for a city...",
//                     }}
//                   />
//                   <div className="grid grid-cols-1 gap-4 pt-2">
//                     <label className="text-sm font-medium">
//                       How many Days?
//                     </label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400 " />
//                       <input
//                         type="number"
//                         min={1}
//                         max={7}
//                         placeholder="1"
//                         value={formData.noOfDays}
//                         onChange={(e) =>
//                           handleInputChange("noOfDays", e.target.value)
//                         }
//                         className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Step-2: Budget */}
//             {step == 2 && (
//               <div className="space-y-8">
//                 <div className="text-center">
//                   <h3 className="mb-2">What's your budget??</h3>
//                   <p>We'll find spots that match your wallet.</p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
//                   {BUDGET_OPTIONS.map((opt) => (
//                     <button
//                       key={opt.id}
//                       onClick={() => handleInputChange("budget", opt.id)}
//                       className={`p-4 rounded-xl border-2 transition-all flexCenter flex-col gap-3 ${formData.budget === opt.id ? "border-indigo-600 bg-indigo-50 shadow-md sacle-105" : "border-gray-100 hover:border-indigo-200"}`}
//                     >
//                       <div
//                         className={`p-3 rounded-full ${formData.budget === opt.id ? "bg-indigo-100" : "bg-gray-100"}`}
//                       >
//                         {opt.icon}
//                       </div>
//                       <h5 className="font-bold">{opt.label}</h5>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Step 3: traveler Type */}
//             {step === 3 && (
//               <div className="space-y-8">
//                 <div className="text-center">
//                   <h3 className="mb-2">Who are you travelling with?</h3>
//                   <p>Customize your experience based on your company.</p>
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
//                   {traveler_OPTIONS.map((opt) => (
//                     <button
//                       key={opt.id}
//                       onClick={() => handleInputChange("traveler", opt.id)}
//                       className={`p-4 rounded-xl border-2 transition-all flexCenter flex-col gap-3 ${formData.traveler === opt.id ? "border-indigo-600 bg-indigo-50 shadow-md sacle-105" : "border-gray-100 hover:border-indigo-200"}`}
//                     >
//                       <span className="text-3xl">{opt.icon}</span>
//                       <div>
//                         <h5 className="font-bold">{opt.title}</h5>
//                         <p className="opacity-70">{opt.desc}</p>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Navigation */}
//           <div className="flexBetween pt-6 border-t border-gray-100">
//             <button
//               onClick={handleBack}
//               className={`text-gray-500 hover:text-gray-900 font-medium px-4 py-2 ${step === 1 && "invisible"}`}
//             >
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               disabled={
//                 (step === 1 && !formData.destination) ||
//                 (step === 1 && !formData.noOfDays) ||
//                 (step === 2 && !formData.budget) ||
//                 (step === 3 && !formData.traveler)
//               }
//               className={`flex items-center px-8 py-3 rounded-xl font-bold text-white transition-all shadow-lg ${(step === 1 && !formData.destination) || (step === 1 && !formData.noOfDays) || (step === 2 && !formData.budget) || (step === 3 && !formData.traveler) ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"}`}
//             >
//               {step === 3 ? "Generate Plan" : "Continue"}
//               {step === 3 ? (
//                 <CheckCircle className="ml-2 w-5 h-5" />
//               ) : (
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       <LoginDialog
//         open={openDialog}
//         onClose={() => setOpenDialog(false)}
//         onLoginSuccess={generateTrip}
//       />
//     </div>
//   );
// };

const CreateTrip = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: null,
    noOfDays: "",
    traveler: "",
    budget: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      generateTrip();
    }
  };

  // --- LOGIC RESTORED HERE ---
  const generateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      return setOpenDialog(true);
    }

    if (
      !formData.destination ||
      !formData.noOfDays ||
      !formData.budget ||
      !formData.traveler
    ) {
      toast.error("Please fill all the details");
      return;
    }

    if (formData.noOfDays > 7) {
      toast.error("AI can currently generate up to 7 days only.");
      return;
    }

    setLoading(true);

    const DYNAMIC_PROMPT = `Generate a travel plan for Location: ${formData?.destination?.label} for ${formData?.noOfDays} days for a ${formData?.traveler} traveler on ${formData?.budget} budget. Return the result strictly as a single JSON object using camelCase keys, the travel plan with trip note and must feature hotelsOptions array, each hotel with hotelName, hotelAddress, priceRange, imageUrl, rating, description, and a coordinates, alongside an itinerary array of daily plans. Each day must include a dayNumber, theme, and an activities array, where each activity contains activityName, description, imageUrl, ticketPrice, timeRange, timeToTravel and coordinates`;

    try {
      const tripData = await generateTripWithAI(DYNAMIC_PROMPT);
      await saveToDB(tripData); // Uses saveToDB and tripData
    } catch (error) {
      console.error("AI Error:", error);
      setLoading(false);
      toast.error(
        error.message?.includes("429")
          ? "Rate limit hit! wait 60s."
          : "Generation failed.",
      );
    }
  };

  const saveToDB = async (tripData) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const docId = Date.now().toString();

      await setDoc(doc(db, "trips-ai", docId), {
        userSelection: formData,
        tripData: tripData,
        userEmail: user?.email,
        id: docId,
      });

      setLoading(false); // Uses setLoading
      toast.success("Trip Generated");
      navigate("/trips/" + docId); // Uses navigate
    } catch (error) {
      setLoading(false);
      console.error("DATABASE ERROR:", error);
      toast.error("Failed to save to Database.");
    }
  };

  // 1. IMPROVED LOADING VIEW (Dark Mode Ready)
  if (loading) {
    return (
      <div className="min-h-screen bg-background flexCenter flex-col p-6 transition-colors duration-500">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
          <div className="relative bg-card p-6 rounded-full shadow-2xl border border-border">
            <Loader2 className="w-14 h-14 text-primary animate-spin" />
          </div>
        </div>
        <h3 className="mt-10 text-foreground font-bold text-xl text-center">
          Curating your trip to {formData.destination?.label?.split(",")[0]}...
        </h3>
        <p className="mt-3 text-muted-foreground animate-pulse text-center max-w-xs">
          Our AI is finding the best stays and hidden gems...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 pt-24 pb-12 px-4 flexCenter">
      {/* <div className="w-full max-w-4xl bg-card dark:bg-card/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-border overflow-hidden flex flex-col transition-all"> */}

      <div className="w-full max-w-4xl h-auto md:min-h-[80vh] bg-card dark:bg-card/40 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-border overflow-hidden flex flex-col transition-all">
        {/* Progress bar */}
        <div className="h-1.5 bg-secondary w-full">
          <div
            className="h-full bg-primary transition-all duration-700 ease-in-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="p-5 md:p-14 flex flex-col flex-1">
          {/* Step Indicator */}
          <div className="flexCenter space-x-3 mb-6 md:mb-10">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  step === s
                    ? "w-12 bg-primary"
                    : step > s
                      ? "w-3 bg-primary"
                      : "w-3 bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {/* STEP 1: DESTINATION */}
            {step === 1 && (
              <div className="space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                    Where's your next adventure?
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Select your destination and duration (max 7 days).
                  </p>
                </div>

                <div className="space-y-8 md:space-y-12 max-w-xl mx-auto w-full">
                  <div className="mb-8 md:mb-10">
                    <label className="block mb-3 text-xl font-semibold ml-1 text-foreground">
                      Destination
                    </label>
                    <GooglePlacesAutocomplete
                      apiKey={placesApiKey}
                      selectProps={{
                        value: formData.destination,
                        onChange: (v) => handleInputChange("destination", v),
                        placeholder: "Search for a city...",
                        isClearable: true,
                        styles: {
                          control: (provided) => ({
                            ...provided,
                            backgroundColor: "var(--background)",
                            borderRadius: "1rem",
                            padding: "6px",
                            border: "1px solid var(--border)",
                            color: "var(--foreground)",
                          }),
                          input: (provided) => ({
                            ...provided,
                            color: "var(--foreground)",
                          }),
                          singleValue: (provided) => ({
                            ...provided,
                            color: "var(--foreground)",
                          }),
                          menu: (provided) => ({
                            ...provided,
                            backgroundColor: "var(--card)",
                            border: "1px solid var(--border)",
                            borderRadius: "1rem",
                            zIndex: 50,
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isFocused
                              ? "var(--primary)" // Highlights with your indigo/purple on hover
                              : "transparent",
                            color: state.isFocused
                              ? "var(--primary-foreground)" // Makes text white/readable on hover
                              : "var(--foreground)",
                            cursor: "pointer",
                            active: {
                              backgroundColor: "var(--primary)",
                            },
                          }),
                          placeholder: (provided) => ({
                            ...provided,
                            color: "var(--muted-foreground)",
                          }),
                        },
                      }}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block mb-3 text-sm md:text-base font-semibold ml-1 text-foreground">
                      How many Days?
                    </label>
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <input
                        type="number"
                        min={1}
                        max={7}
                        placeholder="Ex. 3"
                        value={formData.noOfDays}
                        onChange={(e) =>
                          handleInputChange("noOfDays", e.target.value)
                        }
                        className="block w-full pl-12 pr-4 py-4 border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-background text-foreground text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: BUDGET */}
            {step === 2 && (
              // <div className="space-y-4 md:space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              //   <div className="text-center">
              //     <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              //       What's the budget? 💰
              //     </h2>
              //     <p className="text-muted-foreground text-lg">
              //       We'll find spots that match your wallet.
              //     </p>
              //   </div>

              <div className="space-y-4 md:space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="text-center">
                  {/* 2. SCALE: Smaller header text for mobile */}
                  <h2 className="text-xl md:text-4xl font-extrabold tracking-tight mb-1">
                    What's the budget? 💰
                  </h2>
                  <p className="text-muted-foreground text-xs md:text-lg">
                    We'll find spots that match your wallet.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      // onClick={() => handleInputChange("budget", opt.id)}
                      onClick={() =>
                        handleInputChange(
                          "budget",
                          formData.budget === opt.id ? "" : opt.id,
                        )
                      }
                      className={`group p-3 md:p-6 rounded-3xl border-2 transition-all duration-300 flexCenter flex-col gap-4 active:scale-95 ${
                        formData.budget === opt.id
                          ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      {/* <div
                        className={`p-4 rounded-2xl transition-colors ${formData.budget === opt.id ? "bg-primary text-white" : "bg-secondary"}`}
                      >
                        {opt.icon}
                      </div> */}
                      <div
                        className={` p-2.5 md:p-4 rounded-xl md:rounded-2xl transition-colors ${
                          formData.budget === opt.id
                            ? "bg-primary text-white"
                            : "bg-secondary text-primary dark:text-indigo-600"
                        }`}
                      >
                        {/* Ensuring the icon inside is large enough and has high contrast */}
                        <span className="text-2xl brightness-110">
                          {opt.icon}
                        </span>
                      </div>
                      {/* <h4 className="font-bold text-xl">{opt.label}</h4> */}
                      <div className="text-left md:text-center">
                        <h4 className="font-bold text-sm md:text-xl text-foreground">
                          {opt.label}
                        </h4>
                        {/* Added a hidden description on mobile if needed, or just keep label */}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: TRAVELERS */}
            {step === 3 && (
              <div className="space-y-3 md:space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="text-center">
                  <h2 className="text-xl md:text-4xl font-extrabold tracking-tight mb-0.5">
                    Traveling with? 👥
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Customize your adventure based on your squad.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-4 pt-1">
                  {traveler_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      // onClick={() => handleInputChange("traveler", opt.id)}
                      onClick={() => handleInputChange("traveler", formData.traveler === opt.id ? "" : opt.id)}
                      className={`group p-2.5 md:p-5 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 flex flex-col items-center text-center gap-1.5 md:gap-3 active:scale-95 ${
                        formData.traveler === opt.id
                          ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="text-2xl md:text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">
                        {opt.icon}
                      </span>
                      <div>
                        <h5 className="font-bold text-lg">{opt.title}</h5>
                        <p className="text-[10px] md:text-xs text-muted-foreground leading-tight mt-1">
                          {opt.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* NAVIGATION */}
          <div className="flexBetween pt-6 mt-6 md:pt-10 md:mt-10 border-t border-border">
            <button
              onClick={handleBack}
              className={`flex items-center text-muted-foreground hover:text-foreground font-semibold px-6 py-2 transition-all ${step === 1 ? "invisible" : "visible"}`}
            >
              <ChevronLeft className="mr-2 h-5 w-5" /> Back
            </button>

            <Button
              onClick={handleNext}
              disabled={
                (step === 1 && (!formData.destination || !formData.noOfDays)) ||
                (step === 2 && !formData.budget) ||
                (step === 3 && !formData.traveler)
              }
              className="px-10 py-7 text-lg font-bold rounded-2xl shadow-xl transition-all duration-300"
            >
              {step === 3 ? "Generate Plan" : "Continue"}
              {step === 3 ? (
                <CheckCircle className="ml-2 h-6 w-6" />
              ) : (
                <ArrowRight className="ml-2 h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <LoginDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onLoginSuccess={generateTrip}
      />
    </div>
  );
};

export default CreateTrip;
