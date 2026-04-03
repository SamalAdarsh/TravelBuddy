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
    <Link
      to={"/trips/" + trip.id}
      // className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      className="group bg-card dark:bg-card/40 backdrop-blur-sm rounded-[2rem] shadow-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
    >
      <div className="h-40 relative">
        <img
          src={placePhoto ? placePhoto : "/private.png"}
          alt={trip?.userSelection?.destination?.label}
          // className="w-full h-full object-cover rounded-lg"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        {/* <h4 className="text-lg my-2 line-clamp-1">
          📍{trip?.userSelection?.destination?.label}
        </h4> */}
        <h4 className="text-lg font-bold text-foreground mb-4 line-clamp-1 flex items-center gap-2">
           <MapPin className="h-4 w-4 text-primary" />
           {trip?.userSelection?.destination?.label}
        </h4>
       <div className="space-y-3">
          <div className="flexBetween border-b border-border/60 pb-2">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
             <Banknote className="h-3.5 w-3.5 text-primary opacity-80" />
              <h6>Budget</h6>
            </div>
            <p className="text-foreground text-sm font-semibold capitalize">{trip?.userSelection?.budget}</p>
          </div>
         <div className="flexBetween border-b border-border/60 pb-2">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Users className="h-3.5 w-3.5 text-primary opacity-80" />
              <h6>Traveler</h6>
            </div>
            <p className="text-foreground text-sm font-semibold capitalize">{trip?.userSelection?.traveler}</p>
          </div>
         <div className="flexBetween border-b border-border/60 pb-2">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary opacity-80" />
              <h6>No. of Days</h6>
            </div>
            <p className="text-foreground text-sm font-semibold">{trip?.userSelection?.noOfDays} Days</p>
          </div>
         <div className="flex flex-col gap-3 pt-4 mt-auto">
            <div className="flex items-center gap-2 text-sm text-foreground font-medium">
              <MapPin className="h-4 w-4 text-primary" />
              <h6 className="font-bold">Location:</h6>
              <p className="text-muted-foreground line-clamp-1">
                {trip?.userSelection?.destination?.label}
              </p>
            </div>
            <p className="text-xs text-muted-foreground bg-secondary/50 dark:bg-muted/10 p-3 rounded-xl leading-relaxed italic border border-border/30 line-clamp-4">
              {trip?.tripData?.tripNote}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyTripCard;
