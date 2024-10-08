import logo from '../../assets/images/logo.svg';
import banner_bg from '../../assets/images/banner_bg.webp';
import bottle_semaglutide from '../../assets/images/bottle_semaglutide.webp';
function HomeBanner(){
    return (
        <div className='home-banner'>
            <div className='weightloss__hero'>
                <div className='weightloss__hero__col__right d-md-block d-none'>
                    <img src={banner_bg} alt='pharmacy_banner' className='weightloss__hero__img' fetchPriority='low' />
                </div>
                <div className='container-md'>
                    <div className='row'>
                        <div className='col-12 d-md-none d-block'>
                            <a className='logo mobile' href='/'><img src={logo} className='logo-img' alt=''  loading='lazy' /></a>
                        </div>
                        <div className='col-xl-10 col-sm-7 align-self-center weightloss__hero__col__left'>
                            <a className='logo d-md-block d-none' href='/' >
                                <img src={logo} className='logo-img' alt='' loading='lazy' />
                            </a>
                            <h1 className='title mb-2'><span className='fw-700'>Transform Your Health</span> with <br className='d-md-block d-none'/>FDA-Approved Weight Loss Treatments</h1>
                            <p className='subtitle'>Achieve up to 15% Reduction in Body Weight with Healthvio*</p>                
                        </div>
                        <div className='col-sm-5 weightloss__hero__col__right d-md-none'>
                            <img src={banner_bg} alt='pharmacy_banner' className='weightloss__hero__img' fetchPriority='low' />
                        </div>
                    </div>
                    
                </div>
                <div className='weightloss__treatment'>
                    <div className='container-lg'>                    
                        <div className='row gap_y_20 justify-content-md-around'>
                            <div className='col card__col'>
                                <div className='card h-100 card__semaglutide'>
                                    
                                    <div className='card-body'>
                                        <div className='row align-items-center justify-content-center'>
                                            <div className='col-md col-12 text-center'>
                                                <img src={bottle_semaglutide} className='card__img' alt='bottle_semaglutide' loading='lazy' />
                                            </div>
                                            <div className='col-md col-12 text-center'>
                                                <div className='card-header'>
                                                    <h3 className='card__title text-md-start'>Semaglutide</h3>
                                                    <p className='card__text text-md-start'>Online Weight Loss Treatment</p>
                                                    <ul className='card__list'>
                                                        <li className='card__list__item ms-md-0'>Includes Provider + Medication</li>
                                                        <li className='card__list__item ms-md-0'>No Hidden Fees – No Insurance Needed</li>
                                                    </ul>
                                                    <h2 className='card__prize text-md-start'>$249/<span className='card__month'>month**</span></h2>
                                                    
                                                </div>                                                
                                                <div className='card-footer'> 
                                                    <a href='https://myhealthvio.com/?ref_code=pinellas-park-pharmacy' target='_blank' rel="noreferrer" className='btn btn-primary white'>Get Started</a>                                                   
                                                    <p className='card__bottom text-center'>Semaglutide has been FDA approved since June 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;