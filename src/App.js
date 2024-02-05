import logo from './logo.svg';
// import './App.css';
import './assets/css/styles.css';
import Comments from './Comments';
function App() {
  return (
    <div>
      <div className="h-full overflow-hidden">
        <p className="bg-red-500 text-center text-white text-2xl p-5 lg:text-left md:text-xl  w-screen ">
          React Resonsive form
        </p>
        <Comments />
      </div>
      <div className="bg-black py-5 list-none">
        <li className="text-white px-2">hello</li>
        <li className="text-white px-2">hello</li>
        <li className="text-white px-2">hello</li>
        <li className="text-white px-2">hello</li>
      </div>
    </div>
  );
}

export default App;
