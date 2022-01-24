import {TestPaper} from "../core/paper/TestPaper";
import {MainAppBar} from "./MainAppBar";
import {MainRoute} from "./MainRoute";

export const Main = () => {
    return (
        <TestPaper sx={{
            display: 'flex',
            height: '100vh',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <MainAppBar />
            <MainRoute/>
        </TestPaper>
    )
}