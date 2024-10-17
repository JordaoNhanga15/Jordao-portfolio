"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaFlagUsa, FaFlag } from "react-icons/fa";
import Social from "@/components/Social";

const DropdownDownload = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row items-center gap-8 relative">
      {/* Dropdown Button */}
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
        {isOpen ? (
          <FiChevronUp className="ml-2" />
        ) : (
          <FiChevronDown className="ml-2" />
        )}
      </Button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute top-full mt-2 flex flex-col bg-white border border-gray-200 rounded-md shadow-lg space-y-2 w-max p-4 z-50" style={{ background: 'transparent', borderRadius: '20px' }}>
          {/* English CV Download */}
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 w-full"
            onClick={() => window.open("/path-to-english-cv.pdf", "_blank")}
          >
            <FaFlagUsa className="text-xl" />
            <span>English CV</span>
            <FiDownload className="text-xl" />
          </Button>

          {/* Portuguese CV Download */}
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 w-full"
            onClick={() => window.open("/path-to-portuguese-cv.pdf", "_blank")}
          >
            <FaFlag className="text-xl" />
            <span>Portuguese CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </div>
      )}

      {/* Social icons */}
      <div className="mb-8 xl:mb-0">
        <Social
          containerStyles="flex gap-6"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        />
      </div>
    </div>
  );
};

export { DropdownDownload };
