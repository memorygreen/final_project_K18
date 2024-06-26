import React, { useEffect, useState } from 'react'
import './MissingAvatar.css';

import avatar from "./assets/avatar.png"

import top_long_black from "./assets/top/top_long_black.png" // 상의 긴팔
import top_long_blue from "./assets/top/top_long_blue.png"
import top_long_brown from "./assets/top/top_long_brown.png"
import top_long_green from "./assets/top/top_long_green.png"
import top_long_grey from "./assets/top/top_long_grey.png"
import top_long_orange from "./assets/top/top_long_orange.png"
import top_long_pink from "./assets/top/top_long_pink.png"
import top_long_purple from "./assets/top/top_long_purple.png"
import top_long_red from "./assets/top/top_long_red.png"
import top_long_white from "./assets/top/top_long_white.png"
import top_long_yellow from "./assets/top/top_long_yellow.png"

import top_short_black from "./assets/top/top_short_black.png" // 상의 반팔
import top_short_blue from "./assets/top/top_short_blue.png"
import top_short_brown from "./assets/top/top_short_brown.png"
import top_short_green from "./assets/top/top_short_green.png"
import top_short_grey from "./assets/top/top_short_grey.png"
import top_short_orange from "./assets/top/top_short_orange.png"
import top_short_pink from "./assets/top/top_short_pink.png"
import top_short_purple from "./assets/top/top_short_purple.png"
import top_short_red from "./assets/top/top_short_red.png"
import top_short_white from "./assets/top/top_short_white.png"
import top_short_yellow from "./assets/top/top_short_yellow.png"


import bottom_long_black from "./assets/bottom/bottom_long_black.png" // 하의 긴바지
import bottom_long_blue from "./assets/bottom/bottom_long_blue.png"
import bottom_long_brown from "./assets/bottom/bottom_long_brown.png"
import bottom_long_green from "./assets/bottom/bottom_long_green.png"
import bottom_long_grey from "./assets/bottom/bottom_long_grey.png"
import bottom_long_orange from "./assets/bottom/bottom_long_orange.png"
import bottom_long_pink from "./assets/bottom/bottom_long_pink.png"
import bottom_long_purple from "./assets/bottom/bottom_long_purple.png"
import bottom_long_red from "./assets/bottom/bottom_long_red.png"
import bottom_long_white from "./assets/bottom/bottom_long_white.png"
import bottom_long_yellow from "./assets/bottom/bottom_long_yellow.png"

import bottom_short_black from "./assets/bottom/bottom_short_black.png" // 하의 반바지
import bottom_short_blue from "./assets/bottom/bottom_short_blue.png"
import bottom_short_brown from "./assets/bottom/bottom_short_brown.png"
import bottom_short_green from "./assets/bottom/bottom_short_green.png"
import bottom_short_grey from "./assets/bottom/bottom_short_grey.png"
import bottom_short_orange from "./assets/bottom/bottom_short_orange.png"
import bottom_short_pink from "./assets/bottom/bottom_short_pink.png"
import bottom_short_purple from "./assets/bottom/bottom_short_purple.png"
import bottom_short_red from "./assets/bottom/bottom_short_red.png"
import bottom_short_white from "./assets/bottom/bottom_short_white.png"
import bottom_short_yellow from "./assets/bottom/bottom_short_yellow.png"

import bottom_skirt_black from "./assets/bottom/bottom_skirt_black.png" // 하의 치마
import bottom_skirt_blue from "./assets/bottom/bottom_skirt_blue.png"
import bottom_skirt_brown from "./assets/bottom/bottom_skirt_brown.png"
import bottom_skirt_green from "./assets/bottom/bottom_skirt_green.png"
import bottom_skirt_grey from "./assets/bottom/bottom_skirt_grey.png"
import bottom_skirt_orange from "./assets/bottom/bottom_skirt_orange.png"
import bottom_skirt_pink from "./assets/bottom/bottom_skirt_pink.png"
import bottom_skirt_purple from "./assets/bottom/bottom_skirt_purple.png"
import bottom_skirt_red from "./assets/bottom/bottom_skirt_red.png"
import bottom_skirt_white from "./assets/bottom/bottom_skirt_white.png"
import bottom_skirt_yellow from "./assets/bottom/bottom_skirt_yellow.png"


import back_pack from "./assets/belongings/backpack.png" // 소지품
// import cap from "./assets/belongings/cap.png"/
import hand_bag from "./assets/belongings/handbag.png"
import hat from "./assets/belongings/hat.png"
import shouler_bag from "./assets/belongings/shoulderbag.png"

let acc_none =''
// 이미지 변수 명
const top_long_colors = [
  top_long_red,
  top_long_yellow,
  top_long_green,
  top_long_blue,
  top_long_purple,
  top_long_white,
  top_long_grey,
  top_long_black,
  // top_long_orange,
  // top_long_pink,
  // top_long_brown,
];

const top_short_colors = [
  top_short_red,
  top_short_yellow,
  top_short_green,
  top_short_blue,
  top_short_purple,
  top_short_white,
  top_short_grey,
  top_short_black,
  // top_short_orange,
  // top_short_pink,
  // top_short_brown,
];

const bottom_long_colors = [
  bottom_long_yellow,
  bottom_long_green,
  bottom_long_blue,
  bottom_long_purple,
  bottom_long_pink,
  bottom_long_brown,
  bottom_long_white,
  bottom_long_grey,
  bottom_long_black,
  // bottom_long_red,
  // bottom_long_orange,
];

