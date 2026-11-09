import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 flex flex-col justify-center items-center text-center gap-3 px-3 py-4 mt-5">
      <div className="flex flex-row justify-center w-full gap-14">
        <ul className="flex flex-col gap-2">
          <li className="font-semibold">
            <Link href="/about" className="hover:underline">About</Link>
          </li>
          <li className="font-semibold">
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
          <li className="font-semibold">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 font-bold">
          <li className="font-semibold">
            <Link href="/buyingandselling" className="hover:underline">Buying & Selling</Link>
          </li>
          <li className="font-semibold">
            <Link href="/careers" className="hover:underline">Careers</Link>
          </li>
          <li className="font-semibold">
            <Link href="/blog" className="hover:underline">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center w-full">All rights reserved @ copyright market 2026</p>
      </div>
    </footer>
  );
};

export default Footer;