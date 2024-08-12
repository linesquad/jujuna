import { useSelector } from "react-redux";
import { useBlogId } from "../../../hooks/useBlogs";
import Spinner from "../../Spinner";
import { parseISO, format } from "date-fns";
import { getMode } from "../../../features/darkModeSlice";
import NewsDetailsWrapper from "./NewsDetailsWrapper";

const NewsDetailsLeftSide = () => {
  const mode = useSelector(getMode);
  const { data, isLoading, isError, error } = useBlogId();

  if (isLoading) return <Spinner />;

  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  const isoDateString = data.created_at;
  const date = parseISO(isoDateString);
  const formattedDate = format(date, "dd/MM/yyyy");
  return (
    <NewsDetailsWrapper>
      <div className="flex flex-col max-w-[680px]">
        <div className="">
          <h1
            className={`${
              mode ? "text-white" : "text-black"
            } text-2xl lg:text-start sm:text-[28px] md:text-[32px] lg:text-4xl`}
          >
            {data.title.ge}
          </h1>
        </div>
        <div className="flex gap-4">
          <p className={`text-base sm:text-[19px] md:text-[22px] lg:text-2xl`}>
            {formattedDate}
          </p>
          <p>{data.author.ge}</p>
        </div>
      </div>
    </NewsDetailsWrapper>
  );
};

export default NewsDetailsLeftSide;
