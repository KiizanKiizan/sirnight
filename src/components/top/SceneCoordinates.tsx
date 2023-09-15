import { Fragment, useState } from "react";
import { TCoordinate } from "../../lib/microCMS/uwearClient";
import { Button } from "../baseParts/Button";
import { CoordinateCard } from "./CoordinateCard";
type TProps = {
  coordinatesData: TCoordinate;
};
export const SceneCoordinates = ({ coordinatesData }: TProps) => {
  const [isOpenMore, setIsOpenMore] = useState(false);
  const handleClick = () => {
    setIsOpenMore((prevState) => !prevState);
  };
  const contents = coordinatesData.contents;
  return contents.map((content, i) => {
    if (i < 3) {
      return (
        <CoordinateCard
          key={content.id}
          imageFilePath={content.imageUrl.url}
          title={content.title}
          coordinateNumber={`コーデ#0${i + 1}`}
          mainText={content.mainText}
          subText={content.subText}
        />
      );
    }
    if (isOpenMore) {
      return (
        <CoordinateCard
          key={content.id}
          imageFilePath={content.imageUrl.url}
          title={content.title}
          coordinateNumber={`コーデ#0${i + 1}`}
          mainText={content.mainText}
          subText={content.subText}
        />
      );
    } else {
      if (i > 3) return <Fragment key={content.id}></Fragment>;
      return (
        <div className="relative" key={content.id}>
          <CoordinateCard
            imageFilePath={content.imageUrl.url}
            title={content.title}
            coordinateNumber={`コーデ#0${i + 1}`}
            mainText={content.mainText}
            subText={content.subText}
            isBlur
          />
          <div className="absolute bottom-1/2 left-1/2 w-2/3 sm:w-1/2 translate-x-[-50%] translate-y-[50%]">
            <Button
              onClick={handleClick}
              weight="medium"
              className="text-[3.5vw] sm:text-sm mx-0 py-5 w-full"
            >
              コーデをもっと見る
            </Button>
          </div>
        </div>
      );
    }
  });
};
