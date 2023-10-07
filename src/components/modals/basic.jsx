import  { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { useOutsideListener } from "../hooks";

const Modal = ({ show, setShow, size, children, canClose }) => {
  const ref = useRef(null);
  useOutsideListener(ref, () => {
    if (canClose) setShow(false);
  });
  return (
    <Fragment>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-30 inset-0 overflow-y-auto"
          open={show}
          onClose={() => null}
        >
          <div
            ref={ref}
            className="flex pointer-events-auto items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black  bg-opacity-30 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                style={{ width: `${size}vw` }}
                className="inline-block align-bottom bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle "
              >
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};

Modal.defaultProps = {
  size: 35,
  canClose: false,
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  size: PropTypes.number,
  children: PropTypes.node,
  canClose: PropTypes.bool,
};

export default Modal;
