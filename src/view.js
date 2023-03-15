import React from 'react';
import List from './list';
import Edit from './edit';

const View = () => {
    return (
        <div className="board_wrap">
            <div className="board_title">
                <strong>공지사항</strong>
                <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
            </div>
            <div className="board_view_wrap">
                <div className="board_view">
                    <div className="title">
                        글 제목이 들어갑니다.
                    </div>
                    <div className="info">
                        <dl>
                            <dt>번호</dt>
                            <dd>1</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>김이름</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd>2021.1.16</dd>
                        </dl>
                        <dl>
                            <dt>조회</dt>
                            <dd>33</dd>
                        </dl>
                    </div>
                    <div className="cont">
                        <br>
                            글 내용이 들어갑니다
                            글 내용이 들어갑니다
                            글 내용이 들어갑니다
                            글 내용이 들어갑니다
                            글 내용이 들어갑니다
                            글 내용이 들어갑니다
                            글 내용이 들어갑니다
                        </br>
                    </div>
                </div>
                <div className="bt_wrap">
                    <a href={List} className="on">목록</a>
                    <a href={Edit}>수정</a>
                </div>
            </div>
        </div>
    );
};

export default View();