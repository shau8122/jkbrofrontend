import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash } from 'phosphor-react';
import { Button } from '../../ui';
import Pagination from './OrderManagement/Pagination';
import InitialOrders from './OrderManagement/InitialOrders';
import getStatusColor from './OrderManagement/StatusColor';

const ITEMS_PER_PAGE = 6;

const OrderManagement = () => {
  const initialOrders = InitialOrders();
  const [orders, setOrders] = useState(initialOrders);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrders, setEditedOrders] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterField, setFilterField] = useState(''); // Field to filter by
  const [filterValue, setFilterValue] = useState(''); // Value to filter
  const baseUrl = "http://localhost:8000/"
  const handleEdit = (orderId, field, value) => {
    setEditedOrders((prevEditedOrders) => ({
      ...prevEditedOrders,
      [orderId]: { ...prevEditedOrders[orderId], [field]: value },
    }));
    setEditingOrderId(orderId);
  };

  const handleSave = () => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        editedOrders[order.orderId] ? { ...order, ...editedOrders[order.orderId] } : order
      )
    );
    setEditedOrders({});
    setEditingOrderId(null);
  };

  const handleFilter = () => {
    const filteredOrders = initialOrders.filter(order => {
      if (filterField && filterValue) {
        const fieldValue = order[filterField].toLowerCase();
        return fieldValue.includes(filterValue.toLowerCase());
      }
      return true; // If no filter criteria selected, show all orders
    });
    setOrders(filteredOrders);
    setCurrentPage(1); // Reset to the first page after filtering
    setIsFiltering(false); // Hide filter input after filtering
  };

  const handleDelete = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastOrder = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstOrder = indexOfLastOrder - ITEMS_PER_PAGE;
  const currentOrders = useMemo(()=>orders.slice(indexOfFirstOrder, indexOfLastOrder),[indexOfFirstOrder, indexOfLastOrder, orders]);
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/v1/orders`);
        console.log(response.data.orders);
        setOrders(response.data.orders); // Assuming the API response has an 'orders' property
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };

    fetchOrders();
  }, []);
  
  const mappedOrders = useMemo(() => {
    return currentOrders.map(order => ({
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
  }, [currentOrders]);
  return (
    <div className="md:mx-5 md:px-4 container mt-5 overflow-hidden">
      <div className="flex md:flex-row flex-col bg-white justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-textPrimary font-playfair text-lg">Orders Management</h1>
          <p className="text-left md:text-sm mb-3 text-zinc-400">Order list</p>
        </div>
        <div className="flex gap-x-2 mb-4">
          <Button
            variant={isFiltering ? 'secondary' : 'primary'}
            className="text-sm p-1 w-[140px] md:w-[180px]"
            onClick={() => setIsFiltering(!isFiltering)}
          >
            {isFiltering ? 'Hide Filter' : 'Show/Apply Filter'}
          </Button>
          {isFiltering && (
            <>
              <select
                value={filterField}
                onChange={(e) => setFilterField(e.target.value)}
                className="text-sm p-1 w-[140px] md:w-[180px]"
              >
                <option value="">Select Field</option>
                <option value="orderId">Order ID</option>
                <option value="name">Name</option>
                <option value="address">Address</option>
                <option value="pickupLocation">Pickup Location</option>
                <option value="dropLocation">Drop Location</option>
                <option value="status">Status</option>
              </select>
              <input
                type="text"
                placeholder={`Filter by ${filterField}`}
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="text-sm p-1 w-[140px] md:w-[180px]"
              />
              <Button
                variant="secondary"
                className="text-sm p-1 w-[140px] md:w-[180px]"
                onClick={handleFilter}
              >
                Apply Filter
              </Button>
            </>
          )}
          <Button
            variant="primary"
            className="text-sm p-1 w-[140px] md:w-[180px]"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </div>
      <div className="flex border border-[#F5F7FE] p-4 bg-[#F5F7FE] rounded-xl table-container md:overflow-x-hidden overflow-x-auto w-full">
        <table className="min-w-full ">
          <thead className="text-black  text-left">
            <tr>
              <th className="py-3 px-2 uppercase font-semibold text-sm border-b">Order ID</th>
              <th className="py-3 px-2 uppercase font-semibold text-sm border-b">Name</th>
              <th className="py-3 px-2 uppercase font-semibold text-sm border-b">Address</th>
              <th className="py-3 px-2 uppercase font-semibold text-sm border-b">Pickup Location</th>
              <th className="py-3 px-2 uppercase font-semibold text-sm border-b">Drop Location</th>
              <th className="py-3 px-2 uppercase font-semibold text-sm border-b">Status</th>
              <th className="py-3  px-6 uppercase font-semibold text-sm border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600  text-sm">
            {mappedOrders.map((order, index) => (
              <React.Fragment key={order.orderId}>
                <tr className='px-15' style={{
                  border: editingOrderId === order.orderId ? '2px solid #1F51FF' : '0px solid #F5F7FE',
                  borderRadius: editingOrderId === order.orderId ? '9px' : '0px', 
                  fontWeight: editingOrderId === order.orderId ? 'bold' : 'normal',
                }}>
                  <td className="py-5 px-2">{order.orderId}</td>
                  <td className="py-3 px-2">
                    {editingOrderId === order.orderId ? (
                      <input
                        type="text"
                        className='p-2 w-[8rem]'
                        value={(editedOrders[order.orderId]?.name !== undefined ? editedOrders[order.orderId].name : order.name) || ''}
                        onChange={(e) => handleEdit(order.orderId, 'name', e.target.value)}
                        style={{
                          backgroundColor: editingOrderId === order.orderId ? 'transparent' : '',
                        }}
                      />
                    ) : (
                      order.name
                    )}
                  </td>
                  <td className="py-3 px-2">
                    {editingOrderId === order.orderId ? (
                      <input
                        type="text"
                        className='p-2 w-[8rem]'
                        value={(editedOrders[order.orderId]?.address !== undefined ? editedOrders[order.orderId].address : order.address) || ''}
                        onChange={(e) => handleEdit(order.orderId, 'address', e.target.value)}
                        style={{
                          backgroundColor: editingOrderId === order.orderId ? 'transparent' : '', // Add this line for transparent background
                        }}
                      />
                    ) : (
                      order.address
                    )}
                  </td>
                  <td className="py-3 px-2">{editingOrderId === order.orderId ? (
                    <input
                      type="text"
                      className='p-2 w-[8rem]'
                      value={(editedOrders[order.orderId]?.pickupLocation !== undefined ? editedOrders[order.orderId].pickupLocation : order.pickupLocation) || ''}
                      onChange={(e) => handleEdit(order.orderId, 'pickupLocation', e.target.value)}
                      style={{
                        backgroundColor: editingOrderId === order.orderId ? 'transparent' : '', // Add this line for transparent background
                      }}
                    />
                  ) : (
                      order.pickupLocation
                  )}
                  </td>
                  <td className="py-3 px-2">{editingOrderId === order.orderId ? (
                    <input
                      type="text"
                      className='p-2 w-[8rem]'
                      value={(editedOrders[order.orderId]?.dropLocation !== undefined ? editedOrders[order.orderId].dropLocation : order.dropLocation) || ''}
                      onChange={(e) => handleEdit(order.orderId, 'dropLocation', e.target.value)}
                      style={{
                        backgroundColor: editingOrderId === order.orderId ? 'transparent' : '', // Add this line for transparent background
                      }}
                    />
                  ) : (
                    order.dropLocation
                  )}</td>
                  <td style={{ color: getStatusColor(order.status) }}>{editingOrderId === order.orderId ? (
                    <input
                      type="text"
                      className='p-2 w-[8rem]'
                      value={(editedOrders[order.orderId]?.status !== undefined ? editedOrders[order.orderId].status : order.status) || ''}
                      onChange={(e) => handleEdit(order.orderId, 'status', e.target.value)}
                      style={{
                        backgroundColor: editingOrderId === order.orderId ? 'transparent' : '', // Add this line for transparent background
                      }}
                    />
                  ) : (
                    order.status
                  )}</td>
                  <td className="py-3 px-2">
                    {editingOrderId === order.orderId ? (
                      <button
                        className="px-4 py-1 mr-2 text-sm text-green-600 bg-green-200 rounded-full"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    ) : (
                      <div className="flex justify-center space-x-2">
                        <button
                          className="px-2 py-1 text-sm rounded-full"
                          onClick={() => setEditingOrderId(order.orderId)}
                        >
                        <Pencil size={20} />
                        </button>
                        <button
                          className="px-2 py-1 text-sm rounded-full"
                          onClick={() => handleDelete(order.orderId)}
                        >
                          <Trash size={20} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
                {index < currentOrders.length - 1 && (
                  <tr>
                    <td colSpan="7" className="border-t"></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default OrderManagement;
