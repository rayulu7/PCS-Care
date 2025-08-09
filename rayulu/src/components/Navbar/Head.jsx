import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaEdit, FaHome, FaBuilding } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { Dialog, Transition } from '@headlessui/react';

const Head = () => {
  const [pincode, setPincode] = useState('500032');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempPincode, setTempPincode] = useState(pincode);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.includes('residential-services') ? 'residential' : 'commercial'
  );

  useEffect(() => {
    setActiveTab(location.pathname.includes('residential-services') ? 'residential' : 'commercial');
  }, [location]);

  const handlePincodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setTempPincode(value);
  };

  const savePincode = () => {
    if (tempPincode.length === 6) {
      setPincode(tempPincode);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="bg-black text-white py-2 px-4 md:px-8 lg:px-16">
      {/* Desktop */}
      <div className="hidden md:flex justify-end items-center gap-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-green-400 text-lg" />
          <a
            href={`https://wa.me/919392612316`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-200"
          >
            9392612316
          </a>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-400 text-lg" />
          <span>{pincode}</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaEdit className="text-base ml-1" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <Link
            to="/corporate-services"
            className={`flex items-center gap-1 px-4 py-2 rounded-md transition-colors ${
              activeTab === 'commercial'
                ? 'bg-orange-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-orange-600'
            }`}
          >
            <FaBuilding className="text-lg" />
            <span>Commercial</span>
          </Link>
          <Link
            to="/residential-services"
            className={`flex items-center gap-1 px-4 py-2 rounded-md transition-colors ${
              activeTab === 'residential'
                ? 'bg-orange-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-orange-600'
            }`}
          >
            <FaHome className="text-lg" />
            <span>Residential</span>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center w-full gap-2">
        <div className="flex items-center gap-1 flex-shrink-0">
          <FaWhatsapp className="text-green-400 text-sm" />
          <a
            href={`https://wa.me/919014865154`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 text-xs whitespace-nowrap"
          >
            9014865154
          </a>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <FaMapMarkerAlt className="text-red-400 text-sm" />
          <span className="text-xs whitespace-nowrap">{pincode}</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-300 hover:text-white"
          >
            <FaEdit className="text-xs" />
          </button>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <Link
            to="/corporate-services"
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'commercial'
                ? 'bg-orange-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-orange-600'
            }`}
          >
            <FaBuilding className="text-xs" />
            <span>Commercial</span>
          </Link>
          <Link
            to="/residential-services"
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs whitespace-nowrap ${
              activeTab === 'residential'
                ? 'bg-orange-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-orange-600'
            }`}
          >
            <FaHome className="text-xs" />
            <span>Residential</span>
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={isModalOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Update Pincode
                    </Dialog.Title>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <IoClose className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                      Enter 6-digit Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      value={tempPincode}
                      onChange={handlePincodeChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      maxLength={6}
                      pattern="\d{6}"
                      autoFocus
                    />
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none"
                      onClick={savePincode}
                      disabled={tempPincode.length !== 6}
                    >
                      Save Changes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Head;
