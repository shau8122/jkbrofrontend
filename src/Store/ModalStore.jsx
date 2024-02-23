import { createContext, useContext } from 'react';
import { create } from 'zustand';

const useModalStore = create((set) => ({
  type: typeof string,
  data: {},
  isOpen: false,
  onOpen: ( type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false }),
}));

export const ModalProvider = ({ children }) => {
  const modalStore = useModalStore();

  return (
    <ModalContext.Provider value={modalStore}>
      {children}
      <h1>
      </h1>
    </ModalContext.Provider>
  );
};

// Export the context for use in child components
export const ModalContext = createContext();

// Custom hook to use the modal state
export const useModal = () => useContext(ModalContext);