/* import { Copyright } from "lucide-react"; */

type Props = {
  title: string;
  text: string | "";
  children: React.ReactNode;
  px: string;
  id: string;
};
const Page: React.FC<Props> = ({ title, text, children, px, id }) => {
  return (
    <main
      id={id}
      className={`relative flex flex-col gap-12 py-12 ${
        px !== "" ? px : "px-12"
      } items-center justify-center w-full duration-500 transition-all  bg-black/70`}
     /*  style={{
        background: "radial-gradient(circle at 90%  70%, #1f3428, #0c0d0c",
      }} */
    >
      <section className="flex flex-col items-center font-Mont text-white/70 duration-500 transition-all">
        <h1 className="font-Fredoka font-bold text-center tracking-wide text-2xl sm:text-3xl flex items-center text-nowrap">
          {title}
        </h1>
        <p className="text-center leading-normal text-lg w-[80%] tracking-wide pt-6 duration-500 transition-all md:px-6">
          {text
            ? text
            : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia libero sapiente!"}
        </p>
      </section>
      {children}
      {/* <h1 className="font-Fredoka flex justify-end w-full relative lg:absolute bottom-0 md:bottom-4 md:pr-12  text-liteport/20 items-center text-sm">
        <Copyright size={12} />
        {new Date().getUTCFullYear().toString()} arinzewebdev
      </h1> */}
    </main>
  );
};

export default Page;

