import React, {useState} from 'react';


const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch (`/api/articles/${articleName}/addcomment`, {
            method: "post",
            body: JSON.stringify({ username, text: commentText }),
            header: {
                'Content-Type': 'application/json',
            }
        }) 
        const body = await result.json();
        setArticleInfo (body)
    }

    return (
      <div id="add-comment-form">
        <h3> Add a Comment</h3>
        <label >
            Name: 
              <input type="text" value="username" />
        </label>

        <label >
            Comment: 
          <textarea rows="4" cols="50" value="commentText"/>
        </label>
        <button  onClick={()=>addComment}> Add Comment </button>
      </div>
    )
};
export default AddCommentForm;