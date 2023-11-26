const categories= {
    "transportation": {
      "gas_car": 151.9,
      "elec_car": 49.5,
      "bicycle": 0,
      "mass_transit": 16.5,
      "dom_flight": 14.5,
      "int_flight": 39.5
    },
    "food": {
      "Beef": 220,
      "Chicken": 64,
      "Pork": 34.5,
      "Fish (wild)": 21.5,
      "Fish (farmed)": 50,
      "Dairy (cheese)": 83,
      "Dairy (milk)": 20.75,
      "Eggs": 31,
      "Rice": 4.4,
      "Wheat": 5.65,
      "Vegetables": 5.2,
      "Fruits": 11.2
    },
    "home": {
      "Electricity (coal)": 1497,
      "Electricity (natural gas)": 937,
      "Electricity (renewable)": 115,
      "Natural gas (heating)": 1308,
      "Oil (heating)": 1942,
      "Propane (heating)": 1569,
      "Water usage": 590
    },
    "general consumption": {
      "Single-use plastic bag": 3.08,
      "Plastic water bottle": 5.28,
      "Aluminum can": 0.44,
      "Paper bag": 0.1,
      "Reusable bag": 0,
      "Smartphone": 11.2,
      "Laptop": 36.8,
      "Desktop computer": 74,
      "LED light bulb": 0.48,
      "Incandescent light bulb": 5.6
    }
  }

  // https://blog.arcadia.com/50-ways-to-reduce-your-carbon-footprint/
  const tips = [
    {
        category: "Transportation",
        tips : [
            "Carpool",
            "Public transportation",
            "Bike",
            "Fly economy class",
            "Travel by car or train instead of plane"
        ]
    },
    {
        category: "Home",
        tips : [
            "Turn off the lights when you leave a room",
            "Unplug electronics not in use",
            "Keep room temperature moderate",
            "Switch to LED bulbs",
            "Do FULL loads of laundry",
            "Take shorter showers",
            "Recycle"
        ]
    },
    {
        category: "Food",
        tips : [
            "Compost",
            "Meatless Monday",
            "Buy locally sourced",
            "Donate excess food",
            "Sustainable restaurants",
            "Store food properly",
            "Cook at home"
        ]
    },
    {
        category: "General",
        tips : [
            "Re-usable water bottle",
            "Buy fair trade clothing/ shop seconhand stores",
            "Buy natural products",
            "Volunteer for community garden",
            "Only shop for things you need"
            
        ]
    },
  ]
  module.exports= {
    categories,
    tips,
  }