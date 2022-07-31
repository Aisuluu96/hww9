import './InTe.css';

function Text ({taskList}) {
    return (
        <div className='text'>
            {taskList.map((item)=>
            <li>{item.date}{item.title} </li>

            )}

       </div>
    )
}
export default Text;