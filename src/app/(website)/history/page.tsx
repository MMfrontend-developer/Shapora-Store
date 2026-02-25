import React from "react";

export default function HistoryPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Order History</h1>
            <p className="text-gray-700 mb-8 text-center py-12 border-2 border-dashed rounded">
                You have no previous orders.
            </p>
        </div>
    );
}
