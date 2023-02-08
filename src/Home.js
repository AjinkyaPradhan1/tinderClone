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
                    <div className="app_header_list_appName" />
                    <div className="app_header_list_content" />
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
