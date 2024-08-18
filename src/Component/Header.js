import Image from 'next/image';
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Image src="/Logo.png" alt="logo" width={150} height={50} />
        </div>
        <div className="logo_text">
          <h2><b>LOGO</b></h2>
        </div>
        <div className="icons">
          <Image src="/search-normal.png" alt="search" width={24} height={24} />
          <Image src="/heart.png" alt="heart" width={24} height={24} />
          <Image src="/shopping-bag.png" alt="bag" width={24} height={24} />
          <Image src="/profile.png" alt="profile" width={24} height={24} />
        </div>
      </div>
      <nav className="navbar">
        <a href="#shop" className="shop">SHOP</a>
        <a href="#skills" className="shop">SKILLS</a>
        <a href="#stories" className="shop">STORIES</a>
        <a href="#about" className="shop">ABOUT</a>
        <a href="#contact" className="shop">CONTACT US</a>
      </nav>
      <div className="text">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida. Vivamus eget bibendum eros.</p>
      </div>
    </header>
  );
};

export default Header;
