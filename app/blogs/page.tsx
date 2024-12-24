import CardDetails from "../components/CardDetails";
import blogs from "../data";

const Blog = () => {


  return (
    <>
      <div className="main w-full min-h-screen ">
        <div className="filter"></div>
        <div className="container grid grid-cols-3    place-items-center gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 ">

          {blogs.map((Blog: any, index: number) => <CardDetails data={Blog} key={index} />)}
        </div>
      </div>

    </>
  );
};

export default Blog;
