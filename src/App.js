import logo from './logo.svg';
// import './App.css';
import './assets/css/styles.css';
import Comments from './Comments';
import Footer from './Footer';
import consoleLogger from './hooks/logger';

function App() {
  console.log(process.env.REACT_APP_ENV);
  consoleLogger('app');
  return (
    <div>
      <div className="h-full overflow-hidden">
        <p className="bg-red-500 text-center text-white text-2xl p-5 lg:text-left md:text-xl  w-screen ">
          React Resonsive form
        </p>
        <Comments />
        <Footer />
      </div>
    </div>
  );
}

export default App;
