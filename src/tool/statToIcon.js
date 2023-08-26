import { GiTwoHandedSword, GiMagickTrick } from 'react-icons/gi';
import { TbHeartPlus } from 'react-icons/tb';
import { BiTargetLock } from 'react-icons/bi'
import { FiShield } from 'react-icons/fi';
import { RiShieldFlashFill } from 'react-icons/ri';
import { MdSpeed, MdOutlineCallMissedOutgoing } from 'react-icons/md'


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
        case "accuracy":
            return <BiTargetLock className='inline' />
        case "evasion":
            return <MdOutlineCallMissedOutgoing className='inline' />
        default:
            break;
    }
}

export default statToIcon