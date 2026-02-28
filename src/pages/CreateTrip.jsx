import { placesApiKey } from "@/lib/Constants";
import { Calendar } from "lucide-react";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  const [step, setStep] = useState(1);
  const [lodaing, setLoading] = useState(false);
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

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
