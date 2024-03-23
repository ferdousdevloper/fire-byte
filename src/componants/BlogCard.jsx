/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeholderimage from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";


const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;
  

  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 border-primary hover:scale-105 hover:border-secondary border-opacity-30 "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderimage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs ">
            {new Date(published_at).toDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div onClick={()=>handleDelete(id)} className="absolute bg-primary p-2 ml-5 rounded-full  cursor-pointer text-2xl text-secondary hover:scale-105 overflow-hidden hover:bg-secondary hover:text-primary -top-4 -right-4">
          <MdDeleteForever></MdDeleteForever>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
