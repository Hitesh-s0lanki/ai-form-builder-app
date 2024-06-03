import { create } from "zustand";

interface ModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const usePromptModal = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));