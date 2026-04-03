// import React, { useEffect, useState } from "react";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "@/services/firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { Skeleton } from "@/components/ui/skeleton";
// import MyTripCard from "@/components/shared/MyTripCard";

// const MyTrips = () => {
//     const [userTrips,setUserTrips] = useState([]);
//   const navigate = useNavigate();

//   const getUserTrips = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//       return navigate("/");
//     }
//     const q = query(
//       collection(db, "trips-ai"),
//       where("userEmail", "==", user?.email),
//     );

//     const querySnapshot = await getDocs(q);

//     try {
//       const allTrips = querySnapshot.docs.map((doc) => ({
//         id: doc.id, //always keep the ID!
//         ...doc.data(),
//         // doc.data() is never undefined for query doc snapshots
//       }));

//       setUserTrips(allTrips);
//     } catch (error) {
//       console.log("Error fetching userTrips", error);
//     }
//   };

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     getUserTrips();
//   }, []);
//   return <div className="max-padd-container py-22 xl:py-28">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">{userTrips?.length > 0 ? userTrips?.map((trip,index)=>(
//         <MyTripCard key={index} trip={trip}/>
//     )) :

//     [1,2,3,4].map((index)=>(
//         <div key={index} className="flex flex-col space-y-3">
//          <Skeleton className="h-122 w-77 rounded-xl bg-white" />
//         </div>
//     ))

// }</div>
//   </div>;
// };

// export default MyTrips;

import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import MyTripCard from "@/components/shared/MyTripCard";
import { Map } from "lucide-react";

const MyTrips = () => {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state for better UX
  const navigate = useNavigate();

  const getUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return navigate("/");
    }

    setLoading(true);
    const q = query(
      collection(db, "trips-ai"),
      where("userEmail", "==", user?.email)
    );

    try {
      const querySnapshot = await getDocs(q);
      const allTrips = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUserTrips(allTrips);
    } catch (error) {
      console.log("Error fetching userTrips", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserTrips();
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <div className="max-padd-container py-24 md:py-32">
        
        {/* 1. PAGE HEADER: Consistent with the "Outstanding" UI */}
        <div className="mb-12">
           <h1 className="text-3xl md:text-5xl font-extrabold text-foreground flex items-center gap-3">
             <div className="p-2 bg-primary/10 rounded-xl">
               <Map className="h-8 w-8 text-primary" />
             </div>
             My Adventures
           </h1>
           <p className="text-muted-foreground mt-3 text-lg">
             Explore your past itineraries and upcoming dream trips.
           </p>
        </div>

        {/* 2. TRIPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {userTrips?.length > 0 ? (
            userTrips.map((trip, index) => (
              <MyTripCard key={trip.id || index} trip={trip} />
            ))
          ) : loading ? (
            /* 3. SKELETON FIX: Removed bg-white, added responsive h-80 */
            [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex flex-col space-y-4">
                <Skeleton className="h-80 w-full rounded-[2rem] bg-card dark:bg-card/40 border border-border" />
                <div className="space-y-2 px-2">
                   <Skeleton className="h-4 w-3/4 bg-card" />
                   <Skeleton className="h-3 w-1/2 bg-card" />
                </div>
              </div>
            ))
          ) : (
            /* 4. EMPTY STATE: Shown if no trips are found */
            <div className="col-span-full text-center py-20 bg-card/20 rounded-[2rem] border border-dashed border-border">
               <p className="text-muted-foreground">You haven't planned any trips yet.</p>
               <button 
                 onClick={() => navigate('/create-trip')}
                 className="mt-4 text-primary font-bold hover:underline"
                >
                 Start your first adventure →
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
