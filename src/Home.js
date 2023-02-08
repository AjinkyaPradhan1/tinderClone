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
                            <div className="dropdown_content1">
                                <a href="">Premium Features</a>
                                <a href="">Subscription Tiers</a>
                                <a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tinder Plus&#174;</a>
                                <a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tinder Gold&#8482;</a>
                                <a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tinder Platinum&#8482;</a>
                                <a href="">Swipe Night</a>
                            </div>


                        </div>
                        <div className="app_header_list_content_2">Learn</div>
                        <div className="app_header_list_content_3">
                            <div className="dropbtn">Safety</div>
                            <div className="dropdown_content2">
                                <a href="">Community Guidelines</a>
                                <a href="">Safety Tips</a>
                                <a href="">Safety & Policy</a>
                                <a href="">Safety & Reporting</a>
                                <a href="">Security</a>
                            </div>
                        </div>
                        <div className="app_header_list_content_4">Support</div>
                        <div className="app_header_list_content_5">Download</div>

                        {/* <div className="app_header_language">Language</div>
                        <div className="app_header_login">Login</div> */}

                    </div>

                    <div className="app_header_language_login" />
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
