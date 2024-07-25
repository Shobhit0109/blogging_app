import AuthContextProvider from "@/lib/contexts/AuthContext";
import Sidebar from "./component/Sidebar";

export default function Layout({ children }: any) {
  return (
    <AuthContextProvider>
      <section className="flex">
        <Sidebar />
        {children}
      </section>
    </AuthContextProvider>
  );
}
