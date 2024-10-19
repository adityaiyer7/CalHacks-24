import Navbar from "../components/Navbar";
import TabSwitch from "../components/TabSwitch";
import AIBot from "../components/AIBot";

export default function Dashboard() {
  return (
    <div className="flex flex-row justify-start items-start overflow-y-auto md:pb-0 pb-32">
      <div className="flex flex-row justify-stretch items-stretch w-full h-screen">
        <Navbar />
        <div className="flex flex-col justify-start items-center w-full h-auto">
          {/*Chart View Selection*/}
          <TabSwitch />
          {/*AI Bot*/}
          <AIBot />
        </div>
      </div>
    </div>
  );
}
