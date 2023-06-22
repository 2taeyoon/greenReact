import './App.scss';
import Button from './components/Button';

function App() {
    return (
        <div className='App'>
            <div className='btn_wrap'>
                <Button size="large" color="blue">블루 Large Size</Button>
                <Button size="medium" color="blue">블루 Medium Size</Button>
                <Button size="small" color="blue">블루 Small Size</Button>
                <Button>Default Size</Button>
            </div>
            <div className='btn_wrap'>
                <Button size="large" color="pink">핑크 Large Size</Button>
                <Button size="medium" color="pink">핑크 Medium Size</Button>
                <Button size="small" color="pink">핑크 Small Size</Button>
                <Button>Default Size</Button>
            </div>
            <div className='btn_wrap'>
                <Button size="large" color="lime">라임 Large Size</Button>
                <Button size="medium" color="lime">라임 Medium Size</Button>
                <Button size="small" color="lime">라임 Small Size</Button>
                <Button>Default Size</Button>
            </div>
            <div className='btn_wrap'>
                <Button size="large" color="pink" outline>핑크 Large Size</Button>
                <Button size="medium" color="pink">핑크 Medium Size</Button>
                <Button size="small" outline>핑크 Small Size</Button>
                <Button>Default Size</Button>
            </div>
            <div className='btn_wrap'>
                <Button size="large" color="pink" fullWidth onClick={ () => alert('잘했소') }>클릭해보시오!</Button>
                <Button size="medium" color="pink" fullWidth>핑크 Medium Size</Button>
                <Button size="small" fullWidth>핑크 Small Size</Button>
                <Button fullWidth>Default Size</Button>
            </div>
        </div>
    );
}

export default App;
