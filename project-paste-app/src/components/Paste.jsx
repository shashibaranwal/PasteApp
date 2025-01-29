import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast'

const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));
    }
    function handleCopy(pasteContent) {
        navigator.clipboard.writeText(pasteContent);
        toast.success("note copied successfully")
    }

    function handleShare(shareData){
        navigator.clipboard.writeText(shareData);
        toast.success("link copied successfully")
    }


  return (
    <div>
      <input type="search" className='py-2 px-4 rounded-md min-w-[35rem]'
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-5 mt-5'>
        {
            filteredData.length > 0 &&
            filteredData.map(
                (paste) => {
                    return (
                        <div className='border'>
                            <div>
                                {paste.title}
                            </div>
                            <div>
                                {paste.content}
                            </div>
                            <div className='flex flex-row gap-4 place-content-evenly mt-4'>
                                <button>
                                    Edit
                                </button>
                                <button>
                                    <Link to={`/pastes/${paste?._id}`}>View</Link>
                                </button>
                                <button onClick={() => handleDelete(paste?._id)}>
                                    Delete
                                </button>
                                <button onClick={() => handleCopy(paste?.content)}>
                                    Copy
                                </button>
                                <button onClick={() => handleShare(paste?.navigator)}>
                                    Share
                                </button>
                            </div>
                            <div>
                                {paste.createdAt}
                            </div>
                        </div>
                    )
                }
            )
        }
      </div>
    </div>
  )
}

export default Paste
