"use client";

import { useRouter } from "next/navigation";

const ContactButton = () => {
  const route = useRouter();
  const handleClick = () => {
    route.push("/contact");
  };

  return (
    <button
      className="rounded-md bg-blue-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
      onClick={handleClick}
    >
      Contact us
    </button>
  );
};

export default ContactButton;
