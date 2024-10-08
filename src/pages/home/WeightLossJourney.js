import w_loss_cta_mobile from '../../assets/images/w_loss_cta_mobile.webp';

function WeightLossJourney(){
    return(
        <div className='weightloss__ctastart'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='web d-none d-md-block'>
                        <div className='row'>
                            <div className='col-md pt-0 pt-md-2'></div>
                            <div className='col-md-auto'>
                                <div className='getstart'> 
                                    <a href='https://myhealthvio.com/?ref_code=pinellas-park-pharmacy' target='_blank' rel='noreferrer' className='btn btn-primary white'>Get Started</a>
                                </div>
                            </div>
                            <div className='col-md-12 justify-content-end d-flex'>
                                <div className='content'>
                                    <div className='content-title'><strong>Start Your </strong>Weight Loss Journey Today!</div>
                                    <div className='content-text'>A Weight Loss Medication That Really Works!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile d-block d-md-none'>
                        <div className='row'>
                            <div className='col-12'>
                                <img src={w_loss_cta_mobile} alt='w_loss_cta_mobile' className='weightloss__ctastart__img' fetchPriority='low' />
                            </div>
                            <div className='col-12'>
                                <div className='mobile__cta'>
                                    <a href='https://myhealthvio.com/?ref_code=pinellas-park-pharmacy' target='_blank' rel='noreferrer' className='btn btn-primary white'>Get Started</a>
                                </div>
                                <div className='content w-100 description'>
                                    <div className='content-title'><strong>Start Your </strong>Weight Loss Journey Today!</div>
                                    <div className='content-text'>A Weight Loss Medication That Really Works!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 }
 export default WeightLossJourney;