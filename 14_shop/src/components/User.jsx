import React from 'react'

const User = ({user :{photoURL}, handleLogout}) => {
    return (
        <div className='group relative w-9 h-9 cursor-pointer px-2.5 box-content'>
            <img src={photoURL} alt='userPhotoURL' className='rounded-full'/>
            <button onClick={handleLogout}
                className='w-24 h-9 invisible group-hover:visible absolute right-2/4 translate-x-2/4
                bg-brand text-white rounded-full hover:contrast-125'>로그아웃
            </button>
        </div>
    )
}

export default User