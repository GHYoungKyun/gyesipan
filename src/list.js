import React from 'react';
import { Link } from 'react-router-dom';
import './css/css.css'

const List = () => {
    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <div className="board_list_wrap">
                <div className="board_list">
                    <div className="top">
                        <div className="num">번호</div>
                        <div className="title">제목</div>
                        <div className="writer">글쓴이</div>
                        <div className="date">작성일</div>
                        <div className="count">조회</div>
                    </div>
                    <div>
                        <div className="num">5</div>
                        <div className="title"><Link to="/view">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                    <div>
                        <div className="num">4</div>
                        <div className="title"><Link to="/view">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                    <div>
                        <div className="num">3</div>
                        <div className="title"><Link to="/view">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                    <div>
                        <div className="num">2</div>
                        <div className="title"><Link to="/view">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                    <div>
                        <div className="num">1</div>
                        <div className="title"><Link to="/view">글 제목이 들어갑니다.</Link></div>
                        <div className="writer">김이름</div>
                        <div className="date">2021.1.15</div>
                        <div className="count">33</div>
                    </div>
                </div>
                <div className="board_page">
                    <a href="#!" className="bt first">
                    </a>
                    <a href="#!" className="bt prev">
                    </a>
                    <a href="#!" className="num on">1</a>
                    <a href="#!" className="num">2</a>
                    <a href="#!" className="num">3</a>
                    <a href="#!" className="num">4</a>
                    <a href="#!" className="num">5</a>
                    <a href="#!" className="bt next">></a>
                    <a href="#!" className="bt last">>></a>
                </div>
                <div className="bt_wrap">
                    <Link to="/write" className="on">등록</Link>
                </div>
            </div>
        </div>
    );
};

export default List;