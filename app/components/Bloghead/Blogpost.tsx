import { Markdown } from "contentlayer/core";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function BlogPost({
  title,
  date,
  url,
  readTime,
}: {
  title: string;
  date: string;
  url: string;
  readTime: string;
}) {
  return (
    <main className="w-full">
      <Link href={url}>
        <div className="text-3xl font-extrabold max-w-fit hover:text-sky-600 transition-all cursor-pointer">
          {title}
        </div>
      </Link>
      <div className="flex w-full justify-between pe-12">
        <div className="font-normal max-w-fit text-base text-gray-600">
          {format(parseISO(date), "LLLL d, yyyy")}
        </div>
        <div className="font-normal max-w-fit text-base text-gray-600">
          {readTime}
        </div>
      </div>
    </main>
  );
}
