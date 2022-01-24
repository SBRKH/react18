import {TestAppBar} from "../core/appbar/TestAppBar";
import {TestToolbar} from "../core/toolbar/TestToolbar";
import {TestTypography} from "../core/typography/TestTypography";
import {TestButton} from "../core/button/TestButton";
import {useNavigate} from "react-router-dom";

export const MainAppBar = () => {
    const navigate = useNavigate();

    function handleClickSuspense() {
        navigate("/test/suspense");
    }

    function handleClickScheduler() {
        navigate("/test/transition");
    }


    return (
      <TestAppBar position={'fixed'} >
          <TestToolbar sx={{flexGrow: 1}}>
              <TestTypography variant={"h6"} color={"inherit"} sx={{flexGrow: 1}}>
                  React 18
              </TestTypography>
              <TestButton variant={"text"} sx={{color: "#fff"}} onClick={handleClickSuspense}>Suspense</TestButton>
              <TestButton variant={"text"} sx={{color: "#fff"}} onClick={handleClickScheduler}>Transition</TestButton>
          </TestToolbar>
      </TestAppBar>
    );
}