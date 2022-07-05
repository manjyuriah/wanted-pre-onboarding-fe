import React, { useState, useEffect, useRef } from 'react';
import '../styles/feed.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { VscSmiley } from 'react-icons/vsc';

function Feed(data) {
  const [list, setList] = useState([]); //배열
  const [inputComment, setInputComment] = useState([]); //댓글
  const [commentCount, setCommentCount] = useState(0); //댓글 카운트
  const [isDisabled, setIsDisabled] = useState(true); //버튼 활성화
  const [isImgLoad, setIsImgLoad] = useState(true); //IMG로드
  const [isShow, setIsShow] = useState(false); //내용 더보기
  const [isLikeClick, setIsLikeClick] = useState(false); //내용 더보기
  const active = useRef();
  const { image, like, feedId, title, time } = data.list;

  //댓글 작성
  const handleInputComment = (e) => {
    if (e.target.value != '') {
      active.current.style = 'color:#0095f6;font-weight:bold';
      setInputComment([e.target.value]);
      setIsDisabled(false);
    } else {
      active.current.style = 'color:#80c3f0';
      setIsDisabled(true);
    }
  };
  //클릭으로 댓글 업로드
  const uploadComment = (e) => {
    setInputComment('');
    setIsDisabled(true);
    active.current.style = 'color:#80c3f0';
    setCommentCount(commentCount + 1);
  };
  //엔터로 댓글 업로드
  const onSubmit = (e) => {
    e.preventDefault();
    uploadComment();
  };

  //더보기
  const showFullLength = () => {
    setIsShow((prev) => !prev);
  };
  //좋아요
  const likeFullHeart = () => {
    setIsLikeClick((prev) => !prev);
  };
  return (
    <>
      <div
        className="feed-card"
        style={{ display: isImgLoad ? 'none' : 'block' }}
      >
        <div className="feed-img">
          <img
            className="feed"
            alt="feedImage"
            src={image}
            onLoad={() => setIsImgLoad(false)}
          />
        </div>
        <ul className="banner-btn">
          <li></li>
          <li></li>
        </ul>
        <div className="icons">
          <div>
            {isLikeClick === false ? (
              <AiOutlineHeart size={20} onClick={likeFullHeart} />
            ) : (
              <AiFillHeart size={20} onClick={likeFullHeart} />
            )}
            <BsChat size={18} />
            <FaRegPaperPlane size={18} />
          </div>
          <div>
            <FiBookmark size={18} />
          </div>
        </div>
        <ul className="inform">
          <li>좋아요 {like.toLocaleString()} 개</li>
          <li>
            {feedId}
            {title.length > 8 && isShow === false ? (
              <span> {title.substr(0, 15)}...</span>
            ) : (
              <span> {title}</span>
            )}
            {!isShow && (
              <span className="more" onClick={showFullLength}>
                더보기
              </span>
            )}
          </li>
          <li>댓글 {commentCount.toLocaleString()} 개 모두보기</li>
          <li>{time}분 전</li>
        </ul>
        <form onSubmit={onSubmit}>
          <div className="comment-box">
            <div className="comment">
              <VscSmiley size={20} className="smile" />
              <div>
                <input
                  type="text"
                  placeholder="댓글달기..."
                  value={inputComment}
                  onChange={handleInputComment}
                />
              </div>
            </div>
            <button
              type="submit"
              className="upload"
              ref={active}
              disabled={setIsDisabled}
              onClick={uploadComment}
            >
              게시
            </button>
          </div>
        </form>
      </div>
      {/*  );
      })} */}
    </>
  );
}
export default Feed;
