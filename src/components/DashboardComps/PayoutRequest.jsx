import React, { useState } from 'react';
import { Pencil, Trash } from 'phosphor-react';
import { Button } from '../../ui';
import Pagination from './OrderManagement/Pagination';
import InitialOrders from './OrderManagement/InitialOrders'; // assuming you have a file for InitialPayoutRequests
import getStatusColor from './OrderManagement/StatusColor';
const ITEMS_PER_PAGE = 10;

const headers = [
  {value:'orderId', display:'Request ID'},
  { value: 'name', display: 'Movers Name' },
  { value: 'fee', display: 'Requested Amount' },
  { value: 'status', display: 'Status' },

];

const PayoutRequest = () => {

  const [orders, setOrders] = useState(InitialOrders);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrders, setEditedOrders] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const showActions = false

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

  const handleDelete = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastOrder = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstOrder = indexOfLastOrder - ITEMS_PER_PAGE;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);

  return (
    <div className="md:mx-5 md:px-4 container">


      <div className="flex md:flex-row flex-col bg-white justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-textPrimary font-playfair text-lg">Tracking List</h1>
          {/* <p className="text-left md:text-sm mb-3 text-zinc-400">Order list</p> */}
        </div>
        <div className="flex  gap-x-2 mb-4">
          <Button variant="secondary" className="text-sm p-1 w-[120px] md:w-[180px]">
            Filter
          </Button>
          <Button variant="primary" className="text-sm p-1 w-[180px]" onClick={() => { }}>
            Save Changes
          </Button>
        </div>
      </div>


      <div className="flex border border-[#F5F7FE] p-4 bg-[#F5F7FE] rounded-xl table-container md:overflow-x-hidden overflow-x-auto w-full">
        <table className="min-w-full ">
          <thead className="text-black text-left">
            <tr>
              {headers.map((header) => (
                <th key={header.value} className="py-3 px-2 uppercase font-semibold text-sm border-b">
                  {header.display}
                </th>
              ))}
            <td className="py-3 px-4 uppercase font-semibold text-sm border-b">Action</td>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {currentOrders.map((order, index) => (
              <React.Fragment key={order.orderId}>
                <tr className="px-15" style={{
                  border: editingOrderId === order.orderId ? '2px solid #1F51FF' : '0px solid #F5F7FE',
                  borderRadius: editingOrderId === order.orderId ? '9px' : '0px',
                  fontWeight: editingOrderId === order.orderId ? 'bold' : 'normal',
                }}>
                  {headers.map((header) => (
                    <td key={header.value} className="py-3 px-2">
                      {editingOrderId === order.orderId ? (
                        <input
                          type="text"
                          className="p-2 w-[8rem]"
                          value={
                            (editedOrders[order.orderId]?.[header.value] !== undefined
                              ? editedOrders[order.orderId][header.value]
                              : order[header.value]) || ''
                          }
                          onChange={(e) => handleEdit(order.orderId, header.value, e.target.value)}
                          style={{
                            backgroundColor: editingOrderId === order.orderId ? 'transparent' : '',
                          }}
                        />
                      ) : (
                        // Use getStatusColor for the 'status' column
                        header.value === 'status' ? (
                          <span style={{ color: getStatusColor(order.status) }}>{order[header.value]}</span>
                        ) : (
                          order[header.value]
                        )
                      )}
                    </td>
                  ))}
                
                    <td className="py-3 ">
                      {editingOrderId === order.orderId ? (
                        <button
                          className="px-4 py-1 ml-3 text-sm text-green-600 bg-green-200 rounded-full"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      ) : (
                        <div className="flex justify-center -px-4 ">
                          <button
                            className=" py-1 mr-5 text-sm rounded-full"
                            onClick={() => setEditingOrderId(order.orderId)}
                          >
                            <Pencil size={20} />
                          </button>
                          <button
                            className="py-1 mr-5 text-sm rounded-full"
                            onClick={() => handleDelete(order.orderId)}
                          >
                            <Trash size={20} />
                          </button>
                        </div>
                      )}
                    </td>
               
                </tr>
                {index < currentOrders.length - 1 && (
                  <tr key={`separator-${index}`}>
                    {headers.map((header) => (
                      <td key={header.value} colSpan={1}></td>
                    ))}
                    {headers.some((header) => header.value === 'Action') && <td colSpan={1} className="border-t"></td>}
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />

    </div>
  )
}

export default PayoutRequest;

