import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const serviceData = {
  "web-development": { name: "Web Development", price: "$1000" },
  "mobile-apps": { name: "Mobile Apps", price: "$1200" },
  "ui-ux-design": { name: "UI/UX Design", price: "$800" },
  "social-media": { name: "Social Media Marketing", price: "$600" },
};

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="pt-24 px-4 py-10 flex justify-center items-center min-h-[50vh]">
        <div className="bg-red-100 text-red-600 px-6 py-4 rounded-lg text-center font-semibold w-full max-w-md text-sm sm:text-base">
          ❌ Service not found!
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 py-10 flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
          {service.name}
        </h3>
        <p className="text-gray-800 text-sm sm:text-base mb-6">
          Price: <strong>{service.price}</strong>
        </p>

        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}

export default ServiceDetail;
