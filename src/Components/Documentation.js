import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Documentation = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.open("https://instraktor.gitbook.io/instraktor-fms/", '_self');
      }, []);
  return (
    <div>
        
    </div>
  )
}

export default Documentation