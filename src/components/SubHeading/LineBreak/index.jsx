import Image from "next/image";
import { TfiLineDotted } from "react-icons/tfi";
import images from "constants/images";

const LineBreak = () => {
  return (
    <div className="spoon_img">
      {/* <Image src={images?.spoon || images?.logo} alt="spoon_image" /> */}
      <TfiLineDotted />
    </div>
  );
};

export default LineBreak;
