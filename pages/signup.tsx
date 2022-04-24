/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useRef, FocusEvent, FormEvent } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'src/components/Link';
import { signUpRequest } from 'src/services/auth-service';
import { userCheckRequest } from 'src/services/user-service';
import regexp from 'src/lib/regexp';

const SignupPage: NextPage = () => {
  const MAX_LEN = 15;
  const router = useRouter();

  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const checkPwRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [idWarningMsg, setIdWarningMsg] = useState('');
  const [pwWarningMsg, setPwWarningMsg] = useState('');
  const [checkPwWarningMsg, setCheckPwWarningMsg] = useState('');
  const [nameWarningMsg, setNameWarningMsg] = useState('');

  const isValidId = async (userId: string): Promise<boolean> => {
    const isMatch = userId.match(regexp.email);
    if (!isMatch) {
      setIdWarningMsg('아이디는 이메일 형식이어야 합니다. ex)email@email.com');
      return false;
    }
    try {
      await userCheckRequest({ userId });
      setIdWarningMsg('이미 사용중이거나 탈퇴한 아이디입니다.');
      return false;
    } catch (err) {
      setIdWarningMsg('');
      return true;
    }
  };
  const isValidPw = (pw: string): boolean => {
    const len = pw.length;
    if (len < 5) {
      setPwWarningMsg('5 ~ 15자 입력해주세요.');
      return false;
    }
    setPwWarningMsg('');
    return true;
  };
  const isValidCheckPw = (checkPw: string): boolean => {
    const pw = pwRef.current?.value ?? '';
    if (checkPw !== pw) {
      setCheckPwWarningMsg('비밀번호가 일치하지 않습니다.');
      return false;
    }
    setCheckPwWarningMsg('');
    return true;
  };
  const isValidName = (name: string): boolean => {
    const len = name.trim().length;
    if (len === 0) {
      setNameWarningMsg('필수 정보입니다.');
      return false;
    }
    setNameWarningMsg('');
    return true;
  };

  // 입력 창에서 벗어날 때 발생하는 action
  const handleIdBlur = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    isValidId(event.target.value).catch(() => {});
  };
  const handlePwBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidPw(event.target.value);
  };
  const handleCheckPwBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidCheckPw(event.target.value);
  };
  const handleNameBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidName(event.target.value);
  };

  const doValidation = async (): Promise<boolean> => {
    const userId = idRef.current?.value ?? '';
    const pw = pwRef.current?.value ?? '';
    const checkPw = checkPwRef.current?.value ?? '';
    const name = nameRef.current?.value ?? '';

    return (
      (await isValidId(userId)) &&
      isValidPw(pw) &&
      isValidCheckPw(checkPw) &&
      isValidName(name)
    );
  };

  const handleSignUpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userId = idRef.current?.value ?? '';
    const pw = pwRef.current?.value ?? '';
    const name = nameRef.current?.value ?? '';
    if (await doValidation()) {
      signUpRequest({ userId, password: pw, name })
        .then(res => {
          alert(res.signUp.message);
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          router.replace('/');
        })
        .catch(() => {
          alert('회원가입 실패하였습니다.');
        });
    }
  };

  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>

      <div className="w-full h-full min-h-screen bg-[#f5f6f7]">
        <div className="lg:w-[1000px] w-full h-full min-h-screen m-auto border border-[#dadada]">
          <div className="text-center pt-10 pb-10">
            <Link
              className="text-5xl text-[#ffeb33] font-bold tracking-[8px]"
              href="/"
            >
              KAKAO
            </Link>
          </div>
          <div>
            <form className="p-[10px]" onSubmit={handleSignUpSubmit}>
              <label htmlFor="id">
                <div className="m-auto mb-[5px] lg:w-[800px] w-full text-[14px] font-bold">
                  아이디
                </div>
                <input
                  className="block m-auto px-[5px] py-[15px] lg:w-[800px] w-full"
                  type="text"
                  autoComplete="email"
                  placeholder="email@email.com"
                  id="id"
                  ref={idRef}
                  onBlur={handleIdBlur}
                />
                <p className="m-auto text-red-600 lg:w-[800px] w-full text-[14px]">
                  {idWarningMsg}
                </p>
              </label>
              <label htmlFor="pwd">
                <div className="m-auto mb-[5px] mt-5 lg:w-[800px] w-full text-[14px] font-bold">
                  비밀번호
                </div>
                <input
                  className="block m-auto px-[5px] py-[15px] lg:w-[800px] w-full"
                  type="password"
                  autoComplete="new-password"
                  id="pwd"
                  maxLength={MAX_LEN}
                  ref={pwRef}
                  onBlur={handlePwBlur}
                />
                <p className="m-auto text-red-600 lg:w-[800px] w-full text-[14px]">
                  {pwWarningMsg}
                </p>
              </label>
              <label htmlFor="reconfirm-pwd">
                <div className="m-auto mb-[5px] mt-5 lg:w-[800px] w-full text-[14px] font-bold">
                  비밀번호 재확인
                </div>
                <input
                  className="block m-auto px-[5px] py-[15px] lg:w-[800px] w-full"
                  type="password"
                  autoComplete="new-password"
                  id="reconfirm-pwd"
                  maxLength={MAX_LEN}
                  ref={checkPwRef}
                  onBlur={handleCheckPwBlur}
                />
                <p className="m-auto text-red-600 lg:w-[800px] w-full text-[14px]">
                  {checkPwWarningMsg}
                </p>
              </label>
              <label htmlFor="name">
                <div className="m-auto mb-[5px] mt-5 lg:w-[800px] w-full text-[14px] font-bold">
                  이름
                </div>
                <input
                  className="block m-auto px-[5px] py-[15px] lg:w-[800px] w-full"
                  id="name"
                  type="text"
                  maxLength={MAX_LEN}
                  ref={nameRef}
                  onBlur={handleNameBlur}
                />
                <p className="m-auto text-red-600 lg:w-[800px] w-full text-[14px]">
                  {nameWarningMsg}
                </p>
              </label>
              <div className="fixed bottom-0 left-0 w-full">
                <button
                  className="block m-auto px-[5px] py-[15px] lg:w-[1000px] w-full bg-[#ffeb33] text-[14px] font-bold"
                  type="submit"
                >
                  가입하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
