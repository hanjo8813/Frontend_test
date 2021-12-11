import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home(props) {

    return (
        <div >
            <Link to={`/image/form`}>이미지 업로드 (폼 형식)</Link>
            <Link to={`/image/base64`}>이미지 업로드 (Base64)</Link>
            <Link to={`/calender`}>달력 테스트</Link>
        </div>
    );
}

export default Home;

