import './SchoolPost.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function SchoolPost(){  
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [person, setPerson] = useState('');
    const [fundingDate1, setFundingDate1] = useState('');
    const [fundingDate2, setFundingDate2] = useState('');
    const [info, setInfo] = useState('');
    const [postImg, setPostImg] = useState([]); 
    const [preview, setPreview] = useState([]); 
    const navigate = useNavigate();
    const Backschool = ()=>{navigate('/school')};
    
    const handleSubmit = ()=>{
        if( !title|| !person|| ! fundingDate1|| !fundingDate2|| !info){
            setShow(true);
            alert('모든 칸을 채워주세요');
        }
        else{
            alert('펀딩이 등록되었습니다');
            Backschool();
        };
        
    }; 
    


    const handleUpload = (e)=>{
        const fileArr = e.target.files;
        setPostImg(Array.from(fileArr)); 
        
        const fileUrl = []; 
     

        for(let i =0; i < fileArr.length; i++){
            let reader = new FileReader(); 
            reader.onload = ()=>{          
                fileUrl[i] = reader.result;
                setPreview([...fileUrl]);
            }
            reader.readAsDataURL(fileArr[i]);
        }
    };


    return(
        <div className='schoolPost'>
            <div className='scp-photo-container'>
                <label className='photo-fill-btn' htmlFor = 'uploadPhoto'>
                    사진 업로드 
                    <input type='file' accept='image/*' style={{display:'none'}} id='uploadPhoto'
                        multiple required onChange={handleUpload} /> 
                </label>
                <div style={{gap:'2px', marginTop:'10px'}}>
                    <p>사진을 한번에 여러장 선택하세요.</p>
                    <p>맨 첫줄 좌측 사진이 대표사진으로 설정됩니다.</p>
                </div>
            </div>
            <div className='scp-photo-grid'>
                {
                    preview.map((image,id)=>{
                        return(
                        <div className='selected' key={id}>
                            <img src={image} id='selectedPhotos'></img>
                        </div>
                        )
                    }) 
                }
            </div>

                {/* {
                    preview.length >= 4 ? null: <div/> 모르겟더염
                }  */}
            
            <div id='title-container'>
                    <h3>글 제목</h3>
                    <input type='text' id='scp-title' placeholder='지역 + 유치원이름' 
                     value = {title} onChange={(e)=> setTitle(e.target.value)}></input>
            </div>
            <div id='person-container'>
                    <h3>판매자 정보</h3>
                    <input type='text' id='scp-person' placeholder='유치원이름 기재' 
                      value = {person} onChange={(e)=> setPerson(e.target.value)}></input>
            </div>
            <div id='date-container'>
                    <h3>펀딩기간</h3>
                    <input type='date' id='scp-fundingDate1' 
                      value = {fundingDate1} onChange={(e)=> setFundingDate1(e.target.value)}></input> 
                    <h2>~</h2>
                    <input type='date' id='scp-fundingDate2' 
                      value = {fundingDate2} onChange={(e)=> setFundingDate2(e.target.value)}></input>
            </div>
            <div id='info-container'>
                    <h3>상품설명</h3>
                    <textarea id='scp-info' placeholder='상품에 대해 설명해주세요..' 
                      value = {info} onChange={(e)=> setInfo(e.target.value)}></textarea>
            </div>
            <button id='schuploadbtn' onClick={handleSubmit}>등록하기</button>
            <button id='schuploadbtn' onClick={Backschool}>글 목록</button>
        </div>
    )
    

};



export default SchoolPost;