import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        console.log("inside useEffect");
        if(pasteId){
            const paste = allPastes.find((p) => p._id === pasteId);
            console.log("page found");
            setTitle(paste.title);
            setValue(paste.content);
        }
        
    }, [pasteId]);

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if(pasteId){
            // update
            dispatch(updateToPastes(paste));
        } else {
            // create
            dispatch(addToPastes(paste));
        }

        // after creation and updation
        setTitle('');
        setValue('');
        setSearchParams({});
    }

  return (
    <div>
        <div className='flex flex-row gap-4'>
            <input type="text" placeholder='enter title here' 
            className='py-2 px-4 rounded-md min-w-[75%]'
            value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={createPaste}>
                { pasteId ? "Update Paste" : "Create new paste"}
            </button>
        </div>
        <div>
            <textarea
                className='py-2 px-4 mt-4 rounded-md min-w-[600px] w-4/5 h-3/5 min-h-[400px]'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Home
