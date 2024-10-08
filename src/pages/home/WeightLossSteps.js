import steps_bg from '../../assets/images/steps_bg.webp';
import icon_steps_arrow_left from '../../assets/images/icon_steps_arrow_left.webp';
import icon_steps_arrow_right from '../../assets/images/icon_steps_arrow_right.webp';
import icon_complete from '../../assets/images/icon_complete.webp';
import icon_clinicians from '../../assets/images/icon_clinicians.webp';
import icon_begin_glp_1 from '../../assets/images/icon_begin_glp_1.webp';

// import React, { useState } from "react";

function WeightLossSteps(){
    // const [flag, setFlag] = useState(true);
    // const handleUpdate = () => {
    //     setFlag(!flag);
    // };
    return(
        <div className='weightloss__steps' style={{backgroundImage: `url(${steps_bg})` }}>
            <div className='container'>
                <div className='row mb-4 mb-5'>
                    <div className='col-12'>
                        <h6 className='subtitle'>Getting Started is Easy!</h6>
                        <h2 className='title'><strong>Begin with</strong> GLP-1 in 3 Steps</h2>
                    </div>
                </div>
                <div className='row row-cols-1 gap_y_20'>
                    <div className='col card-col'>
                    {/* <div className={`col card-col ${flag ? "active" : "deactive"}`} onClick={handleUpdate} id='ws_card_1' > */}
                        {/* <div className='active'> */}
                            <div className='row'>
                                <div className='col-sm-2 d-sm-block d-none card-arrow-col'>
                                    <img src={icon_steps_arrow_left} className='card-arrow-icon left' alt='icon_steps_arrow_left' loading='lazy' fetchPriority='low' style={{opacity: `0` }}/>
                                </div>
                                <div className='col-sm'>
                                    <div className='card h-100'>
                                        <div className='card-header'>
                                            <figure className='card-figure'>
                                                <img src={icon_complete} className='card-img' alt='icon_complete' loading='lazy' fetchPriority='low'/>
                                            </figure>
                                        </div>
                                        <div className='card-body'>
                                            <h6 className='card-header-title'>Step 1</h6>
                                            <h5 className='card-title'><strong>Complete a Medical</strong><br/>Questionnaire (15 Minutes)</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-2 d-sm-block d-none card-arrow-col'>
                                    <img src={icon_steps_arrow_right} className='card-arrow-icon right' alt='icon_steps_arrow_right' loading='lazy' fetchPriority='low' style={{opacity: `0` }}/>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className='col card-col'>
                    {/* <div className={`col card-col ${flag ? "deactive" : "active"}`} onClick={handleUpdate} id='ws_card_2'> */}
                        {/* <div className=''> */}
                            <div className='row'>
                                <div className='col-sm-2 d-sm-block d-none card-arrow-col'>
                                    <img src={icon_steps_arrow_left} className='card-arrow-icon left' alt='icon_steps_arrow_left' loading='lazy' fetchPriority='low' style={{opacity: `0` }}/>
                                </div>
                                <div className='col-sm'>
                                    <div className='card h-100'>
                                        <div className='card-header'>
                                            <figure className='card-figure'>
                                                <img src={icon_clinicians} className='card-img' alt='icon_complete' loading='lazy' fetchPriority='low'/>
                                            </figure>
                                        </div>
                                        <div className='card-body'>
                                            <h6 className='card-header-title'>Step 2</h6>
                                            <h5 className='card-title'><strong>Clinicians Review</strong><br/>Your Responses (2-3 Hours)</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-2 d-sm-block d-none card-arrow-col'>
                                    <img src={icon_steps_arrow_right} className='card-arrow-icon right' alt='icon_steps_arrow_right' loading='lazy' fetchPriority='low' style={{opacity: `0` }}/>
                                </div>
                            </div>
                        {/* </div>    */}
                    </div>
                    <div className='col card-col'>
                    {/* <div className={`col card-col ${flag ? "deactive" : "active"}`} onClick={handleUpdate} id='ws_card_3'> */}
                        {/* <div className=''> */}
                            <div className='row'>
                                <div className='col-sm-2 d-sm-block d-none card-arrow-col'>
                                    <img src={icon_steps_arrow_left} className='card-arrow-icon left' alt='icon_steps_arrow_left' loading='lazy' fetchPriority='low' style={{opacity: `0` }}/>
                                </div>
                                <div className='col-sm'>
                                    <div className='card h-100'>
                                        <div className='card-header'>
                                            <figure className='card-figure'>
                                                <img src={icon_begin_glp_1} className='card-img' alt='icon_begin_glp_1' loading='lazy' fetchPriority='low'/>
                                            </figure>
                                        </div>
                                        <div className='card-body'>
                                            <h6 className='card-header-title'>Step 3</h6>
                                            <h5 className='card-title'><strong>Begin Your GLP-1</strong><br/>Weight Loss Journey</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-2 d-sm-block d-none card-arrow-col'>
                                    <img src={icon_steps_arrow_right} className='card-arrow-icon right' alt='icon_steps_arrow_right' loading='lazy' fetchPriority='low' style={{opacity: `0` }}/>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeightLossSteps;