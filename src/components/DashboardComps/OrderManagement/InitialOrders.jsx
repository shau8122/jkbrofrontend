const InitialOrders   =() =>{
    // const baseUrl = "https://jkbros.onrender.com/api/v1/orders";
    // const response = await fetch(baseUrl);
    // const orders= await response.json();
    // const ordersData = orders.orders;
    // console
      try {
        const ordersData =
        [
            {
                "truckDetails": {
                    "counts": {
                        "Small Truck": 0,
                        "Pickup Truck": 1,
                        "Box Truck": 0,
                        "Flatbed truck Truck": 0
                    },
                    "selectedTruck": "{\"type\":\"Pickup Truck\",\"count\":1}"
                },
                "bookingDetails": {
                    "selectedDate": "Feb 8",
                    "selectedTime": "10:00 AM - 12:00 PM",
                    "selectedCoupon": null
                },
                "_id": "65bf6279ec2a875e161806af",
                "selectedItems": {
                    "Furniture-Sofa-3 Seater": {
                        "item": "3 Seater",
                        "count": 1,
                        "_id": "65bf6279ec2a875e161806b0"
                    }
                },
                "pricingModal": [],
                "totalAmount": 2698,
                "user": "User",
                "orderCompletion": "Processing",
                "tracking": [],
                "__v": 0
            },
            {
                "truckDetails": {
                    "counts": {
                        "Small Truck": 1,
                        "Pickup Truck": 0,
                        "Box Truck": 0,
                        "Flatbed truck Truck": 0
                    },
                    "selectedTruck": "{\"type\":\"Small Truck\",\"count\":1}"
                },
                "bookingDetails": {
                    "selectedDate": "Feb 9",
                    "selectedTime": "10:00 AM - 12:00 PM",
                    "selectedCoupon": null
                },
                "_id": "65bf7200f3c2b06131cce1a",
                "selectedItems": {
                    "Furniture-Sofa-Double": {
                        "item": "Double",
                        "count": 1,
                        "_id": "65bf7200f3c2b06131cce1a2"
                    }
                },
                "pricingModal": [
                    {
                        "packageName": "Single-layer packing",
                        "price": 399,
                        "_id": "65bf7200f3c2b06131cce1a3"
                    }
                ],
                "totalAmount": 3097,
                "user": "Useryyyyy",
                "orderCompletion": "Processing",
                "tracking": [],
                "__v": 0
            }
        ]
        const mappedOrders =ordersData.map(order => ({
            orderId: order._id,
            name: order.user || "Unknown",
            address: "Unknown",
            pickupLocation: "Unknown",
            dropLocation: "Unknown",
            status: order.orderCompletion || "Unknown",
            date: order.bookingDetails?.selectedDate || "Unknown",
            services: "Unknown",
            fee: order.totalAmount || 0,
          }));
      
          return mappedOrders;
        } catch (error) {
          console.error('Error fetching orders:', error.message);
          return [];
        }
      };
      
      
    
      
      
export default InitialOrders;
      
      
