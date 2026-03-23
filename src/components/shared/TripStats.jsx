import { Banknote, Clock, Info, Users } from "lucide-react";
import React from "react";

const TripStats = ({ trip }) => {
  return (
    <div className="bg-card dark:bg-card/40 backdrop-blur-sm rounded-[2rem] shadow-xl border border-border p-6 transition-all duration-500">
      <h4 className="text-foreground font-bold mb-6 flex items-center gap-2">
        <div className="p-1.5 bg-primary/10 rounded-md">
          <Info className="h-4 w-4 text-indigo-600" />
        </div>
        Trip Overview
      </h4>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-3 border-b border-border">
          <div className="flex items-center gap-2 text-l font-medium text-muted-foreground">
            <Banknote className="h-4 w-4 text-primary" />
            <h6>Budget</h6>
          </div>
          <p className="text-foreground font-semibold capitalize">
            {trip?.userSelection?.budget}
          </p>
        </div>
        <div className="flex justify-between items-center pb-3 border-b border-border">
          <div className="flex items-center gap-2 text-l font-medium text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <h6>Traveler</h6>
          </div>
          <p className="text-foreground font-semibold capitalize">
            {trip?.userSelection?.traveler}
          </p>
        </div>
        <div className="flex justify-between items-center pb-3 border-b border-border">
          <div className="flex items-start gap-2 text-l font-medium text-muted-foreground">
            <Clock className="h-4 w-4 text-primary " />
            <h6>No of days</h6>
          </div>
          <p className="text-foreground font-semibold ">
            {trip?.userSelection?.noOfDays}
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <div className="flex items-start gap-3 text-l font-medium">
            <Users className="h-4 w-4 text-primary" />
            <h6 className="text-muted-foreground text-l ">Location:</h6>
            <p className="text-foreground font-semibold ">
              {trip?.userSelection?.destination?.label}
            </p>
          </div>
          {/* <p className='text-xs text-muted-foreground bg-secondary/50 dark:bg-muted/40 p-4 rounded-2xl leading-relaxed italic border border-border/50'>{trip?.tripData?.tripNote}</p> */}
          <div className="relative pl-5 py-1">
            {/* Indigo accent line on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full opacity-60 shadow-[0_0_8px_rgba(var(--primary),0.4)]" />

            <p className="text-xs md:text-[15px] text-muted-foreground leading-relaxed italic opacity-90">
              "{trip?.tripData?.tripNote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripStats;
