import React from 'react'

const CreditCard = () => {
  return (
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-md shadow-md overflow-hidden">
    <div class="px-6 py-4 bg-primary text-white">
        <h1 class="text-lg font-bold">Credit Card</h1>
    </div>
    <div class="px-6 py-4">

        <div class="mb-4">
            <label class="block text-gray-400 capitalize" for="card-number">
                Card Number
            </label>
            <input
                class="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-outline text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors['card-number'] ? 'border-red-500' : ''}"
                id="card-number" type="text" placeholder="**** **** **** ****" />
        </div>

        <div class="mb-4">
            <label class="block text-gray-400 capitalize" for="expiration-date">
                Expiration Date
            </label>
            <input
                class="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-outline text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors['expiration-date'] ? 'border-red-500' : ''}"
                id="expiration-date" type="text" placeholder="MM/YY" />
        </div>

        <div class="mb-4">
            <label class="block text-gray-400 capitalize" for="cvv">
                CVV
            </label>
            <input
                class="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-outline text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors['cvv'] ? 'border-red-500' : ''}"
                id="cvv" type="text" placeholder="***" />
        </div>

        <div class="mb-4">
            <label class="block text-gray-400 capitalize" for="cardholder-name">
                Cardholder Name
            </label>
            <input
                class="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-outline text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors['cardholder-name'] ? 'border-red-500' : ''}"
                id="cardholder-name" type="text" placeholder="Full Name" />
        </div>

        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-xl">
            Pay Now
        </button>
    </div>
    </div>
  )
}

export default CreditCard