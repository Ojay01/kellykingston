import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full max-w-2xl mx-auto text-center px-4">
      <div className="mb-8 inline-block">
        <Image
          src="/404.gif"
          alt="404 Error Cat"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-md mx-auto">
        {"Oops! The page you're looking for doesn't exist."}
      </p>
      <Link
        href="/"
        className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-duration-300"
      >
        Go back home
      </Link>
    </div>
  );
}
