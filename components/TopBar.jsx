import { VscLocation } from "react-icons/vsc";
import { FaTruck } from "react-icons/fa";
import Link from "next/link";
const TopBar = () => {
  return (
    <div className="px-10">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between py-3">
        <p className="drop-shadow-xl text-sm md:text-base">
          Need help? Call us: (+98) 0234 456 789
        </p>
        <div>
          <div className="flex gap-4 md:gap-6 lg:gap-10">
            <Link
              href="#"
              className="flex items-center gap-x-1 md:gap-x-3 drop-shadow-xl text-sm md:text-base"
            >
              <VscLocation className="text-base md:text-2xl" />
              Our Store
            </Link>
            <Link
              href="#"
              className="flex items-center gap-x-1 md:gap-x-3 drop-shadow-xl text-sm md:text-base"
            >
              <FaTruck className="text-base md:text-2xl" />
              Track your order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
