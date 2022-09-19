import { GiTwoHandedSword, GiMagickTrick } from 'react-icons/gi';
import { TbHeartPlus } from 'react-icons/tb';
import { FiShield } from 'react-icons/fi';
import { RiShieldFlashFill } from 'react-icons/ri';
import { MdSpeed } from 'react-icons/md'


const statToIcon = (type) => {
    switch (type) {
        case "hp":
            return <TbHeartPlus className='inline' />
        case "attack":
            return <GiTwoHandedSword className='inline' />
        case "defense":
            return <FiShield className='inline' />
        case "special-attack":
            return <GiMagickTrick className='inline' />
        case "special-defense":
            return <RiShieldFlashFill className='inline' />
        case "speed":
            return <MdSpeed className='inline' />
        default:
            break;
    }
}

export default statToIcon