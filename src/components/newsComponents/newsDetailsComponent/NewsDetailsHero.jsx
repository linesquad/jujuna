import { BsNewspaper } from "react-icons/bs";
import { useBlogId } from "../../../hooks/useBlogs";
import Spinner from "../../Spinner";
import { format } from "date-fns";
import Wrapper from "../../Wrapper";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const NewsDetailsHero = () => {
  const { data, isLoading, isError, error } = useBlogId();

  if (isLoading) return <Spinner />;

  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  const dateString = data.created_at;
  const date = new Date(dateString);

  const formattedDate = format(date, "d MMMM yyyy");

  return (
    <Wrapper>
      <div className="w-full p-5 tiny:px-1 sm:flex sm:items-center sm:justify-between sm:px-1 sm:gap-10 md:px-0 md:gap-0">
        <div className="flex flex-col pl-5 tiny:gap-1 tiny:pl-3 smaller:pl-4 sm:pl-0 sm:gap-2">
          <h1 className="text-[#613994] tiny:text-sm smaller:text-base text-base lg:text-lg">
            ბლოგები
          </h1>
          <h1 className="tiny:text-sm">{formattedDate}</h1>
          <h1 className="font-bold tiny:text-base">{data.title.ge}</h1>
          <div className="flex items-center pb-1 gap-2">
            <BsNewspaper />
            <p className="">{data.author.ge}</p>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <h1>Share</h1>
            </div>
            <div className="flex">
              <FaFacebookSquare />
              <FaSquareXTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pt-5">
          <img
            src={data.image}
            alt={data.title.ge}
            className="tiny:max-w-[230px] smaller:max-w-[300px] max-w-full"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default NewsDetailsHero;
