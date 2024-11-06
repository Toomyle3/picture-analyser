import { PodcastCardProps } from "#/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PodcastCard = ({
  image_url,
  image_id,
  user,
  _creationTime,
}: PodcastCardProps) => {
  const router = useRouter();

  // const handleViews = () => {
  //   router.push(`/podcasts/${podcastId}`, {
  //     scroll: true,
  //   });
  // };

  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={image_url}
          width={200}
          height={200}
          alt={image_id}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">
            {image_id}
          </h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {user}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
