import React from "react";

interface PopupProps {
  onClose: () => void;
  onConfirm: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="bg-gradient-to-br from-[#172554] to-[#267296] rounded-3xl p-8"
        style={{ width: "330px" }}
      >
        {/* Content */}
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="flex items-center justify-between w-full mb-6">
            <i>
              {" "}
              <h3 className="text-3xl font-semibold text-white">Success</h3>
            </i>
            <button
              className="p-1 ml-auto text-[#267296]"
              onClick={onClose}
            ></button>
          </div>
          {/* Body */}
          <div className="text-center">
            <i>
              {" "}
              <p className="text-white mb-6">Job Created successfully !</p>
            </i>
          </div>
          {/* Footer */}
          <div className="w-full">
            <center>
              <button
                aria-label="confirm"
                className="flex w-[176px] h-[56px] items-center justify-center px-[2px] py-[6px] relative bg-[white] rounded-full overflow-hidden cursor-pointer [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#267296] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap hover:text-[white] items-center justify-center mr-0 py-full transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#267296] hover:scale-110 relative bg-[#267296] rounded-full overflow-hidden border border-[#a1e1fd4a] "
                onClick={handleConfirm}
              >
                <i>OKAY</i>
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export Popup component
export default Popup;
