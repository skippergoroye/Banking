import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Adrain", lastName: "JSM" };

  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
          <div>
            <MobileNav user={loggedIn} />
          </div>
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        </div> 
        {children}
      </div>
    </main>
  );
}
