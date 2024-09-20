import { useContext, useEffect } from "react";
import { LayoutContext } from "../layouts/LayoutContext";
import ProjectList from "./resume_components/ProjectList";

const Projects = () => {
    const { setColor } = useContext(LayoutContext);
/*
    const onScroll = () => {
        const scrollTop = window.scrollY;
        console.log(scrollTop);
        if(scrollTop >= 100) {
            setColor('white')
        } else {
            setColor('transparent')
        }
    }*/

    useEffect( () => {
        setColor('white')
/*
        // can be deleted
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }*/
    }, [] );

    return <>
        <ProjectList/>
    </>
}

export default Projects;