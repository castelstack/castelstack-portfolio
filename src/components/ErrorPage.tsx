import errorUser from "@/assets/svg/oops.svg";
import Image from "next/image";
import AppLayout from "./AppLayout";

export const UserNotFound = () => {
  return (
    <AppLayout>
      <section className="h-[100vh] w-full backgroundDark grid place-content-center">
        <div className="max-w-[500px] max-h-[500px]">
          <Image
            src={errorUser}
            alt="user not found | Web illustrations by Storyset"
            className="max-w-[500px] max-h-[500px]"
          />
          <h5 className="text-extrabold text-2xl text-center uppercase font-canela tracking-wider">
            User not found!!!
          </h5>
        </div>
      </section>
    </AppLayout>
  );
};
