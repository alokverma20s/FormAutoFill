"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pages = () => {
  return (
    <div>
      <h1>Pages</h1>
      <Link href="/addUser/page">Add User</Link>
    </div>
  );
};

export default pages;
