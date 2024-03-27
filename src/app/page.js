"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pages = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(`/${name}`);
  };
  return (
    <div>
      <h1>This is the pages page</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/profile">Profile</Link>
      </p>

      <button
        onClick={() => navigate("about")}
        className=" bg-yellow-500 p-2 rounded-md border"
      >
        Go to the About Page
      </button>
      <br />
      <button
        onClick={() => navigate("login")}
        className=" bg-yellow-500 p-2 rounded-md border"
      >
        Go to the Login Page
      </button>
    </div>
  );
};

export default pages;
