import Link from "next/link";

interface INavBar {
  titlePage: string;
}

const linkPages = [
  { titleLink: "HOME", routeLink: "/" },
  { titleLink: "TODO", routeLink: "/todo" },
  { titleLink: "CONTADOR", routeLink: "/contador" },
];

export default function NavBar({ titlePage }: INavBar) {
  return (
    <>
      <h1 className="text-4xl font-bold text-amber-600">{titlePage}!</h1>

      <div className=" flex flex-wrap justify-center gap-2 w-full items-center">
        {linkPages.map((item) => (
          <Link href={item.routeLink} key={item.titleLink}>
            <span className="py-2 px-4 bg-slate-500 text-white hover:bg-slate-400">
              {item.titleLink}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
