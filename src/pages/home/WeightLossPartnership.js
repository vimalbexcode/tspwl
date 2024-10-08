import healthvio_logo from '../../assets/images/healthvio_logo.webp';
function WeightLossPartnership(){
    return(
        <div className='weightloss__partnership'>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-md-7">
                        <h2 class="head mb-md-3 mb-2"><strong>Our New </strong>Partnership</h2>
                        <img src={healthvio_logo} className='card__img' alt='healthvio_logo' loading='lazy' class="weightloss__partnership-img d-md-none d-block" fetchPriority="low" />
                        <p class="text">We’re excited to announce our partnership with Healthvio, a pioneer in effective weight loss solution! This collaboration allows us to offer you FDA-approved treatment like Semaglutide, which is proven to promote significant weight loss and enhance metabolic health.</p>
                    </div>
                    <div class="col-lg-4 col-md-5">
                        <img src={healthvio_logo} className='card__img' alt='healthvio_logo' loading='lazy' class="weightloss__partnership-img d-md-block d-none" fetchPriority="low" />
                    </div>
                </div>
            </div>
        </div>
    );
 }
export default WeightLossPartnership;
