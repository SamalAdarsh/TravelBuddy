import { BUDGET_OPTIONS, TRAVELLER_OPTIONS } from "@/assets/data";
import { placesApiKey } from "@/lib/Constants";
import { ArrowRight, Calendar, CheckCircle, Loader2 } from "lucide-react";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";

const CreateTrip = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    destination: null,
    noOfDays: "",
    traveller: "",
    budget: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else generateTrip();
  };

  const generateTrip = () => {
    if (
      !formData.destination ||
      !formData.noOfDays ||
      !formData.budget ||
      !formData.traveller
    ) {
      toast.error("Please fill all the details");
    }

    if (formData.noOfDays > 7) {
      toast.error("AI can currently generate upto 7 days only.");
    }

    setLoading(true);

    console.log(formData);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flexCenter flex-col  p-4">
        <div className="relative">
          <div className=" absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-25" />
          <div className="relative bg-white p-4 rounded-full shadow-xl">
            <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
          </div>
        </div>
        <h3 className="mt-8 text-gray-900">Curating your trip to {formData.destination?.label?.split(',')[0]}...</h3>
        <p className="mt-2 text-gray-500 animate-pulse">Our AI is finding the best stays and hidden gems...</p>
      </div>
    );
  }


  //Planner Form View
  return (
    <div className="max-padd-container flexCenter pt-18 h-screen">
      {/* Container */}
      <div className="w-full max-w-3xl min-h-[86vh] sm:min-h-[80vh] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
        {/* Progress Bar */}
        <div className="h-2 bg-indigo-100 w-full">
          <div
            className="h-full bg-indigo-600 transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
        <div className="p-5 md:p-12 flex flex-col flex-1">
          {/* Steps Indicator */}
          <div className="flexCenter space-x-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${step === s ? "w-8 bg-indigo-600" : step > s ? "w-2 bg-indigo-600" : "w-2 bg-gray-200"} `}
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col pt-2 sm:pt-12">
            {/* Step1: Destination & Days */}
            {step == 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="mb-2">Where's your next adventure?</h3>
                  <p>Select your destination and duration (max 7 days).</p>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium ml-1">
                    Destination
                  </label>
                  <GooglePlacesAutocomplete
                    apiKey={placesApiKey}
                    selectProps={{
                      value: formData.destination,
                      onChange: (v) => handleInputChange("destination", v),
                      className: "w-full",
                      placeholder: "Search for a city...",
                    }}
                  />
                  <div className="grid grid-cols-1 gap-4 pt-2">
                    <label className="text-sm font-medium">
                      How many Days?
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400 " />
                      <input
                        type="number"
                        min={1}
                        max={7}
                        placeholder="1"
                        value={formData.noOfDays}
                        onChange={(e) =>
                          handleInputChange("noOfDays", e.target.value)
                        }
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step-2: Budget */}
            {step == 2 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="mb-2">What's your budget??</h3>
                  <p>We'll find spots that match your wallet.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleInputChange("budget", opt.id)}
                      className={`p-4 rounded-xl border-2 transition-all flexCenter flex-col gap-3 ${formData.budget === opt.id ? "border-indigo-600 bg-indigo-50 shadow-md sacle-105" : "border-gray-100 hover:border-indigo-200"}`}
                    >
                      <div
                        className={`p-3 rounded-full ${formData.budget === opt.id ? "bg-indigo-100" : "bg-gray-100"}`}
                      >
                        {opt.icon}
                      </div>
                      <h5 className="font-bold">{opt.label}</h5>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Traveller Type */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="mb-2">Who are you travelling with?</h3>
                  <p>Customize your experience based on your company.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
                  {TRAVELLER_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleInputChange("traveller", opt.id)}
                      className={`p-4 rounded-xl border-2 transition-all flexCenter flex-col gap-3 ${formData.traveller === opt.id ? "border-indigo-600 bg-indigo-50 shadow-md sacle-105" : "border-gray-100 hover:border-indigo-200"}`}
                    >
                      <span className="text-3xl">{opt.icon}</span>
                      <div>
                        <h5 className="font-bold">{opt.title}</h5>
                        <p className="opacity-70">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flexBetween pt-6 border-t border-gray-100">
            <button
              onClick={handleBack}
              className={`text-gray-500 hover:text-gray-900 font-medium px-4 py-2 ${step === 1 && "invisible"}`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !formData.destination) ||
                (step === 1 && !formData.noOfDays) ||
                (step === 2 && !formData.budget) ||
                (step === 3 && !formData.traveller)
              }
              className={`flex items-center px-8 py-3 rounded-xl font-bold text-white transition-all shadow-lg ${(step === 1 && !formData.destination) || (step === 1 && !formData.noOfDays) || (step === 2 && !formData.budget) || (step === 3 && !formData.traveller) ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 active:scale-95"}`}
            >
              {step === 3 ? "Generate Plan" : "Continue"}
              {step === 3 ? (
                <CheckCircle className="ml-2 w-5 h-5" />
              ) : (
                <ArrowRight className="ml-2 w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
