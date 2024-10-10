import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Adrain", lastName: "JSM" };

  if (!loggedIn) redirect("/sign-in");

  return (
    // <main className="flex w-screen h-screen font-inter">
    //   <Sidebar user={loggedIn} />
    //   <div className="flex size-full flex-col">
    //     <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 pb-20 bg-blue-500 z-50">
    //       {/* <div> */}
    //         <MobileNav user={loggedIn} />
    //       {/* </div> */}
    //       <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
    //     </div>
    //     {children}
    //   </div>
    // </main>

    <main className="flex w-screen h-screen font-inter no-scrollbar">

  <div className="h-full sticky top-0">
    <Sidebar user={loggedIn} />
  </div>


  <div className="flex-1 flex flex-col overflow-hidden"> 
    
    <div className="h-16 w-full flex items-center justify-between p-5 shadow-creditCard sm:p-8 hadow-creditCard  bg-blue-500 z-50"> 
      <MobileNav user={loggedIn} />
      <Image src="/icons/logo.svg" width={50} height={50} alt="logo" />
    </div> 

    <div className="flex-1 overflow-auto no-scrollbar"> 
      {children}
    </div>
  </div>
</main>


  
  );
}
