import React from "react";

export default function TrackPage() {
    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-3xl font-bold mb-6">Track Order</h1>
            <p className="text-gray-700 mb-8">
                Keep track of your order journey.
            </p>
            <div className="max-w-md mx-auto space-y-4">
                <input
                    type="text"
                    placeholder="Tracking Number"
                    className="w-full border p-2 rounded"
                />
                <button className="w-full bg-orange-500 text-white font-bold py-2 rounded">
                    Track
                </button>
            </div>
        </div>
    );
}
