const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen  text-black-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-teal-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-teal-600">
            <p>I'm React Developer. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent web and mobile
              application that improves the lives of those around me. React
              Developer with a proven ability to collaborate effectively with
              senior developers while spending extra time to be mentored. Enjoy
              working closely with team members to ensure workloads are
              effectively redirected to bottlenecks and personally picking up
              the slack when necessary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
