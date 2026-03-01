import { geminiApiKey } from "@/lib/constants";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: geminiApiKey });
const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a travel plan for Location: New York for 2 days for a couple traveler on economy budget. Return the result strictly as a single JSON object using camelCase keys, the travel plan with trip note and must feature hotelsOptions array, each hotel with hotelName, hotelAddress, priceRange, imageUrl, rating, description, and a coordinates, alongside an itinerary array of daily plans. Each day must include a dayNumber, theme, and an activities array, where each activity contains activityName, description, imageUrl, ticketPrice, timeRange, timeToTravel and coordinates",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: JSON.stringify({
            tripNote:
              "This 2-day itinerary for New York City is designed for a couple traveling on an economy budget, focusing on iconic free and low-cost attractions. It balances sightseeing with leisurely strolls, offering a mix of bustling city life and serene green spaces. Public transportation (subway and walking) is recommended for getting around efficiently and affordably.",
            hotelsOptions: [
              {
                hotelName: "Moxy NYC Chelsea",
                hotelAddress:
                  "105 W 28th St, New York, NY 10001, United States",
                priceRange: "$180 - $250",
                imageUrl:
                  "https://www.marriott.com/content/dam/marriott-product/moxy-chelsea/en-us/photos/MoxyNYC_Chelsea_Exterior.jpg",
                rating: "8.5/10",
                description:
                  "A stylish boutique hotel in the heart of Chelsea's Flower District, featuring modern, cozy rooms with floor-to-ceiling windows, a lively rooftop lounge with 360-degree city views, and multiple dining options. It offers free Wi-Fi and is pet-friendly.",
                coordinates: {
                  latitude: 40.7471,
                  longitude: -73.9934,
                },
              },
              {
                hotelName: "The Jane Hotel",
                hotelAddress: "113 Jane St, New York, NY 10014, United States",
                priceRange: "$130 - $200",
                imageUrl:
                  "https://assets.hotelplanner.com/images/hotels/812165_1.jpg",
                rating: "7.5/10",
                description:
                  "A historic West Village landmark, originally built as a sailors' lodging, offering unique and quirky rooms. It's known for its affordable rates, central location near the Meatpacking District, High Line, and Whitney Museum, making it a great budget-friendly option with character.",
                coordinates: {
                  latitude: 40.7381,
                  longitude: -74.0076,
                },
              },
              {
                hotelName: "Pod 51 Hotel",
                hotelAddress:
                  "230 East 51st Street, New York, NY 10022, United States",
                priceRange: "$100 - $180",
                imageUrl:
                  "https://content.r9cdn.net/rimg/himg/68/d9/15/expediav2-127907-59c089-668516.jpg",
                rating: "8.3/10",
                description:
                  "A modern and compact hotel in Midtown East, offering 'pod' style accommodations for budget-conscious travelers. Features include flat-screen TVs, free WiFi, a rooftop garden, and an on-site lounge. Conveniently located near Rockefeller Center and Grand Central Terminal.",
                coordinates: {
                  latitude: 40.7579,
                  longitude: -73.9678,
                },
              },
            ],
            itinerary: [
              {
                dayNumber: 1,
                theme: "Iconic Landmarks & Downtown Charm",
                activities: [
                  {
                    activityName: "Staten Island Ferry Ride",
                    description:
                      "Enjoy a free 25-minute scenic ferry ride offering stunning views of the Manhattan skyline, the Statue of Liberty, and Ellis Island.",
                    imageUrl:
                      "https://t3.ftcdn.net/jpg/04/00/08/94/360_F_400089454_t3p9gO0rR0k4iM3n5fJ8hY0p7l6fJ3h4.jpg",
                    ticketPrice: "Free",
                    timeRange: "9:00 AM - 10:00 AM",
                    timeToTravel: "N/A (Starting point)",
                    coordinates: {
                      latitude: 40.7013332,
                      longitude: -74.0133104,
                    },
                  },
                  {
                    activityName: "Wall Street & Charging Bull",
                    description:
                      "Explore the heart of the financial district, see the iconic Charging Bull sculpture, and experience the bustling energy of Wall Street.",
                    imageUrl:
                      "https://media.istockphoto.com/id/1324700055/photo/charging-bull-aka-the-wall-street-bull-bronze-sculpture-on-broadway-in-the-financial-district.jpg?s=612x612&w=0&k=20&c=N7lB2B9F0-w3B2x7B8C4l4v5M6h0_3D4E7J2F1G0I8k=",
                    ticketPrice: "Free",
                    timeRange: "10:15 AM - 11:30 AM",
                    timeToTravel:
                      "10 minutes walk from Staten Island Ferry Terminal",
                    coordinates: {
                      latitude: 40.705574,
                      longitude: -74.013588,
                    },
                  },
                  {
                    activityName: "Walk the Brooklyn Bridge",
                    description:
                      "Stroll across one of NYC's most famous landmarks, the Brooklyn Bridge, offering breathtaking panoramic views of Manhattan, Brooklyn, and the East River.",
                    imageUrl:
                      "https://media.istockphoto.com/id/1149480112/photo/walking-on-brooklyn-bridge.jpg?s=612x612&w=0&k=20&c=G6Y4T0H9J8L7K5M3N2O1P0Q8R7S6T5U4V3W2X1Y0Z=",
                    ticketPrice: "Free",
                    timeRange: "12:00 PM - 1:30 PM",
                    timeToTravel:
                      "15 minutes walk from Charging Bull to Manhattan entrance (near City Hall)",
                    coordinates: {
                      latitude: 40.7135,
                      longitude: -74.0028,
                    },
                  },
                  {
                    activityName: "Times Square Immersion",
                    description:
                      "Experience the electrifying energy and dazzling neon lights of Times Square, especially vibrant after dark. Enjoy people-watching and street performers.",
                    imageUrl:
                      "https://t3.ftcdn.net/jpg/06/66/17/80/360_F_666178000_15Q8S1L0k3q8m0y0m9g9b0t0h0s0v0u0.jpg",
                    ticketPrice: "Free",
                    timeRange: "6:00 PM - 8:00 PM",
                    timeToTravel:
                      "20-30 minutes by subway from Brooklyn Bridge area to Times Sq-42 St",
                    coordinates: {
                      latitude: 40.7577,
                      longitude: -73.9857,
                    },
                  },
                ],
              },
              {
                dayNumber: 2,
                theme: "Parks, Culture & Elevated Views",
                activities: [
                  {
                    activityName:
                      "Central Park Exploration (Bethesda Terrace & Fountain)",
                    description:
                      "Discover the iconic Bethesda Terrace and Fountain, a stunning architectural and natural centerpiece of Central Park, perfect for a leisurely stroll.",
                    imageUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bethesda_Terrace_and_Fountain_Central_Park_NY.jpg/1200px-Bethesda_Terrace_and_Fountain_Central_Park_NY.jpg",
                    ticketPrice: "Free",
                    timeRange: "9:30 AM - 11:30 AM",
                    timeToTravel:
                      "10-15 minutes by subway from Midtown (depending on hotel location)",
                    coordinates: {
                      latitude: 40.77431,
                      longitude: -73.97083,
                    },
                  },
                  {
                    activityName: "Grand Central Terminal Visit",
                    description:
                      "Marvel at the majestic Beaux-Arts architecture, the celestial ceiling mural, and the bustling Main Concourse of this historic transportation hub.",
                    imageUrl:
                      "https://media.istockphoto.com/id/1324700055/photo/charging-bull-aka-the-wall-street-bull-bronze-sculpture-on-broadway-in-the-financial-district.jpg?s=612x612&w=0&k=20&c=N7lB2B9F0-w3B2x7B8C4l4v5M6h0_3D4E7J2F1G0I8k=",
                    ticketPrice: "Free",
                    timeRange: "12:00 PM - 1:00 PM",
                    timeToTravel:
                      "5-10 minutes by subway from Central Park (e.g., 42 St-Grand Central)",
                    coordinates: {
                      latitude: 40.7527,
                      longitude: -73.9772,
                    },
                  },
                  {
                    activityName:
                      "New York Public Library (Schwarzman Building)",
                    description:
                      "Explore the grandeur of the Stephen A. Schwarzman Building, home to stunning architecture, the famous Rose Main Reading Room, and various free exhibitions.",
                    imageUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Rose_Main_Reading_Room_NYC_Public_Library.jpg/1024px-The_Rose_Main_Reading_Room_NYC_Public_Library.jpg",
                    ticketPrice: "Free",
                    timeRange: "1:15 PM - 2:30 PM",
                    timeToTravel: "5 minutes walk from Grand Central Terminal",
                    coordinates: {
                      latitude: 40.75306,
                      longitude: -73.98194,
                    },
                  },
                  {
                    activityName: "The High Line Walk",
                    description:
                      "Enjoy a leisurely stroll along this elevated urban park built on a historic railway line, featuring contemporary art, diverse gardens, and unique cityscapes.",
                    imageUrl:
                      "https://media.istockphoto.com/id/486252994/photo/the-high-line-in-new-york-city.jpg?s=612x612&w=0&k=20&c=7d3B0R9J8L7K5M3N2O1P0Q8R7S6T5U4V3W2X1Y0Z=",
                    ticketPrice: "Free",
                    timeRange: "3:30 PM - 5:30 PM",
                    timeToTravel:
                      "15-20 minutes by subway from NYPL (e.g., from 42nd St-Bryant Park to 14th St-8th Ave, then walk to Gansevoort entrance)",
                    coordinates: {
                      latitude: 40.7397,
                      longitude: -74.0076,
                    },
                  },
                ],
              },
            ],
          }),
        },
      ],
    },
  ],
});

// Main Function to generate the trip

export async function generateTripWithAI(DYNAMIC_PROMPT) {
  try {
    const response = await chat.sendMessage({
      message: DYNAMIC_PROMPT,
    });

    const textResponse = response.text;

    // console.log("Chat response:", textResponse);

    //Cleaning the String: remove.markdown JSON formatting if the AI includes it
    const cleanResponse = textResponse.replace(/```json|```/g, "").trim()
    // console.log("Clean response:", cleanResponse);

  } catch (error) {
    console.error("Error generating trip:", error);
    throw error
  }
}
