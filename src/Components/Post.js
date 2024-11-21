import React, { useEffect, useState } from 'react';
import { getCategories } from '../Services/categoryService';
import { Button, Card, CardBody, Container, Input, Label } from 'reactstrap';
import { createPost } from '../Services/postService';
import { getCurrentUser } from '../Authentication/auth';
// Import the CSS file

const Post = () => {

  const [catData, setCatData] = useState([]);
  const [user, setUser] = useState(undefined);

  useEffect(() => {

    setUser(getCurrentUser());
    console.log(user);

    getCategories().then((data) => {
      setCatData(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    userId: undefined,
    categoryId: 3,
    file: null
  });

  const handleOnChange = (event, property) => {
    setPostData({
      ...postData,
      [property]: event.target.value
    });
  };

  // Handle file input changes
  const handleFileChange = (event) => {
    setPostData({
      ...postData,
      file: event.target.files[0]
    });
  };

  // Lets handle the form submit
  const handleSubmit = (event) => {
    postData['userId'] = user.userDto.id;

    event.preventDefault();

    const formData = new FormData();

    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('categoryId', postData.categoryId);
    formData.append('userId', postData.userId);
    if (postData.file) {
      formData.append('file', postData.file);
    }

    createPost(formData).then((response) => {
      console.log("Post created successfully:", response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="post-container">
      <h1 className="post-heading">Create a New Post</h1>

      <Card className="post-card">
        <CardBody>
          <form onSubmit={handleSubmit} className="post-form">
            <div className="my-3">
              <Label for="title">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter title"
                className="rounded-0"
                value={postData.title}
                onChange={(event) => handleOnChange(event, 'title')}
              />
            </div>

            <div className="">
              <Label for="content">Content</Label>
              <Input
                type="textarea"
                id="content"
                value={postData.content}
                style={{ height: "100px" }}
                onChange={(event) => handleOnChange(event, 'content')}
              />
            </div>

            <div className="my-3">
              <Label for="categoryId">Categories</Label>
              <Input
                type="select"
                id="categoryId"
                onChange={(event) => handleOnChange(event, 'categoryId')}
                value={postData.categoryId}
              >
                {catData.map((item) => (
                  <option value={item.categoryId} key={item.categoryId}>
                    {item.categoryTitle}
                  </option>
                ))}
              </Input>
            </div>

            <div className="my-3">
              <Label for="file">Upload Image</Label>
              <Input
                type="file"
                id="file"
                onChange={handleFileChange}
              />
            </div>

            <Container className="text-center">
              <Button color="primary" type="submit">Publish</Button>
              <Button className="ms-2" color="secondary">Cancel</Button>
            </Container>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Post;