const bottom_short_colors = [
  bottom_short_yellow,
  bottom_short_green,
  bottom_short_blue,
  bottom_short_purple,
  bottom_short_pink,
  bottom_short_brown,
  bottom_short_white,
  bottom_short_grey,
  bottom_short_black,
  // bottom_short_red,
  // bottom_short_orange,
];

const bottom_skirt_colors = [
  bottom_skirt_yellow,
  bottom_skirt_green,
  bottom_skirt_blue,
  bottom_skirt_purple,
  bottom_skirt_pink,
  bottom_skirt_brown,
  bottom_skirt_white,
  bottom_skirt_grey,
  bottom_skirt_black
  // bottom_skirt_red,
  // bottom_skirt_orange,
];

const belongings = [
  hat,
  back_pack,
  shouler_bag,
  hand_bag,
  acc_none
];

// 사용자가 선택한 실종자 상의
const top_type_ids = ['top long', 'top short'];
const top_color_ids = ['top red', 
                        'top yellow', 
                        'top green', 
                        'top blue', 
                        'top purple', 
                        'top white', 
                        'top gray', 
                        'top black'];


// 사용자가 선택한 실종자  하의
const bottom_type_ids = ['bottom long', 'bottom short', 'bottom skirt'];
const bottom_color_ids = [  'bottom yellow', // 변경완
                            'bottom green',
                            'bottom blue',
                            'bottom purple',
                            'bottom pink',
                            'bottom brown',
                            'bottom white',
                            'bottom gray',
                            'bottom black'];
// 사용자가 선택한 실종자 소지품
const belongings_ids = ['hat', 'backpack', 'shoulder bag', 'hand bag', 'acc_none'];


export const MissingAvatar = ({
  selectedTop,
  selectedTopColor,
  selectedBottom,
  selectedBottomColor,
  selectedBelongings
}) => {

  // 이미지 상태변수 정의
  const [top_img_src, set_top_img_src] = useState('')
  const [bottom_img_src, set_bottom_img_src] = useState('')
  const [belongings_img_src, set_belongings_img_src] = useState('')
  const [belongings_img_class, set_belongings_img_class] = useState('')
  
  // 이미지 클래스명 다르게 먹이기
  const [top_img_class, set_top_img_class] = useState('')
  const [bottom_img_class, set_bottom_img_class] = useState('')

  // 상의 선택
  useEffect(() => {
    if (selectedTop === 'top long') {
      const colorIndex = top_color_ids.indexOf(selectedTopColor);
      if (colorIndex !== -1) {
        set_top_img_src(top_long_colors[colorIndex]);
        set_top_img_class('img_avatar_top_long'); // 클래스 이름 설정
      } else {
        set_top_img_src('');
        set_top_img_class('');
      }
    } else if (selectedTop === 'top short') {
      const colorIndex = top_color_ids.indexOf(selectedTopColor);
      if (colorIndex !== -1) {
        set_top_img_src(top_short_colors[colorIndex]);
        set_top_img_class('img_avatar_top_short'); // 클래스 이름 설정
      } else {
        set_top_img_src('');
        set_top_img_class('');
      }
    } else {
      set_top_img_src('');
      set_top_img_class('');
    }
  }, [selectedTop, selectedTopColor]); // 의존성 배열에 selectedTop과 selectedTopColor 추가

  // 하의 선택
  useEffect(() => {
    if (selectedBottom === 'bottom long') {
      const colorIndex = bottom_color_ids.indexOf(selectedBottomColor);
      if (colorIndex !== -1) {
        set_bottom_img_src(bottom_long_colors[colorIndex]);
        set_bottom_img_class('img_avatar_bottom_long'); // 클래스 이름 설정
      } else {
        set_bottom_img_src('');
        set_bottom_img_class('');
      }
    } else if (selectedBottom === 'bottom short') {
      const colorIndex = bottom_color_ids.indexOf(selectedBottomColor);
      if (colorIndex !== -1) {
        set_bottom_img_src(bottom_short_colors[colorIndex]);
        set_bottom_img_class('img_avatar_bottom_short'); // 클래스 이름 설정
      } else {
        set_bottom_img_src('');
        set_bottom_img_class('');
      }
    } else if (selectedBottom === 'bottom skirt') {
      const colorIndex = bottom_color_ids.indexOf(selectedBottomColor);
      if (colorIndex !== -1) {
        set_bottom_img_src(bottom_skirt_colors[colorIndex]);
        set_bottom_img_class('img_avatar_bottom_skirt'); // 클래스 이름 설정
      } else {
        set_bottom_img_src('');
        set_bottom_img_class('');
      }
    } else {
      set_bottom_img_src('');
      set_bottom_img_class('');
    }
  }, [selectedBottom, selectedBottomColor]);

  // 소지품 선택
  useEffect(() => {
    const index = belongings_ids.indexOf(selectedBelongings);
    if (index !== -1) {
      set_belongings_img_src(belongings[index]);
      // 'hat' 선택 시 특정 클래스 이름 적용
      if (selectedBelongings === 'hat') {
        set_belongings_img_class('img_avatar_belonging_hat');
      } else {
        set_belongings_img_class('img_avatar_belonging');
      }
    } else {
      set_belongings_img_src('');
      set_belongings_img_class('');
    }
  }, [selectedBelongings]);


  return (
    
      <div className='avatart_all'>
        <img className='avatar_setting' src={avatar} alt="avatar_setting" />

        {top_img_src && <img className={top_img_class} src={top_img_src} alt="img_avatar_top" />}
        {bottom_img_src && <img className={bottom_img_class} src={bottom_img_src} alt="img_avatar_bottom" />}
        {belongings_img_src && <img className={belongings_img_class} src={belongings_img_src} alt="img_avatar_belonging" />}
        
      </div>
    
  )
}
