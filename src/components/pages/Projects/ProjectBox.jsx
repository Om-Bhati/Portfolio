// import React from "react";

// const ProjectBox = ({ ProjectData }) => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-4 mt-10">
//         {ProjectData.map((project, index) => {
//           return (
//             <div key={index} className="h-[160px] rounded-xl">
//               <img
//                 src={project.image}
//                 alt=""
//                 className="w-full h-full rounded-xl"
//               />
//               {/* details section */}
//               <div className="pt-3">
//                 <h1 className="text-2xl font-semibold">{project.name}</h1>
//                 <p className="line-clamp-2 text-gray-500">
//                   {project.description}
//                 </p>
//                 <a
//                   href={project.GitRepo_Link}
//                   target="_blank"
//                   className="primary-btn mt-3"
//                 >
//                   View project
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProjectBox;
import React from "react";

const ProjectBox = ({ ProjectData, isMobile }) => {
  return (
    <div className={isMobile ? "space-y-10" : ""}>
      <div className={isMobile ? "space-y-10" : "grid grid-cols-2 gap-4 mt-10"}>
        {ProjectData.map((project, index) => {
          return (
            <div 
              key={index} 
              className={isMobile ? "w-full" : "h-[160px] rounded-xl"}
            >
              {/* Desktop View (original styling) */}
              {!isMobile && (
                <>
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full rounded-xl"
                  />
                  {/* details section */}
                  <div className="pt-3">
                    <h1 className="text-2xl font-semibold">{project.name}</h1>
                    <p className="line-clamp-2 text-gray-500">
                      {project.description}
                    </p>
                    <a
                      href={project.GitRepo_Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn mt-3"
                    >
                      View project
                    </a>
                  </div>
                </>
              )}

              {/* Mobile View (new styling) */}
              {isMobile && (
                <div className="flex flex-col">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="pt-3">
                    <h1 className="text-xl font-semibold">{project.name}</h1>
                    <p className="text-gray-500">
                      {project.description}
                    </p>
                    <a
                      href={project.GitRepo_Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-btn mt-3 block w-full text-center"
                    >
                      View project
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBox;