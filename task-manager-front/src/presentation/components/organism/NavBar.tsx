import { FC } from "react";
import { signOut, useSession } from "next-auth/react";

export const NavBar: FC = ({}) => {
  const session = useSession();
  return (
    <div className="flex flex-wrap flex-row bg-principal-200 w-full h-full justify-around">
      <div className="flex flex-wrap flex-col self-center">
        <div className="flex">
          <span className="text-principal-0">{`${session?.data?.user?.name}`}</span>
        </div>
        <div className="flex">
          <span className="text-principal-0">{`${session?.data?.user?.email}`}</span>
        </div>
      </div>
      <div className="flex flex-wrap flex-col self-center">
        <button
          className="flex text-principal-0 bg-principal-200 p-4 rounded-[calc(15px)] justify-self-center self-center"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
