import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileTabBar } from "./components/MobileTabBar";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7ff] md:bg-white">
      <Header />
      <main className="flex-1 px-0 pb-32 pt-3 md:px-0 md:pb-0 md:pt-0">
        <div className="mx-auto min-h-full w-full max-w-md rounded-t-[32px] bg-white shadow-[0_-10px_40px_rgba(15,47,134,0.08)] md:max-w-none md:rounded-none md:bg-transparent md:shadow-none">
          <Outlet />
        </div>
      </main>
      <Footer />
      <MobileTabBar />
    </div>
  );
}
