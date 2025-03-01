/* eslint-disable react/prop-types */
import React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { UserRound } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { Filter } from "lucide-react";

const Categories = ({
  categories,
  onFilter,
  activeCategory,
  myPostCount,
  adminPostCount,
}) => {
  return (
    <aside className="w-full lg:w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-purple-700 mb-4 ">Categories</h3>
      <ul className="flex flex-wrap gap-3 lg:block lg:space-y-3">
        {/* "All" Category */}
        <li
          className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${
            activeCategory === "All"
              ? "bg-purple-100 text-purple-700"
              : "text-gray-700 hover:bg-gray-100"
          } transition duration-300`}
          onClick={() => onFilter("All")}
        >
          <div className="flex gap-2">
            <span>
              <GalleryVerticalEnd />
            </span>
            <span>All</span>
          </div>
          <span className="text-sm bg-purple-600 text-white px-2 py-1 rounded-full">
            {categories.reduce((total, cat) => total + cat.count, 0)}
          </span>
        </li>

        {/* "My Posts" Category */}
        <li
          className={`flex justify-between items-center p-3 rounded-full cursor-pointer ${
            activeCategory === "My Posts"
              ? "bg-purple-100 text-purple-700"
              : "text-gray-700 hover:bg-gray-100"
          } transition duration-300`}
          onClick={() => onFilter("My Posts")}
        >
          <div className="flex gap-2">
            <span>
              <UserRound />
            </span>
            <span>My Posts</span>
          </div>
          <span className="text-sm bg-purple-600 text-white px-2 py-1 rounded-full">
            {myPostCount}
          </span>
        </li>

        {/* "Admin Posts" Category */}
        <li
          className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${
            activeCategory === "Admin Posts"
              ? "bg-purple-100 text-purple-700"
              : "text-gray-700 hover:bg-gray-100"
          } transition duration-300`}
          onClick={() => onFilter("Admin Posts")}
        >
          <div className="flex gap-2">
            <span>
              <ShieldHalf />
            </span>
            <span>Admin Posts</span>
          </div>
          <span className="text-sm bg-purple-600 text-white px-2 py-1 rounded-full">
            {adminPostCount}
          </span>
        </li>

        {/* Dynamic Categories */}
        {categories.map((category, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${
              activeCategory === category.name
                ? "bg-purple-100 text-purple-700"
                : "text-gray-700 hover:bg-gray-100"
            } transition duration-300`}
            onClick={() => onFilter(category.name)}
          >
            <div className="flex gap-2">
              <span>
                <Filter />
              </span>
              <span>{category.name}</span>
            </div>
            <span className="text-sm bg-purple-600 text-white px-2 py-1 rounded-full">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Categories;