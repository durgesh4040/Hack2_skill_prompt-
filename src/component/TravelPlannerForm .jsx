import { useState } from "react";

const TravelPlannerForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    budget: "",
    travelType: "Solo",
    accommodation: "",
    transport: "",
    interests: [],
    activities: [""],
    tripGoal: "",
  });

  const interestOptions = [
    "Adventure",
    "Beaches",
    "Mountains",
    "Nature",
    "Wildlife",
    "Historical Places",
    "Food & Cafes",
    "Nightlife",
    "Shopping",
    "Photography",
    "Spiritual",
    "Relaxation",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  const addActivity = () => {
    setFormData((prev) => ({
      ...prev,
      activities: [...prev.activities, ""],
    }));
  };

  const updateActivity = (index, value) => {
    const updated = [...formData.activities];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, activities: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Submitted!");
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          🌍 Travel Planner (Dark Mode)
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Destination */}
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Dates */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg p-3"
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg p-3"
            />
          </div>

          {/* Travelers & Budget */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3"
            />
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget ₹"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3"
            />
          </div>

          {/* Travel Type */}
          <select
            name="travelType"
            value={formData.travelType}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
          >
            <option>Solo</option>
            <option>Couple</option>
            <option>Family</option>
            <option>Friends</option>
            <option>Business</option>
          </select>

          {/* Interests */}
          <div>
            <p className="mb-2 font-semibold text-gray-300">Interests</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {interestOptions.map((interest) => (
                <label key={interest} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          {/* Accommodation & Transport */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg p-3"
            >
              <option value="">Accommodation</option>
              <option>Hostel</option>
              <option>Hotel</option>
              <option>Resort</option>
              <option>Airbnb</option>
            </select>

            <select
              name="transport"
              value={formData.transport}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg p-3"
            >
              <option value="">Transport</option>
              <option>Flight</option>
              <option>Train</option>
              <option>Bus</option>
              <option>Car</option>
            </select>
          </div>

          {/* Activities */}
          <div>
            <p className="mb-2 font-semibold text-gray-300">Activities</p>
            {formData.activities.map((activity, i) => (
              <input
                key={i}
                type="text"
                value={activity}
                onChange={(e) => updateActivity(i, e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 mb-2"
                placeholder="Activity"
              />
            ))}

            <button
              type="button"
              onClick={addActivity}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
            >
              + Add Activity
            </button>
          </div>

          {/* Trip Goal */}
          <textarea
            rows="4"
            name="tripGoal"
            value={formData.tripGoal}
            onChange={handleChange}
            placeholder="Describe your trip..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-400 hover:bg-emerald-700 py-3 rounded-xl text-lg font-semibold"
          >
            Generate Travel Plan
          </button>

        </form>
      </div>
    </div>
  );
};

export default TravelPlannerForm;