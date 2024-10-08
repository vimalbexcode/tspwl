import work_bg from '../../assets/images/work_bg.webp';
import icon_rapid from '../../assets/images/icon_rapid.webp';
import icon_reduce from '../../assets/images/icon_reduce.webp';
import icon_increased from '../../assets/images/icon_increased.webp';
import icon_more_energy from '../../assets/images/icon_more_energy.webp';

function WeightLossWorks(){
    return(
        <div className='weightloss__works'>
            <div className='container-xl'>
                <div className='row'>
                    <div className='col-12 col-lg-9'>
                        <h6 className='subtitle'>A Weight Loss Medication That Really Works!</h6>
                        <h2 className='title mb-md-4 mb-2'><strong>How Does</strong> GLP-1 Work?</h2>
                        <p className='text'>GLP-1 is a natural hormone in the body critical to managing your metabolism. It Is responsible for sending signals to the brain that regulate hunger and satiety.</p>
                        <p className='text mb-md-5 mb-2'>In the right doses, GLP-1 treatment works by acting like this hormone, helping to reduce excessive appetite and improve insulin secretion — two key factors in rapid weight loss.</p>
                    </div>
                </div>
            </div>
            <div className='container-xl'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <h2 className='head mb-0 text-center'>Within a few weeks you can expect:</h2>
                    </div>
                </div>
            </div>
            <div class='weightloss__works__group' style={{backgroundImage: `url(${work_bg})` }}>
                <div className='container-xl'>
                    <div className='row justify-content-center'>                       
                        <div className='col-lg-10 col-md-12'>
                            <div className='row row-cols-2 row-cols-md-4 gap_y_30'>
                                <div className='col'>
                                    <div className='card h-100' id='imagebox_1'>
                                        <img src={icon_rapid} alt='icon_rapid' className='card-icon' fetchPriority='low' />
                                        <div className='card-text'>Rapid <br className='d-none d-md-block' />weight loss</div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='card h-100' id='imagebox_2'>
                                        <img src={icon_reduce} alt='icon_reduce' className='card-icon' fetchPriority='low' />
                                        <div className='card-text'>Reduced hunger<br className='d-none d-md-block' />and cravings </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='card h-100' id='imagebox_3'>
                                        <img src={icon_increased} alt='icon_increased' className='card-icon' fetchPriority='low' />
                                        <div className='card-text'>Increased desire to <br className='d-none d-md-block' /> exercise</div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='card h-100' id='imagebox_4'>
                                        <img src={icon_more_energy} alt='icon_more_energy' className='card-icon' fetchPriority='low' />
                                        <div className='card-text'>More energy<br /></div>
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
 export default WeightLossWorks;