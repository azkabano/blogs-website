import Image from "next/image";
import blogs from "../data";
import CardDetails from "./CardDetails";

const CardData = ({ filter }: { filter: any }) => {


    let recentBlog: any = blogs.filter((blog) => filter == "isRecent" ? blog.isRecent : blog.isPopular === true)
    console.log(recentBlog)


    return (
        <div className="container grid grid-cols-3    place-items-center gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 ">

            {recentBlog.map((Blog: any) => <CardDetails data={Blog} />)}
        </div>

    );
}

export default CardData;