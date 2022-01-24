import {BrowserRouter} from "react-router-dom";
import {StyledEngineProvider} from "@mui/styled-engine-sc";
import {Main} from "./Main";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});

export const TestReact = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <StyledEngineProvider injectFirst>
                    <Main/>
                </StyledEngineProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
}