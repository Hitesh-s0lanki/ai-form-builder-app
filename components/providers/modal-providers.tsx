"use client";

import { useEffect, useState } from "react";
import PromptModal from "../modal/prompt-modal";

const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <>
      <PromptModal />
    </>
  );
};

export default ModalProviders;
