import { projectData } from "../data";

const Projects = () => {
  const arr = Array.from({ length: 6 });

  return (
    <section className="mt-32">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-10">My projects</h1>
        {projectData.map(({ id, to, description, title, image }) => (
          <div
            key={id}
            className="w-1/2 h-36 group hover:bg-gray-50 transition-all rounded-lg mb-6 flex items-start gap-5"
          >
            <img
              src={image}
              alt=""
              width={200}
              height={120}
            />

            <div className="mt-5">
              <a href={to} className="text-xl group-hover:text-blue-500  font-medium mb-2" target="_blank">
                {title}
              </a>
              <p className="text-gray-600 mt-5">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
