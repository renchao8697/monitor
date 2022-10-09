import './App.less'

function App() {
  return (
    <div className='container'>
      <div className='upper-box'>
        <div className='upper-1'>
          <div className="upper-1-child-1">upper-1-child-1</div>
          <div className="upper-1-child-2">upper-1-child-2</div>
        </div>
        <div className='upper-2'>
          <div className="upper-2-child-1">upper-2-child-1</div>
          <div className="upper-2-child-2">upper-2-child-2</div>
        </div>
        <div className='upper-3'>
          <div className="upper-3-child-1">
            <div>upper-3-child-1-1</div>
            <div>upper-3-child-1-2</div>
          </div>
          <div className="upper-3-child-2">upper-3-child-2</div>
        </div>
      </div>
      <div className='middle-box'>
        <div className="middle-1">middle-1</div>
        <div className="middle-2">middle-2</div>
        <div className="middle-3">middle-3</div>
      </div>
      <div className='lower-box'>
        <div className="lower-1">
          <div className="lower-1-child-1">
            <div className="lower-1-child-1-child-1">lower-1-child-1-child-1</div>
            <div className="lower-1-child-1-child-2">lower-1-child-1-child-2</div>
          </div>
          <div className="lower-1-child-2">
            <div className="lower-1-child-2-child-1">lower-1-child-2-child-1</div>
            <div className="lower-1-child-2-child-2">lower-1-child-2-child-2</div>
          </div>
        </div>
        <div className="lower-2">
          <div className="lower-2-child-1">lower-2-child-1</div>
          <div className="lower-2-child-2">lower-2-child-2</div>
        </div>
        <div className="lower-3">
          <div className="lower-3-child-1">lower-3-child-1</div>
          <div className="lower-3-child-2">
            <div>lower-3-child-2-1</div>
            <div>lower-3-child-2-2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
