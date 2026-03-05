import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebaseConfig";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Calendar } from "lucide-react";
import Itinerary from "@/components/shared/Itinerary";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HotelCard from "@/components/shared/HotelCard";

import Autoplay from "embla-carousel-autoplay";
import TripStats from "@/components/shared/TripStats";
import { getPLacePhoto } from "@/services/placePhotoApi";

const TripDetails = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);
  const navigate = useNavigate();
  const [placePhoto, setPlacePhoto] = useState("");

  const fetchTripData = async () => {
    const docRef = doc(db, "trips-ai", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (tripId) {
      fetchTripData();
    }
  }, [tripId]);

  useEffect(() => {
    if (!trip?.userSelection?.destination?.value?.terms[0].value) return;

    const loadPhoto = async () => {
      const photoUrl = await getPLacePhoto(
        trip?.userSelection?.destination?.value?.terms[0].value,
      );
      setPlacePhoto(photoUrl);
    };

    loadPhoto();
  }, [trip]);

  return (
    trip && (
      <div>
        <div className="min-h-screen bg-background">
          <div className="relative h-88 md:h-111 bg-gray-900">
            <img
              src={placePhoto ? placePhoto : "/private.png"}
              alt=""
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

            <div className="max-padd-container absolute bottom-0 left-0 right-0 text-white">
              <button
                onClick={() => navigate("/create-trip")}
                className="flexCenter gap-2 mb-4 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
              >
                {" "}
                <FaArrowLeftLong /> Plan Another Trip
              </button>
              <h1 className="mb-2 ">
                {trip?.userSelection?.destination?.value?.terms[0].value}
              </h1>
              <p className="max-w-2xl mb-10 text-gray-300">
                {trip?.tripData?.tripNote?.split(".")[0]}
              </p>
            </div>
          </div>
          <div className="max-padd-container py-12">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column -> Iteneraries */}
              <div className="lg:col-span-2 space-y-6">
                <div className="sm:bg-white rounded-2xl sm:shadow-sm sm:border border-gray-100 sm:p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-indigo-600" /> Your
                    Daily Plan
                  </h2>
                  <Itinerary trip={trip} />
                </div>
              </div>
              {/* Right Column -> Hotels & Trips Summary */}
              <div className="space-y-6">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {trip?.tripData?.hotelsOptions.map((hotel, index) => (
                      <CarouselItem key={index}>
                        <HotelCard hotel={hotel} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <TripStats trip={trip} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default TripDetails;
