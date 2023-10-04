import Image from "next/image";
import Link from "next/link";
import { TAbout } from "../../lib/microCMS/uwearAboutClient";
type TProps = {
  aboutData: TAbout;
};
export const About = ({ aboutData }: TProps) => {
  return (
    <div className="h-full w-full bg-[#F4F3EF] py-28 text-center">
      <h3 className="text-2xl xs:text-3xl">UWearの知ってほしいこと</h3>
      <p className="mx-auto mt-3 w-fit border-b border-dashed border-themeGray font-lora font-medium">
        About UWear
      </p>
      <ul className="hidden-scrollbar mt-12 flex snap-x snap-mandatory gap-x-6 overflow-x-scroll px-24">
        {aboutData.contents.map((data) => (
          <Link
            href={`/about/${data.id}`}
            key={data.id}
            className={`flex-none snap-center snap-always rounded-md active:brightness-125 sm:w-[500px]`}
          >
            <li className="flex h-full flex-col justify-between">
              <Image
                src={data.image.url}
                alt={data.title}
                className="w-[80vw] rounded-md object-cover"
                width={500}
                height={500}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
