import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

export default function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="relative mx-auto" style={{ width: "375px" }}>
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ height: "667px" }}>
          {children}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
}
