import React from 'react';
import './main.css';

function Home() {
    return (
        <div className="main">
            <div className="app_header">

                {/* app header icon  */}
                <div className="app_header_icon">
                    <img className="logo" src="./images/tinder_logo2.jpg" alt="logo_image" />
                </div>

                {/* app header list  */}
                <div className="app_header_list">
                    {/* app header tinder written next to the icon  */}
                    <div className="app_header_list_appName">
                        tinder
                    </div>
                    <div className="app_header_list_content">
                        <div className="app_header_list_content_1">
                            {/* Dropdown used in header file */}

                            <div className="dropbtn">Product</div>
                            <div className="dropdown_content">
                                <a href="">Premium Features</a>
                                <a href="">Tinder Plus</a>
                                <a href="">Tinder Gold</a>
                                <a href="">Tinder Platinum</a>
                                <a href="">Swipe Night</a>
                            </div>


                        </div>
                        <div className="app_header_list_content_2">Learn</div>
                        <div className="app_header_list_content_3">Safety</div>
                        <div className="app_header_list_content_4">Support</div>
                        <div className="app_header_list_content_5">Download</div>
                    </div>
                </div>

            </div>


            <div className="app_body">
                hello
            </div>

            <div className="app_footer" />

        </div>
    );
}

export default Home;
