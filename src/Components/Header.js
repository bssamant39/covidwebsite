import React from 'react'

const Header = () => {
   return (
      <header className="header-area">

         <div className="container">
            <div className="row d_flex">
               <div className="col-sm-3 logo_sm">
                  <div className="logo">
                     <a href="index.html"></a>
                  </div>
               </div>
               <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
                  <div className="navbar-area">
                     <nav className="site-navbar">
                        <ul >

                           <li ><a href="#" className="logo_midle"></a></li>
                        </ul>
                        <button className="nav-toggler">
                           <span></span>
                        </button>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header