import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default (SpecificComponent, option, adminRoute = null) => {
  /* 
     예)  option: null -> 누구나 출입이 가능한 페이지 (메인, 로그인, 회원가입, 독서공유, 토론게시판, 이벤트)
                  true -> 로그인한 유저만 출입이 가능한 페이지 (독서기록, 마이페이지)
                  false -> 로그인한 유저는 출입이 불가능한 페이지 (로그인 , 회원가입)
                  adminRoute -> true일 경우 관리자만 들어갈 수 있는 페이지
  */

  const AuthenticateCheck = (props) => {
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
        } else {
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push('/');
          } else {
            props.history.push('/');
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  };

  return AuthenticateCheck;
};
