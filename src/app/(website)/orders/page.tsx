import React from "react";

export default function OrdersPage() {
    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-3xl font-bold mb-6">Order Status</h1>
            <p className="text-gray-700 mb-8">
                Enter your order ID and email to check the status of your order.
            </p>
            <div className="max-w-md mx-auto space-y-4">
                <input
                    type="text"
                    placeholder="Order ID"
                    className="w-full border p-2 rounded"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border p-2 rounded"
                />
                <button className="w-full bg-orange-500 text-white font-bold py-2 rounded">
                    Check Status
                </button>
            </div>
        </div>
    );
}
