import React, { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav() {
	const[show,setShow]=useState(false);

	// 스크롤을 내렸을 때 Nav 배경 검정으로 만들기
	useEffect(() => {
	  window.addEventListener('scroll',()=>{
		if(window.scrollY>50){
			setShow(true);

		}
		else{
			setShow(false);
		}
	  })
	
	  return () => {
		window.removeEventListener('scroll',()=>{});
	  }
	}, [])

	return (
		<nav className={`nav ${show && "nav_black"}`}>
			<img
				alt="netfilx_logo"
				src="https://i.namu.wiki/i/Hi9fNu0oVzoFlyHuT7KYpD1kyDZo5biNu1T2Usudq8VIehGUaHyKOknMEP_MwmdMJXwvdG5XW7WyXmhrYGMPSw.svg"
				className="nav_logo h-1"
				onClick={() => window.location.reload() // 새로고침

                }
			/>
            <img
				alt="user_logged"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqNbGrzqGL1HkYngVKeKMnNe1BM2-vxJtU_aJxpIrvw&s"
				className="nav_avatar"
			/>
		</nav>
	);
}
