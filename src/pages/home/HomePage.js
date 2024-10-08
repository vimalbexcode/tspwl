import HomeBanner from './HomeBanner';
import ChooseTreatment from './ChooseTreatment';
import WeightLossSteps from './WeightLossSteps';
import WeightlossPlan from './WeightlossPlan';
import WeightLossWorks from './WeightLossWorks';
import WeightLossJourney from './WeightLossJourney';
import WeightLossPartnership from './WeightLossPartnership';
import WeightLossFooter from './WeightLossFooter';


function HomePage(){
    return(
        <div className="home">
            <HomeBanner></HomeBanner>
            <ChooseTreatment></ChooseTreatment>
            <WeightLossSteps></WeightLossSteps>
            <WeightlossPlan></WeightlossPlan>
            <WeightLossWorks></WeightLossWorks>
            <WeightLossJourney></WeightLossJourney>
            <WeightLossPartnership></WeightLossPartnership>
            <WeightLossFooter></WeightLossFooter>
        </div>
    );
}
export default HomePage;