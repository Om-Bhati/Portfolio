// import React from "react";

// const Cover = ({ coverImg, title , name}) => {
//   const coverImgStyle = {
//     backgroundImage: `url(${coverImg})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     width: "100%",
//   };

//   return (
//     <div className="h-full" style={coverImgStyle}>
//       <div className="h-full flex justify-center items-center page-shadow">
//         <h1 className="text-primary text-4xl font-bold ">
//           {title}
//           <br />
//           {name}
//         </h1>
//       </div>
//     </div>
//   );
// };
// export default Cover;
// hooks/useMobileDetect.js

import React, { useEffect, useState } from "react";

const Cover = ({ coverImg, title, name }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is common breakpoint for mobile
    };

    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Desktop styles (your original styling)
  const desktopStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  // Mobile styles (only applied if mobile)
  const mobileStyle = {
    ...desktopStyle, // Start with desktop styles
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw"
  };

  return (
    <div 
      className="h-full" 
      style={isMobile ? mobileStyle : desktopStyle}
    >
      <div className="h-full flex justify-center items-center page-shadow">
        <h1 className="text-primary text-4xl font-bold text-center">
          {title}
          <br />
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Cover;