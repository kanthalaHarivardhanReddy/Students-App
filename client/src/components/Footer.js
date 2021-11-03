import React from 'react'

const Footer = () => {
    const Footerstyle={
        backgroundColor:'black',
        color:'white',
        marginBottom:'0px',
        padding:'6px',
        lineHeight:'20px',
        textAlign:'center',
        minHeigth:'2.5vh'
    }
    const date=new Date();
    return (
        <div style={Footerstyle}>
            <p>&copy; { date.getFullYear() }| Made By Harivardhan </p>
        </div>
    )
}

export default Footer
