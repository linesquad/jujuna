import ComentarNews from "./ComentarNews";
import NewsDetailsWriteComment from "./NewsDetailsWriteComment";
import NewsShare from "./NewsShare";
import NewsStar from "./NewsStar";

const NewsDetailComent = () => {
  return (
    <>
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
        <div className="order-1 sm:order-2">
          <NewsStar />
        </div>
        <div className="order-2 sm:order-1">
          <NewsShare />
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" sm:pt-[95px] md:pt-[90px] lg:pt-[85px] pb-16 order-2 sm:order-1">
          <ComentarNews />
        </div>
        <div className="pt-[100px]  sm:pt-0 order-1 sm:order-2">
          <NewsDetailsWriteComment />
        </div>
      </div>
    </>
  );
};

export default NewsDetailComent;
