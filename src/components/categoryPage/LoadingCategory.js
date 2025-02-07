import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CategorySkeleton() {
  return (
    <>
      <div className={`flex flex-col gap-12 lg:flex-row`}>
        <Skeleton
          containerClassName={`flex-1`}
          height={"24rem"}
          width={"100%"}
          duration={1}
        />
        <Skeleton
          containerClassName={`flex-1 w-4/5 flex flex-col self-center`}
          className={``}
          height={30}
          count={5}
          width={"100%"}
          duration={1}
        />
      </div>
      <div className={`flex flex-col gap-12 lg:flex-row-reverse`}>
        <Skeleton
          containerClassName={`flex-1`}
          height={"24rem"}
          width={"100%"}
          duration={1}
        />
        <Skeleton
          containerClassName={`flex-1 w-4/5 flex flex-col self-center`}
          className={``}
          height={30}
          count={5}
          width={"100%"}
          duration={1}
        />
      </div>
    </>
  );
}
