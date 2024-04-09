import {Link} from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <section className="relative z-10 bg-[#333333] py-[120px] h-screen flex justify-center items-center">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center px-4">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-yellow-500 sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                  Oops! That page cannot be found
                </h4>
                <p className="mb-8 text-lg text-white">
                  The page you are looking for does not exist or may have been
                  deleted
                </p>

                <Link
                  className="inline-block rounded-lg border text-yellow-500 border-yellow-500 px-8 py-3 text-center text-base font-semibold transition hover:bg-[#202020]"
                  to="/"
                >
                  Return To Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-r to-[#333333] from-[#000000]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#333333] via-[#333333] to-[#000000]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#333333] via-[#333333] to-[#000000]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-l to-[#333333] from-[#000000]"></div>
        </div>
      </section>
    </>
  );
}
