import { Routes, Route } from 'react-router-dom'

import Karol from './pastas/Karol'
import Jonatas from './pastas/Jonatas'

function Caminhos () {
    return (
        <Routes>
            <Route path='/karol' element={<Karol />} />
            <Route path='/jonatas' element={<Jonatas />} />
        </Routes>
    )
}

export default Caminhos