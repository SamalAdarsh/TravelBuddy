import { getPLacePhoto } from "@/services/placePhotoApi";
import { Banknote, Clock, MapPin, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyTripCard = ({ trip }) => {
  const [placePhoto, setPlacePhoto] = useState("");
  useEffect(() => {
    if (!trip?.userSelection?.destination?.label) return;

    const loadPhoto = async () => {
      const photoUrl = await getPLacePhoto(
        trip?.userSelection?.destination?.label,
      );
      setPlacePhoto(photoUrl);
    };

    loadPhoto();
  }, [trip]);
  return (
    <Link to={'/trips/' + trip.id}  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="h-40 relative">
        <img src={placePhoto ? placePhoto : "/private.png"} alt={trip?.userSelection?.destination?.label} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div>
        <h4 className="text-lg my-2 line-clamp-1">📍{trip?.userSelection?.destination?.label}</h4>
        <div>
          <div className="flexBetween border-b border-gray-100 p-2">
            <div className="flex items-center gap-2 text-sm">
              <Banknote className="h-4 w-4" />
              <h6>Budget</h6>
            </div>
            <p>{trip?.userSelection?.budget}</p>
          </div>
          <div className="flexBetween border-b border-gray-100 p-2">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4" />
              <h6>Traveler</h6>
            </div>
            <p>{trip?.userSelection?.traveler}</p>
          </div>
          <div className="flexBetween border-b border-gray-100 p-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <h6>No. of Days</h6>
            </div>
            <p>{trip?.userSelection?.noOfDays}</p>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <h6>Location:</h6>
              <p>{trip?.userSelection?.destination?.label}</p>
            </div>
            <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg leading-relaxed line-clamp-6">
              {trip?.tripData?.tripNote}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyTripCard;
