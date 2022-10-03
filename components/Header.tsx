import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div>
        <img src="https://img.icons8.com/nolan/64/b.png" />
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>How It's Work</li>
          <li>Agent</li>
          <li>Sales</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
