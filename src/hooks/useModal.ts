import { useCallback, useState } from 'react';

function useModal(): [boolean, () => void] {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return [isOpen, toggleModal];
}

export default useModal;
