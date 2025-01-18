import { StakeInfo } from '@/hooks/wallet';
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


interface DialogContextType {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  showSubMenu: boolean;
  setShowSubMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showingStakeItem: StakeInfo | undefined;
  setShowingStakeItem: Dispatch<SetStateAction<StakeInfo | undefined>>;
}

const defaultContext: DialogContextType = {
  showMenu: false,
  setShowMenu: () => { },
  showSubMenu: false,
  setShowSubMenu: () => { },
  showMobileMenu: false,
  setShowMobileMenu: () => { },
  showDialog: false,
  setShowDialog: () => { },
  showModal: false,
  setShowModal: () => { },
  showingStakeItem: undefined,
  setShowingStakeItem: () => { },
};

const DialogContext = createContext<DialogContextType>(defaultContext);


export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showingStakeItem, setShowingStakeItem] = useState<StakeInfo>()

  return (
    <DialogContext.Provider value={{
      showMenu,
      setShowMenu,
      showSubMenu,
      setShowSubMenu,
      showMobileMenu,
      setShowMobileMenu,
      showDialog,
      setShowDialog,
      showModal,
      setShowModal,
      showingStakeItem,
      setShowingStakeItem,
    }}>
      {children}
    </DialogContext.Provider>
  );
};

// Create a custom hook to use the context
export const useDialogContext = () => useContext(DialogContext);
