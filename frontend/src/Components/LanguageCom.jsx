import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { langChange } from '../../app/Slices/userSlice';

function LanguageCom() {
    const lang = useSelector((state) => state.user.language);
    const dispatch = useDispatch();

    return (
        <div className='flex items-center hover:text-teal-500 cursor-pointer gap-2'>
            <CiGlobe size={22} />
            <select
                onChange={(e) => dispatch(langChange(e.target.value))}
                value={lang.subTitle}
                className='cursor-pointer text-gray-900 font-medium bg-transparent focus:outline-none'
            >
                <option value="en">EN</option>
                <option value="fr">FR</option>
            </select>
        </div>
    );
}

export default LanguageCom;
