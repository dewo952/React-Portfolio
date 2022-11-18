import Quote from '../public/assets/projects/QuoteGenerator.jpg'
import NetFlix from "../public/assets/projects/netflix.png";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-teal-600">
          Projects
        </p>
        <p className="py-4 text-2xl">What I&apos;ve Built</p>
        <div className="grid md:grid-cols-2  gap-8">
          <ProjectItems
            title="Quote Generator"
            backgroundImg={Quote}
            projectUrl="/QuoteGenerator"
            tech="Javascript"
          />
          <ProjectItems
            title="NextJs Ecommerce Website"
            backgroundImg={""}
            projectUrl="/NextJsEcommerce"
            tech="Next JS"
          />
          <ProjectItems
            title="Netflix Clone"
            backgroundImg={NetFlix}
            projectUrl="/NetflixClone"
            tech="React JS"
          />
          <ProjectItems
            title="React-Native Social Media App"
            backgroundImg={""}
            
            projectUrl="/ReactNativeSocialApp"
            tech="React Native"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Projects;
