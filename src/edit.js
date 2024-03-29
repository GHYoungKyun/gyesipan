import React from 'react';
import { Link } from 'react-router-dom';
import './css/css.css'

const Edit = () => {
    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <div className="board_write_wrap">
                <div className="board_write">
                    <div className="title">
                        <dl>
                            <dt>제목</dt>
                            <dd><input type="text" placeholder="제목 입력" value="글 제목이 들어갑니다" /></dd>
                        </dl>
                    </div>
                    <div className="info">
                        <dl>
                            <dt>글쓴이</dt>
                            <dd><input type="text" placeholder="글쓴이 입력" value="김이름" /></dd>
                        </dl>
                    </div>
                    <div className="cont">
                    <textarea placeholder="내용 입력">
                        글 내용이 들어갑니다.
                    </textarea>
                    </div>
                </div>
                <div className="bt_wrap">
                    <Link to="/view" className="on">수정</Link>
                    <Link to="/view">취소</Link>
                </div>
            </div>
        </div>
    );
};

export default Edit;