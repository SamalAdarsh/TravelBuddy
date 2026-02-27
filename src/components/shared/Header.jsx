import { Plane } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to={'/'} className=''>
        <div>
            <Plane className='w-15 h-15'/>
        </div>
        </Link>
    </header>
  )
}

export default Header