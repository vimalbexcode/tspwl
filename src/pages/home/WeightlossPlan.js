import right_angle from '../../assets/images/right_angle.webp';
import weightloss_plan_bg from '../../assets/images/weightloss_plan_bg.webp';

function WeightlossPlan(){
    return(
        <div className='weightloss__plan' style={{backgroundImage: `url(${weightloss_plan_bg})` }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h6 className='subtitle clr__white text-center mb-2 mb-md-0'>Options for Managing Weight with GLP-1</h6>
                        <h2 className='title clr__white text-center mb-2 mb-md-5'>Pick the Plan <span className='fw-light'>That’s Right For You</span></h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-10 col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='row align-items-center'>
                                    <div className='col-md'>
                                        <div className='left-text'>Semaglutide:</div>
                                        <div className='left-head mb-2 mb-md-3'>Transform Your Weight Loss Journey</div>
                                        <div className='left-text mb-2 mb-md-3'>Semaglutide is a groundbreaking injectable medication designed to promote substantial weight loss.</div>
                                        <ul className='list ps-4'>
                                            <li className='list-items'>Includes Provider + Medication</li>
                                            <li className='list-items'>No Hidden Fees – No Insurance Needed</li>
                                        </ul>
                                    </div>
                                    <div className='col-md-auto d-none d-md-block'>
                                        <div className='price'>
                                            <div className='price-title text-center'>$249</div>
                                            <div className='price-sub text-center'>Per Month**</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md pt-0 pt-md-2'>
                                        <div className='text clr__white mb-md-0 mb-2'>Semaglutide Weight Loss Results</div>
                                        <div className='text clr__white mb-md-0 mb-2'><img src={right_angle} alt='right_angle' className='card-angle me-1 me-md-3' fetchPriority='low' />Expect an average weight loss of 15.2%, alongside significant reductions in waist circumference.</div>
                                    </div>
                                    <div className='col-md-auto'>
                                        <div className='card-cta d-none d-md-block'>
                                            <a href='https://myhealthvio.com/?ref_code=tampa-specialty-pharmacy' target='_blank' rel="noreferrer" className='btn btn-primary blue'>Get Started</a>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='text fw-bold clr__white text-center'>Assisted thousands in losing weight diet and exercise.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='row d-md-none d-block mt-4'>
                                <div className='price'>
                                <div className='price-title text-center'>$249</div>
                                <div className='price-sub text-center'>Per Month**</div>
                                </div>
                                <div className='link-cta text-center'>
                                    <a href='https://myhealthvio.com/?ref_code=tampa-specialty-pharmacy' target='_blank' rel="noreferrer" className='btn btn-primary blue mt-3'>Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   );
}
export default WeightlossPlan;