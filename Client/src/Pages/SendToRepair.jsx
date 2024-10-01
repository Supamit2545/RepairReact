import React, { lazy, useEffect, useState } from 'react'
import "../assets/Css/SendRepair.css"
import Aos from 'aos'
import "aos/dist/aos.css"
// Mui
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Profile from "../assets/img/MyFace.jpg"

const SendToRepair = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const [username, setUsername] = useState("JKNKN")
    const [imgpreview, setImgPreview] = useState()
    const [imageSrc, setImageSrc] = useState(null);

    function preview() {

    }
    useEffect(() => {
        const uploadBtn = document.getElementById('upload')
        uploadBtn.addEventListener('click', function () {
            fileInput.click()
        })

        const fileInput = document.getElementById('fileInput');
        const preview = document.getElementById('preview');

    }, [])

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className='send-repair-container'>
            <p className='text-4xl text-red-500 font-bold text-center mb-10'>! This Demo !</p>
            <div className="send-repair-body">
                <form className='send-repair-form' action="">
                    <div className='left-send-form font-bold font-mono text-4xl space-y-4'>
                        <div className='flex justify-start'>
                            <p className='w-32'>Room :</p>
                            <input className='w-40 border-2 border-black rounded-xl px-5 bg-gray-300 text-xl text-green-800' type="text" name="" id="" placeholder='ROOM' />
                        </div>
                        <div className='flex space-x-2'>
                            <p>Cate : </p>
                            <select className='border-2 border-black rounded-xl bg-gray-300' name="" id="Cate">
                                <option value="None">None</option>
                                <option className='' value="Hardware">Hardware</option>
                                <option className='' value="Software">Software</option>
                            </select>
                        </div>
                        <div className=''>
                            <p>Send to Repair : </p>
                            <div className='CheckBoxs'>
                                <FormControlLabel className='Checkboxs' control={<Checkbox />} label="Computer" />
                                <FormControlLabel className='Checkboxs' control={<Checkbox />} label="Monitor" />
                                <FormControlLabel className='Checkboxs' control={<Checkbox />} label="Mouse" />
                                <FormControlLabel className='Checkboxs' control={<Checkbox />} label="Keybaord" />
                                <FormControlLabel className='Checkboxs' control={<Checkbox />} label="Projector" />
                                <FormControlLabel className='Checkboxs' control={<Checkbox />} label="Other" />
                            </div>
                        </div>
                        <div className="detail">
                            <textarea className='detail-textarea' name="" id="" placeholder='Type Detail here...'></textarea>
                        </div>
                    </div>
                    <div className='center-send-form'>
                        <div className='mx-auto'>
                            {imageSrc ? ( <img className='h-80' src={imageSrc} alt="Image Preview" width={400}/>):(<div></div>)}
                           
                        </div>
                        <input className='hidden' type="file" id="fileInput" accept="image/*" onChange={handleImageChange} />
                        <div id='upload' className='Upload bg-blue-300 transition-all hover:bg-blue-700 hover:text-white text-4xl font-bold font-mono border-2 border-black px-2 py-1 text-center hover:cursor-pointer'>Upload Iamge</div>
                    </div>
                    <div className='right-send-form'>
                        {username ? (
                            <div className='Username-Profile'>
                                <div className='mt-10 space-y-5'>
                                    <img className='profile-img' src={Profile} alt="" width={150}/>
                                    <p className='text-2xl font-bold text-center'>User :  <span className='text-green-700'>{username}</span></p>
                                    <p className='text-2xl font-bold text-center'>Role : </p>
                                </div>
                                <div className='text-center sendrepair-btn-box'>
                                    <button className='sendrepair-btn border-2 border-black rounded-xl px-5 py-2 bg-green-500 hover:bg-green-700 transition-all font-bold hover:text-white'>Send Repair</button>
                                </div>
                            </div>
                        ):(
                            <div>
                                <p className='text-red-500 text-center text-4xl font-bold'>Please Login First</p>
                                <img src="" alt="" width={300}/>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SendToRepair