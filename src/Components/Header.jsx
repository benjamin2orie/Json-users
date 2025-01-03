import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between lg:px-[5.5em] px-[2em] py-[1em] border-b lg:text-[30px] text-[15px] capitalize bg-blue-500 text-[#FFFFFF]">
        <h2>logo</h2>
        <div>
          <nav>
            <ul className="flex lg:gap-[3em] gap-[1.5em]">
              <li>about us</li>
              <li>user</li>
              <li>info</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
