import React from "react";
import personImg from "../../../assets/person2.jpg";
import HireMeModal from "../HireMeModal/HireMeModal";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Om Bhati
              </p>
              <p className="text-black/75">
                "I am a passionate Full Stack Web Developer with a keen interest
                in AI/ML, always eager to explore new technologies. I love
                solving complex problems through Data Structures and Algorithms
                and actively participate in Competitive Programming. With a
                strong foundation in both development and problem-solving, I
                strive to build efficient and scalable solutions."
              </p>
              <HireMeModal />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
