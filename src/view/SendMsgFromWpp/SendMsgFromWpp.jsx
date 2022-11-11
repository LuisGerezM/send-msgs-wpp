import { Outlet } from "react-router-dom";
import DaysTabs from "../../components/DayTabs/DayTabs";

export const SendMsgFromWpp = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center">
      <DaysTabs />
      <Outlet />
    </div>
  );
};
