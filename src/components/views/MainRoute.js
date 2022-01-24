import {Routes, Route} from "react-router-dom";
import {SuspenseView} from "./SuspenseView";
import {TestBox} from "../core/box/TestBox";
import {TransitionView} from "./TransitionView";

export const MainRoute = () => {
    return (
        <main style={{
            backgroundColor: "#ecf0f1",
            padding: '70px 10vw',
            flexGrow: 1,
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TestBox sx={{
                width: '50%',
                heigth: '50%'
            }}>
                <Routes>
                    <Route path="/test/suspense" element={<SuspenseView/>}/>
                    <Route path="/test/transition" element={<TransitionView/>}/>
                </Routes>
            </TestBox>
        </main>
    );
}