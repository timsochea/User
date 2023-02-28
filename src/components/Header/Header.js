import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className="header-v2">
        <div className="container-menu-desktop trans-03">
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop p-l-45">


              <NavLink to="#" className="logo">
                <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
              </NavLink>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li >
                    <NavLink to="shop">Shop</NavLink>
                  </li>
                  <li >
                    <NavLink to="cart">Cart</NavLink>
                  </li>
                  <li >
                    <NavLink to="contact">Contact</NavLink>
                  </li>
                  <li >
                    <NavLink to="about">About</NavLink>
                  </li>
                </ul>
              </div>

              <div className="wrap-icon-header flex-w flex-r-m h-full">
                <div className="flex-c-m h-full p-r-24">
                  <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                    <i className="zmdi zmdi-search"></i>
                  </div>
                </div>

                <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
                  <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify="2">
                    <i className="zmdi zmdi-shopping-cart"></i>
                  </div>
                </div>

                <div className="flex-c-m h-full p-lr-19">
                  <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-sidebar">
                    <i className="zmdi zmdi-menu"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="wrap-header-mobile">
          <div className="logo-mobile">
            <a to="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
          </div>

          <div className="wrap-icon-header flex-w flex-r-m h-full m-r-15">
            <div className="flex-c-m h-full p-r-10">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                <i className="zmdi zmdi-search"></i>
              </div>
            </div>

            <div className="flex-c-m h-full p-lr-10 bor5">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify="2">
                <i className="zmdi zmdi-shopping-cart"></i>
              </div>
            </div>
          </div>

          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>


        <div className="menu-mobile">
          <ul className="main-menu-m">
            <li>
              <a to="index.html">Home</a>
              <ul className="sub-menu-m">
                <li><a to="index.html">Homepage 1</a></li>
                <li><a to="home-02.html">Homepage 2</a></li>
                <li><a to="home-03.html">Homepage 3</a></li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </li>

            <li>
              <a to="product.html">Shop</a>
            </li>

            <li>
              <a to="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
            </li>

            <li>
              <a to="blog.html">Blog</a>
            </li>

            <li>
              <a to="about.html">About</a>
            </li>

            <li>
              <a to="contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input className="plh3" type="text" name="search" placeholder="Search..." />
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;