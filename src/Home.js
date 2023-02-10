import React from 'react';
import './main.css';

function Home() {
    return (
        <div className="main">
            <div className="app_header">

                {/* app header icon */}
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

                    </div>

                    <div className="app_header_language_login">
                        <div className="app_header_language"><i className="fa fa-language" />Language</div>
                        <div className="app_header_login">
                            <button className="btn_login">Log in</button>
                        </div>
                    </div>
                </div>

            </div>


            <div className="app_body">
                <div className="back_image">
                    <div id="back_image_base" >
                        <img className="back_image1" src="./images/main_page_back3.jpg" alt="background_image" />

                        <div className="app_header">

                            {/* app header icon */}
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

                                </div>

                                <div className="app_header_language_login">
                                    <div className="app_header_language"><i className="fa fa-language" />Language</div>
                                    <div className="app_header_login">
                                        <button className="btn_login">Log in</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="back_image_content1">Start Something Epic.</div>
                        <button className="button_create_account">Create Account</button>
                    </div>


                </div>
                <div className="user_reviews">
                    <div className="user_reviews1">
                        <div className="user_reviews_col1">
                            <div className="user_reviews_col1_row1">
                                Nishi dabora
                                <hr className="hr_line" />
                            </div>
                            <div className="user_reviews_col1_row2">
                                <img className="user_review_1" src="./images/review_1.png" alt="review1" />
                            </div>
                        </div>
                        <div className="user_reviews_col2">
                            <img className="user_quotes" src="./images/quotes.jpg" alt="quotes" />
                        </div>
                    </div>
                    <div className="user_reviews2">
                        <div className="user_reviews_col1">
                            <div className="user_reviews_col1_row1">
                                Vaibhav
                                <hr className="hr_line" />
                            </div>
                            <div className="user_reviews_col1_row2">
                                <img className="user_review_1" src="./images/review_2.png" alt="review1" />
                            </div>
                        </div>
                        <div className="user_reviews_col2">
                            <img className="user_quotes" src="./images/quotes.jpg" alt="quotes" />
                        </div>
                    </div>
                    <div className="user_reviews3" >
                        <div className="user_reviews_col1">
                            <div className="user_reviews_col1_row1">
                                Alister
                                <hr className="hr_line" />
                            </div>
                            <div className="user_reviews_col1_row2">
                                <img className="user_review_1" src="./images/review_3.png" alt="review1" />
                            </div>
                        </div>
                        <div className="user_reviews_col2">
                            <img className="user_quotes" src="./images/quotes.jpg" alt="quotes" />
                        </div>
                    </div>
                </div>


            </div>

            <div className="app_footer" />

        </div>
    );
}

export default Home;
