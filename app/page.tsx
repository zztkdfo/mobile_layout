import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="lg:relative lg:block lg:min-w-[280px] lg:max-w-[430px] left-[45%] xl:left-[50%] m-0 flex w-full items-center justify-center ">
      <div className="lg:fixed lg:block inset-0 mx-auto hidden  ">
        <div className="absolute bottom-0 left-[calc(50%_-_440px)] top-0 flex h-screen w-[360px] flex-col items-center justify-center border-gray-500 border-solid border-x ">
          <div className="flex flex-col gap-2">
            <div className="bg-primary text-white px-4 py-2 rounded">
              Primary Button
            </div>

            <div className="bg-secondary-blue text-white px-4 py-2 rounded">
              Blue Button
            </div>

            <div className="bg-secondary-light text-white px-4 py-2 rounded">
              Light Orange Button
            </div>

            <div className="bg-secondary-yellow text-white px-4 py-2 rounded">
              Yellow Button
            </div>

            <div className="bg-secondary-red text-white px-4 py-2 rounded">
              Red Button
            </div>
          </div>
        </div>
        <div className="bg-[#ff5300] absolute bottom-0 h-[64px] w-full"></div>
      </div>

      <main className=" relative flex flex-col border-gray-500 border-solid border-x  h-fit min-h-dvh w-full min-w-[500px] max-w-[750px] items-center justify-center ">
        <article className="flex w-full flex-1 flex-col">
          <div className="relative flex w-full flex-col bg-[#F7F7F7]"></div>
        </article>
        <Navigation />
      </main>
    </div>
  );
}
