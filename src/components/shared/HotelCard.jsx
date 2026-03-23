import { MapPin, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { getPLacePhoto } from "@/services/placePhotoApi";

const HotelCard = ({ hotel }) => {
  const [placePhoto, setPlacePhoto] = useState("");

  useEffect(() => {
    if (!hotel.hotelName) return;

    const loadPhoto = async () => {
      const photoUrl = await getPLacePhoto(hotel.hotelName);
      setPlacePhoto(photoUrl);
    };

    loadPhoto();
  }, [hotel]);
  return (
    hotel && (
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel?.hotelName +
          "," +
          hotel?.hotelAddress
        }
        target="_blank"
      >
        {/* <div className="bg-white rounded-2xl shdow-sm border border-gray-100 overflow-hidden cursor-pointer"> */}
        <div className="group bg-card dark:bg-card/40 backdrop-blur-sm rounded-[2rem] border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
          <div className="h-44 bg-muted  relative  overflow-hidden">
            <img
              src={placePhoto ? placePhoto : `/private.png`}
              alt={hotel.hotelName}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md shadow-sm text-xs font-bold flex items-center"> */}
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-sm text-xs font-bold flex items-center dark:text-white border border-white/20">
              <Star className="w-3.5 h-3.5 text-yellow-400 mr-1 fill-yellow-400" />{" "}
              {hotel.rating}
            </div>
          </div>
          <div className="p-6">
 
            <h5 className="text-xl font-bold text-foreground leading-tight line-clamp-1">{hotel.hotelName}</h5>
            <p className="text-l text-muted-foreground mt-1.5 mb-3 flex items-center gap-1">
              {/* 📍{hotel.hotelAddress} */}
              <MapPin size={14} className="text-primary" />
              <span className="line-clamp-1">{hotel.hotelAddress}</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2 mb-4 leading-relaxed">
              {hotel.description}
            </p>
            <div className="flexBetween items-end pt-4 border-t border-border">
              <div>
                <h5 className="text-xl font-bold text-foreground">{hotel.priceRange.split(" p")[0]}</h5>
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                  est per night
                </span>
              </div>
              <Button  variant="destructive">View Deal</Button>
            </div>
          </div>
        </div>
      </Link>
    )
  );
};

export default HotelCard;
