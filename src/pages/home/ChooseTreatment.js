import choose_treatment from '../../assets/images/inj.webp';

function ChooseTreatment(){
    return(
        <div className='weightloss__choose__treatment'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 col__left'>
                        <h2 className='title clr__white mb-md-5 mb-3'>Why Choose Healthvio’s Treatments?</h2>
                        <p className='clr__white mb-3'><strong>Cutting-Edge Solutions:</strong> Opt for groundbreaking treatments like Semaglutide, which have shown exceptional results in clinical trials, delivering not just weight loss but overall improved health.</p>
                        <p className='clr__white'><strong>Transparent and Straightforward:</strong> All plans, including Semaglutide at $249/month, are comprehensive. They cover all necessary consultations and medications with no hidden fees.</p>
                    </div>
                    <div className='col-md-6 col__right pe-lg-5'>
                        <img src={choose_treatment} className='weightloss__choose__treatment__img' alt='choose_treatment' loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseTreatment;