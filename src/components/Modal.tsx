import ModalPortal from './portal/ModalPortal';

interface ModalProps {
  isOpen: boolean;
  children: JSX.Element | string;
  onClickBlackBackground: () => void;
}

const Modal = ({ isOpen, onClickBlackBackground, children }: ModalProps): JSX.Element => {
  const onClickContent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();

  return (
    <ModalPortal>
      {isOpen && (
        <div className="w-full h-full top-0">
          <div
            className="flex justify-center items-center w-full h-full top-0 left-0 absolute bg-modal-black"
            onClick={onClickBlackBackground}
          >
            <div
              className="flex justify-center items-center p-5 top-1/3 left-1/4 bg-transparent"
              onClick={onClickContent}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </ModalPortal>
  );
};

export default Modal;
