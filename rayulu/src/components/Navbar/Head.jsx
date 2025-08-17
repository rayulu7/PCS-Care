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
    <div className="bg-black text-white py-1 lg:py-2 px-2 sm:px-3 md:px-4 lg:px-8 xl:px-16">
      
      <div className="hidden lg:flex justify-end items-center gap-5 xl:gap-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-green-400 text-base xl:text-lg" />
          <a
            href="https://wa.me/919392612314"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors text-sm xl:text-base"
          >
            9392612316
          </a>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-400 text-base xl:text-lg" />
          <span className="text-sm xl:text-base">{pincode}</span>
          <button onClick={() => setIsModalOpen(true)} className="text-gray-300 hover:text-white">
            <FaEdit className="text-sm xl:text-base ml-1" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/corporate-services"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors text-sm ${
              activeTab === 'commercial'
                ? 'bg-orange-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-orange-600'
            }`}
          >
            <FaBuilding className="text-base" />
            <span>Commercial</span>
          </Link>
          <Link
            to="/residential-services"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors text-sm ${
              activeTab === 'residential'
                ? 'bg-orange-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-orange-600'
            }`}
          >
            <FaHome className="text-base" />
            <span>Residential</span>
          </Link>
        </div>
      </div>

      {/* Mobile & Tablet view */}
      <div className="flex lg:hidden justify-between items-center w-full gap-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-0.5 shrink-0">
          <FaWhatsapp className="text-green-400 text-[10px] sm:text-xs" />
          <a
            href="https://wa.me/919014865154"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 text-[10px] sm:text-xs whitespace-nowrap"
          >
            9014865154
          </a>
        </div>

        <div className="flex items-center gap-0.5 shrink-0">
          <FaMapMarkerAlt className="text-red-400 text-[10px] sm:text-xs" />
          <span className="text-[10px] sm:text-xs">{pincode}</span>
          <button onClick={() => setIsModalOpen(true)} className="text-gray-300 hover:text-white">
            <FaEdit className="text-[10px] sm:text-xs" />
          </button>
        </div>

        <div className="flex items-center gap-0.5 shrink-0">
          <Link
            to="/corporate-services"
            className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] sm:text-xs ${
              activeTab === 'commercial'
                ? 'bg-orange-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-orange-600'
            }`}
          >
            <FaBuilding className="text-[10px] sm:text-xs" />
            <span>Commercial</span>
          </Link>
          <Link
            to="/residential-services"
            className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] sm:text-xs ${
              activeTab === 'residential'
                ? 'bg-orange-500 text-white'
                : 'text-gray-300 hover:text-white hover:bg-orange-600'
            }`}
          >
            <FaHome className="text-[10px] sm:text-xs" />
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center">
                    <Dialog.Title className="text-base sm:text-lg font-medium text-gray-900">
                      Update Pincode
                    </Dialog.Title>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                      <IoClose className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="mt-3">
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

                  <div className="mt-5 flex justify-end gap-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none disabled:opacity-50"
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
