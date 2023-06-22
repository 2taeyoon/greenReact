import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import './App.css';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient(); //QueryClient 클래스로 인스턴스를 만듦

function App() {
    return (
        <>
            <SearchHeader/>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
        </>
    );
}

export default App;