import type { NextPage } from 'next';
import Link from 'src/components/Link';

const Signup: NextPage = () => {
  return (
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
          <form className="p-[10px]">
            <label htmlFor="id">
              <div className="m-auto mb-[5px] lg:w-[800px] w-full text-[14px] font-bold">
                아이디
              </div>
              <input
                className="block m-auto mb-5 px-[5px] py-[15px] lg:w-[800px] w-full"
                type="text"
                id="id"
              />
            </label>
            <label htmlFor="pwd">
              <div className="m-auto mb-[5px] lg:w-[800px] w-full text-[14px] font-bold">
                비밀번호
              </div>
              <input
                className="block m-auto mb-5 px-[5px] py-[15px] lg:w-[800px] w-full"
                type="password"
                id="pwd"
              />
            </label>
            <label htmlFor="reconfirm-pwd">
              <div className="m-auto mb-[5px] lg:w-[800px] w-full text-[14px] font-bold">
                비밀번호 재확인
              </div>
              <input
                className="block m-auto mb-5 px-[5px] py-[15px] lg:w-[800px] w-full"
                type="password"
                id="reconfirm-pwd"
              />
            </label>
            <label htmlFor="name">
              <div className="m-auto mb-[5px] lg:w-[800px] w-full text-[14px] font-bold">
                이름
              </div>
              <input
                className="block m-auto mb-5 px-[5px] py-[15px] lg:w-[800px] w-full"
                id="name"
                type="text"
              />
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
  );
};

export default Signup;
