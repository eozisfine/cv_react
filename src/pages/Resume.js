import CardSection from "./resume_components/CardSection";
import History from "./resume_components/History";
import Skills from "./resume_components/Skills";
import Languages from "./resume_components/Languages";
import Tools from "./resume_components/Tools";
import Education from "./resume_components/Education";
import Courses from "./resume_components/Courses";
import Hobbies from "./resume_components/Hobbies";


const Resume = () => {

    return <div style={{
        padding: '50px 12px'
    }}>
        <CardSection/>
        <History/>
        <Skills/>
        <Education/>
        <Courses/>
        <Languages/>
        <Tools/>
        <Hobbies/>
    </div>
}

export default Resume;