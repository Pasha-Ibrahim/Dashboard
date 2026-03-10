"use client";
import { useState } from "react";
import user from "@/public/user.jpg";
import Link from "next/link";
import Image from "next/image";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(setIsOpen) {
  const [isUserMenuOpen, setUserMenu] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
    setNotificationOpen(false);
  };

  const toggleNotification = () => {
    setNotificationOpen(!isNotificationOpen);
    setUserMenuOpen(false);
  };
  return (
    <>
      <div
        className="bg-white h-22.5 shadow-lg flex justify-between items-center 
    gap-3 px-[2%]"
      >
        <div
          className="search-box borde border-[#dfe0e4] relative h-11.25 hidden lg:flex
      items-center rounded-full w-70 outline-none"
        >
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full ps-4 outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute bg-[#006dca]
      text-white right-0.5 p-3 rounded-[50%]"
          />
        </div>
      </div>
    </>
  );
}
