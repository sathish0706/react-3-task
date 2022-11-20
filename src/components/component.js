import {Link } from 'react-router-dom'

function Components () {
    return <>
     <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item active" to={'buttons'}>Buttons</Link>
                        <Link className="collapse-item active" to={'/cards'}>Cards</Link>
                    </div>
                </div>
    </>
}
export default Components;