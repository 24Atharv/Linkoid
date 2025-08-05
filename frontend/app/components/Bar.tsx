import Image from 'next/image' 
import image from '../Icons/download (1).png'
export default function Bar () {
    return <div className='mt-20 border border-gray-100 rounded-lg'>
        <Image src={image} alt="My icon" className='h-420 w-220 rounded-lg p-2'/>
    </div>
}

