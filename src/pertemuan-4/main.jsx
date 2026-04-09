import { createRoot } from 'react-dom/client'
import "./tailwind.css"
import FrameworkList from './FrameworkList'
import FrameworkListSearchFilter from './FrameworkListSearchFilter'
import ResponsiveText from './ResponsiveText'

createRoot(document.getElementById('root')).render(
    <div>
        {/* <FrameworkList/> */}
        {/* <FrameworkListSearchFilter/> */}
        <ResponsiveText/>
    </div>
)