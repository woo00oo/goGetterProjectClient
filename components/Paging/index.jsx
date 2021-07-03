import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';

const Paging = ({ totalElements, currentPage, setCurrentPage }) => {
  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <div>
      <PageWrap>
        <PageNation>
          <Arrow>
            {/* <a className="pprev" href="#"></a> */}
            {/* <a className="prev" href="#"></a> */}
          </Arrow>
          <Pagination
            activePage={currentPage + 1}
            itemsCountPerPage={7}
            totalItemsCount={totalElements}
            pageRangeDisplayed={10}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={handlePageChange}
          />
          {/* if (idx + 1 === items.current_page) {
              return (
                <>
                  <span className="pg">열린</span>
                  <a href="#" className="current">
                    {idx}
                    <span className="pg">페이지</span>
                  </a>
                </>
              );
            }
            return (
              <a className="page">
                {idx}
                <span className="pg">페이지</span>
              </a>
            );
          })} */}

          {/* <a href="#" className="page">
            2<span className="pg">페이지</span>
          </a>
          <a href="#" className="page">
            3<span className="pg">페이지</span>
          </a>
          <a href="#" className="page">
            4<span className="pg">페이지</span>
          </a>
          <a href="#" className="page">
            5<span className="pg">페이지</span>
          </a>
          <a href="#" className="page">
            6<span className="pg">페이지</span>
          </a>
          <a href="#" className="page">
            7<span className="pg">페이지</span>
          </a>
          <a href="#" className="page">
            8<span className="pg">페이지</span>
          </a>
          <a href="#" className="page">
            9<span className="pg">페이지</span>
          </a>
          <a href="#" className="page">
            10<span className="pg">페이지</span>
          </a> */}
          <Arrow>
            <a className="next" href="#"></a>
            <a className="nnext" href="#"></a>
          </Arrow>
        </PageNation>
      </PageWrap>
    </div>
  );
};

export default Paging;

const PageWrap = styled.nav`
  display: block;
  padding-top: 20px;
  text-align: center;
  & ::after {
    display: block;
    visibility: hidden;
    clear: both;
    content: '';
  }
`;

const PageNation = styled.div`
  display: inline-block;

  & span.pg {
    display: inline-block !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 0;
    line-height: 0;
    border: 0 !important;
    overflow: hidden !important;
  }

  & a.page {
    color: #999;
    font-size: 1.083em;
    height: 38px;
    line-height: 38px;
    padding: 0 5px;
    width: 38px;
    text-decoration: none;
    border-radius: 3px;
    border-radius: 3px;
  }

  & a.current,
  a.page {
    display: inline-block;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #D5D5D5;
    font-size: 13px;
    margin: 0 8px;c
  }
  & a.current {
    text-decoration: none;
    display: inline-block;
    border: 1px solid #0F4C81;
    color: #fff;
    font-weight: bold;
    height: 38px;
    line-height: 38px;
    padding: 0 10px;
    width: 38px;
    border-radius: 3px;
    background: aliceblue;
    color: #0F4C81;
  }
`;

const Arrow = styled.div``;
