"use client";
import { signOut, useSession } from "next-auth/react";


function HomePage() {
  const session = useSession();
  console.log(session.data);

  return (
    <>
      <div className="flex flex-wrap flex-row bg-gray-800 w-full h-[calc(100px)] justify-around">
        <div className="flex flex-wrap flex-col self-center">
          <div className="flex">
            <span className="text-white">{`${session?.data?.user?.name}`}</span>
          </div>
          <div className="flex">
            <span className="text-white">{`${session?.data?.user?.email}`}</span>
          </div>
        </div>
        <div className="flex flex-wrap flex-col self-center">
          <button
            className="flex text-white bg-blue-600 p-4 rounded-[calc(15px)] justify-self-center self-center"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
