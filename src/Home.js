import React from 'react';
import './main.css';

function Home() {
    return (
        <div className="main">
            <div className="app_header">

                <div className="app_header_icon">
                    <img className="logo" src="./images/tinder_logo2.jpg" alt="logo_image" />
                </div>

                <div className="app_header_list">
                    <div className="app_header_list_appName">
                        tinder
                    </div>
                    <div className="app_header_list_content">
                        <div className="app_header_list_content_1">Product</div>
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
