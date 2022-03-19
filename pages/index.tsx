import type { NextPage } from 'next';
import React from 'react';
import Image from 'src/components/Image';

const Home: NextPage = () => {
  return (
    <div className="w-full ">
      <div
        className="m-auto pt-20
       bg-[#ffeb33] lg:w-[1000px] w-full h-[100vh]
        border border-gray-200
       "
      >
        <div className="pt-[80px] text-center">
          <Image
            src="/asset/kakao_logo.png"
            width={137}
            height={105}
            alt="logo"
            priority
          />
        </div>
        <div className="w-full h-[300px] pt-[30px]">
          <form>
            <label className="block text-center" htmlFor="id">
              <input
                className="py-[10px] px-[5px] w-[230px]
                border border-[#dcdcdc] border-solid"
                type="text"
                name="id"
                placeholder="계정"
              />
            </label>
            <label className="block text-center" htmlFor="pwd">
              <input
                className="py-[10px] px-[5px] w-[230px] 
                border border-[#dcdcdc] border-solid"
                type="password"
                name="pwd"
                placeholder="비밀번호"
              />
            </label>

            <button
              className="block m-auto mt-2 py-[10px] px-[5px] w-[230px] text-white bg-[#423630]
              hover:bg-[#594941] active:bg-[#423630]"
              type="submit"
            >
              <span className="mr-2">로그인</span>
              <Image
                src="/asset/spinner.gif"
                alt="spinner"
                width={11}
                height={11}
              />
            </button>
          </form>
        </div>
        <div>
          <ul className="text-center">
            <li className="text-[#5a5a5a]">회원 가입</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
