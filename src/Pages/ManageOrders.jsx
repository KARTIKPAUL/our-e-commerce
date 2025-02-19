import React from "react";

const ManageOrders = () => {
  const orders = [
    {
      id: "R0374915036",
      product: "White T-shirt",
      by: "Milly Thomas",
      size: "M",
      quantity: 1,
      price: "Rs. 1250",
      status: "In-Transit",
      deliveryDate: "24 December 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkjg6h0asIbNQknQ5rX6X7V53u1Nm9a25Cw&s",
    },
    {
      id: "R0374915037",
      product: "Deep-Blue Hoodie",
      by: "Alex Dobrik",
      size: "XL",
      quantity: 1,
      price: "Rs. 1760",
      status: "In-Transit",
      deliveryDate: "24 December 2025",
      image: "https://www.lazychunks.com/cdn/shop/products/blu_6b95ca11-2325-4102-a90e-ee2d1c098694_800x.jpg?v=1608907087",
    },
    {
      id: "R0374915038",
      product: "Red Leather Jacket",
      by: "Sophie White",
      size: "L",
      quantity: 1,
      price: "Rs. 5500",
      status: "Delivered",
      deliveryDate: "20 February 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhulw8kTOkpnlvTrCcGG-ZK8bLcIPRwcPpAg&s",
    },
    {
      id: "R0374915039",
      product: "Classic Black Shoes",
      by: "Mark Benson",
      size: "9",
      quantity: 2,
      price: "Rs. 4500",
      status: "Cancelled",
      deliveryDate: "N/A",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e02dfafe-7198-4b60-b82a-a006f17f1550/W+NIKE+COURT+VISION+LO+NN.png",
    },
    {
      id: "R0374915040",
      product: "Green Silk Scarf",
      by: "Ella Ray",
      size: "Free",
      quantity: 3,
      price: "Rs. 900",
      status: "In-Transit",
      deliveryDate: "26 February 2025",
      image: "https://m.media-amazon.com/images/I/71IuSTNooQL._AC_UY1100_.jpg",
    },
    {
      id: "R0374915041",
      product: "Black Jeans",
      by: "Ecommerce",
      size: "One Size",
      quantity: 1,
      price: "Rs. 8500",
      status: "Processing",
      deliveryDate: "30 February 2025",
      image: "https://www.urbanofashion.com/cdn/shop/files/jeanloose-black.png?v=1725767024",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">My Orders</h1>
        <p className="text-gray-600">
          View and edit all your pending, delivered, and returned orders here.
        </p>
      </div>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-lg shadow-lg mb-6 p-6 flex flex-col md:flex-row items-start gap-6"
        >
          {/* Order Details */}
          <div className="w-full md:w-2/3">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 text-sm">Order #{order.id}</span>
              <span className="text-sm text-gray-500">
                Order Placed: Thu, 17th Nov
              </span>
            </div>

            <div className="flex items-start gap-4">
              {/* Product Image */}
              <img
                src={order.image}
                alt={order.product}
                className="w-20 h-20 rounded-lg object-cover"
              />

              {/* Product Info */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {order.product}
                </h2>
                <p className="text-gray-500 text-sm mb-2">By: {order.by}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Size:</span> {order.size}{" "}
                  <span className="ml-4 font-medium">Qty:</span> {order.quantity}
                </p>
                <p className="font-bold text-lg mt-2">{order.price}</p>
              </div>
            </div>
          </div>

          {/* Status and Actions */}
          <div className="w-full md:w-1/3">
            <div className="mb-4">
              <p className="font-medium text-gray-600">
                Status:{" "}
                <span
                  className={`font-bold ${
                    order.status === "Delivered"
                      ? "text-green-500"
                      : order.status === "Cancelled"
                      ? "text-red-500"
                      : "text-orange-500"
                  }`}
                >
                  {order.status}
                </span>
              </p>
              <p className="text-gray-500 text-sm">
                Delivery Expected by:{" "}
                <span className="font-medium text-gray-800">
                  {order.deliveryDate}
                </span>
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600">
                Track Order
              </button>
              {order.status !== "Delivered" && order.status !== "Cancelled" && (
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageOrders;
