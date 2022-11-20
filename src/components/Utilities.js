import { Link } from 'react-router-dom';

function Utilities () {
    return(
        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
        data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link className="collapse-item active" to={'/colors-utilities'}>Color</Link>
            <Link className="collapse-item active" to={'/border-utilities'}>Border</Link>
            <Link className="collapse-item active" to={'/animation-utilities'}>Animation</Link>
            <Link className="collapse-item active" to={'/other-utilities'}>Other</Link>

        </div>
    </div>
    )
}

export default Utilities