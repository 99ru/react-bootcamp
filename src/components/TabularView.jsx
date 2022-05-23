import { useState } from 'react'; 
import '../styles/TabularView.css';

const TabularView = () => {
  const [view, setView] = useState(0)


  return (
    <div>
      <h1>Tabular views</h1>
      <button onClick={() => setView(1)} className="btn-1">1</button>
      <button onClick={() => setView(2)} className="btn-2">2</button>
      <button onClick={() => setView(3)} className="btn-3">3</button>

      <div className='views'>
        {view === 1 && <p className='view1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, adipisci.</p>}
        {view === 2 && <p className='view2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, neque!</p >}
        {view === 3 && <p className='view3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi.</p>}
      </div>

    </div>
  );
}
export default TabularView;