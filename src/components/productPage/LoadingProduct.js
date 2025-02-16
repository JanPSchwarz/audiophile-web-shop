import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductSkeleton() {
  return (
    <>
      <div className={`flex flex-col`}>
        <div className={`mt-12 flex flex-1 flex-col gap-12 md:flex-row`}>
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
        <div
          className={`my-6 flex flex-1 flex-col items-center gap-12 lg:flex-row`}
        >
          <div className={`w-full`}>
            <Skeleton height={"3rem"} width={"100%"} className={`my-12`} />
            <Skeleton count={5} width={"100%"} />
          </div>
          <div className={`w-full`}>
            <Skeleton height={"3rem"} width={"100%"} className={`my-12`} />
            <Skeleton count={5} width={"100%"} />
          </div>
        </div>
        <div className={`flex h-96 flex-col gap-6 md:flex-row`}>
          <div className={`flex-1`}>
            <Skeleton height={"50%"} />
            <Skeleton height={"50%"} />
          </div>
          <div className={`flex-1`}>
            <Skeleton height={"100%"} />
          </div>
        </div>
      </div>
    </>
  );
}
