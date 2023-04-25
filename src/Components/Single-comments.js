import React, { useState, useEffect } from "react";
import { deleteComments } from "../Redux/Action";
import { useDispatch } from "react-redux";

const SingleComments = (props) => {
  console.log("props>>>", props);
  const [Comments, setComments] = useState("");
  const { title, id  } = props;
  const dispatch=useDispatch()
  useEffect(() => {
    if (title) {
      setComments(title);
    }
  }, [title]);
const deleteItem=()=>{
  dispatch(deleteComments(id));
}

  return (
    <div className="comments-item">
      <div onClick={deleteItem} className="comments-item-delete">
        X
      </div>
      <input value={Comments} onChange={(e) => setComments(e.target.value)} type="text" />
      <input type="submit" name="" id="" hidden />
    </div>
  );
};

export default SingleComments;
