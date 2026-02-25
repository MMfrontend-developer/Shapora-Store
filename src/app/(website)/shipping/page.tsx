import React from "react";

export default function ShippingPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Shipping & Delivery</h1>
            <p className="text-gray-700 mb-4">
                We offer fast and reliable shipping to ensure your orders reach you as quickly as possible.
            </p>
            <h2 className="text-xl font-semibold mb-3">Shipping Rates</h2>
            <p className="text-gray-700 mb-4">
                Shipping rates are calculated at checkout based on your location and the weight of your order.
            </p>
            <h2 className="text-xl font-semibold mb-3">Delivery Times</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Standard Shipping: 3-5 business days</li>
                <li>Express Shipping: 1-2 business days</li>
                <li>International Shipping: 7-14 business days</li>
            </ul>
        </div>
    );
}
