import React from "react";

export default function ReturnsPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Return Policy</h1>
            <p className="text-gray-700 mb-4">
                At Shapora, we want you to be completely satisfied with your purchase.
                If you are not happy with your item, you can return it within 30 days of delivery.
            </p>
            <h2 className="text-xl font-semibold mb-3">How to Return</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Contact our support team to initiate a return.</li>
                <li>Package the item securely in its original packaging.</li>
                <li>Ship the item back to our warehouse using the provided label.</li>
                <li>Once received, we will process your refund within 5-7 business days.</li>
            </ol>
        </div>
    );
}
