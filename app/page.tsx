// Nextjs Page

import NavBar from "./components/layout/NavBar";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center py-6 overflow-hidden conatiner mx-auto bg-black">
        <Image
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/Launches_Desktop_3d5473553c.webp"
          alt="Workflow"
          width={1920}
          height={1080}
          // zoom image
          objectFit="contain"
        />
      </div>
    </>
  );
}
