import { useLoaderData, useNavigation } from "react-router-dom";
import placeholderimage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Loader from "./Loader";

const Content = () => {
  const blog = useLoaderData();
  const navigation = useNavigation() 
  const { cover_image, title, tags, body_html } = blog;
  if(navigation.state === 'loading')
  return <Loader></Loader>
  return (
    <div className="mx-auto group hover:no-underline focus:no-underline border-2 p-3">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || placeholderimage}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
        {tags.map((tag) => (
          <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline font-bold"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        
      </div>
    </div>
  );
};

export default Content;
