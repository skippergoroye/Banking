import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Adrain', lastName: 'JSM'}

  
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar />
      {children}
    </main>
  );
}
