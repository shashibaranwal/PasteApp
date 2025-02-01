import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div>
        <div className='flex flex-row gap-4'>
            <input type="text" placeholder='enter title here' 
            className='py-2 px-4 rounded-md min-w-[75%]'
            value={paste.title} disabled onChange={(e) => setTitle(e.target.value)}/>
            {/* <button onClick={createPaste}>
                { pasteId ? "Update Paste" : "Create new paste"}
            </button> */}
        </div>
        <div>
            <textarea
                className='py-2 px-4 mt-4 rounded-md min-w-[600px] w-4/5 h-3/5 min-h-[400px]'
                value={paste.content} disabled
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    </div>
  )
}

export default ViewPaste
