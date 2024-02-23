import React, { useState } from 'react';
import { Button } from '../../ui';
import Pagination from './OrderManagement/Pagination';
import TrackingDataItem from './Tracking/TrackingDataItem';
import truck from '/assets/truck.png';
import scooter from '/assets/scooter.png';
import worker from '/assets/worker.png';
import cycle from '/assets/group@2x.png';


const TrackingButton = ({ status, label, onClick, count, isActive }) => (
  <Button
    className={` w-full  md:w-[125px] mx-auto border-[#DBE3FF] border-[1.4px] text-sm md:mx-1 flex items-center justify-between ${isActive ? 'bg-[#3460ff] text-white' : 'bg-white text-black'}`}
    onClick={() => onClick(status)}
  >
    <span className={`px-[9px] max-md:mx-10 rounded-md text-sm ${isActive ? 'text-white' : 'text-[#858585] '}`}>{label}</span>
    <span className={`bg-[#C8D4FF] max-md:mx-10 px-[9px] rounded-md text-sm ${isActive ? 'text-black' : 'text-[#858585]'}`}>
      {count}
    </span>
  </Button>
);





const Tracking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('All');
  const [isCollapsed, setIsCollapsed] = useState(true);




  // Example tracking data
  const trackingData = [
    {
      id: 'UI-158912NH',
      status: 'On route',
      distance: '529 km',
      estimatedTime: '5 hr 27 min',
      location: 'Surat - Ahemdabad',
      driverName: "Driver's Name",
      idNumber: '2156-82-7483',
      timeLeft: '1hr 36 min',
      image: scooter,
    },
    {
      id: 'UI-158922NH',
      status: 'Waiting',
      distance: '300 km',
      estimatedTime: '4 hr 15 min',
      location: 'Delhi - Pune',
      driverName: "Driver's Name",
      idNumber: '1234-56-7890',
      timeLeft: '2 hr 20 min',
      image: worker,
    },
    {
      id: 'UI-158902NH',
      status: 'On route',
      distance: '400 km',
      estimatedTime: '6 hr 30 min',
      location: 'Ahmedabad - Vadodara',
      driverName: "Driver's Name",
      idNumber: '9876-54-3210',
      timeLeft: '3 hr 45 min',
      image: cycle,
    },
    {
      id: 'UI-158902NH',
      status: 'On route',
      distance: '400 km',
      estimatedTime: '6 hr 30 min',
      location: 'Ahmedabad - Vadodara',
      driverName: "Driver's Name",
      idNumber: '9876-54-3210',
      timeLeft: '3 hr 45 min',
      image: truck,
    }

    // Add more tracking data objects as needed
  ];

  
  const divContainersPerPage = 3;
  const filteredData = statusFilter === 'All' ? trackingData : trackingData.filter(item => item.status === statusFilter);
  const totalPages = Math.ceil(filteredData.length / divContainersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setCurrentPage(1); // Reset current page when changing the filter
  };

  const renderTrackingContainers = () => {
    const startIndex = (currentPage - 1) * divContainersPerPage;
    const endIndex = startIndex + divContainersPerPage;

    return filteredData.slice(startIndex, endIndex).map((data, index) => (
      <TrackingDataItem key={index} data={data} />
    ));
  };

  const getCountByStatus = (status) => {
    return trackingData.filter(item => (status === 'All' ? true : item.status === status)).length;
  };

  const buttons = [
    { status: 'All', label: 'All', count: getCountByStatus('All') },
    { status: 'On route', label: 'On route', count: getCountByStatus('On route') },
    { status: 'Waiting', label: 'Waiting', count: getCountByStatus('Waiting') },
    { status: 'Inactive', label: 'Inactive', count: getCountByStatus('Inactive') },
  ];

  
  return (
    <div className='md:mx-5 md:px-1 overflow-hidden'>
      <div className='flex md:flex-row flex-col bg-white justify-between items-center'>
        <div className='flex flex-col'>
          <h1 className='text-textPrimary font-playfair text-lg'>Tracking</h1>
          <p className='text-left md:text-sm mb-3 text-zinc-400'>76 Deliveries</p>
        </div>
        <div className='flex gap-x-4 md:gap-x-2 mb-4 '>
          <Button variant='secondary' className='text-sm p-1 w-[140px] md:w-[185px]'>
            Filter
          </Button>
          <Button variant='primary' className='text-sm p-1 w-[140px] md:w-[185px]'>
            Search
          </Button>
        </div>
      </div>
      <div className={`flex ${'flex-col gap-y-2 md:gap-y-0 md:flex-row'}`}>
        {buttons.map(({ status, label, count }) => (
          <TrackingButton
            key={status}
            status={status}
            label={label}
            count={count}
            onClick={handleStatusFilter}
            isActive={statusFilter === status}
          />
        ))}
      </div>


      {renderTrackingContainers()}

      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default Tracking;