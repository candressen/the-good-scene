import type { NextPage } from "next";

export type IconButtonStandardType = {
  className?: string;
  icon?: React.ReactNode;
  showLeadingIcon?: boolean;
  size?: string;
  state?: string;
  type?: string;
  width?: string;
};

const IconButtonStandard: NextPage<IconButtonStandardType> = ({
  className = "",
  icon,
  showLeadingIcon,
}) => {
  if (!showLeadingIcon) return null;
  return (
    <div className={`h-12 w-12 flex items-center justify-center z-[0] ${className}`}>
      <div className="w-10 rounded-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
        <div className="w-full h-10 flex items-center justify-center max-w-full">
          {icon}
        </div>
      </div>
    </div>
  );
};
export default IconButtonStandard;
