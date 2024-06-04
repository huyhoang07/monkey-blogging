import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Field from '../../field/Field';
import Label from '../../label/Label';
import Input from '../../input/Input';
import { useForm } from 'react-hook-form';
import Button from '../../button/Button';
import Radio from '../../checkbox/Radio';
import slugify from 'slugify';
import { postStatus } from '../../../utils/constants';
import ImageUpload from '../../image/ImageUpload';
import useFirebaseImage from '../../../hooks/useFirebaseImage';
import Toggle from '../../toggle/Toggle';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase-app/firebase-config';
import Dropdown from '../../dropdown/Dropdown';


const PostAddNewStyles = styled.div`
    
`;

const PostAddNew = () => {
    const { control, watch, setValue, handleSubmit, getValues } = useForm({
      mode: "onChange",
      defaultValues: {
        status: 2,
        title: "",
        slug: "",
        categoryId: "",
        hot: false,
      },
    });
    const watchStatus = watch("status");
    const watchHot = watch("hot");
    // console.log("PostAddNew ~ watchStatus", watchStatus);
    // const watchCategory = watch("category");

    const addPostHandler = async (values) => {
      const cloneValues = {...values}
      cloneValues.slug = slugify(values.slug || values.title);
      cloneValues.status = Number(values.status);
      // handleUploadImage(cloneValues.image);
      // console.log(cloneValues);
    }

    const {image, progress, handleSelectImage, handleDeleteImage} = useFirebaseImage(setValue, getValues);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      async function getData() {
        const colRef = collection(db, "category");
        const q = query(colRef, where("status", "==", 1));
        // console.log("q", q);
        const querySnapshot = await getDocs(q);
        let result = [];
        querySnapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          })
        })
        setCategories(result);
        // console.log(result);
      }
      getData();
    },[])

    return (
      <PostAddNewStyles>
        <h1 className="dashboard-heading">Add new post</h1>
        <form onSubmit={handleSubmit(addPostHandler)}>
          <div className="grid grid-cols-2 mb-10 gap-x-10">
            <Field>
              <Label>Title</Label>
              <Input
                control={control}
                placeholder="Enter your title"
                name="title"
                required
              ></Input>
            </Field>
            <Field>
              <Label>Slug</Label>
              <Input
                control={control}
                placeholder="Enter your slug"
                name="slug"
              ></Input>
            </Field>
          </div>
          <div className="grid grid-cols-2 mb-10 gap-x-10">
            <Field>
              <Label>Image</Label>
              <ImageUpload 
                onChange={handleSelectImage} 
                handleDeleteImage={handleDeleteImage}
                className='h-[250px]' 
                progress={progress}
                image={image}
              ></ImageUpload>
            </Field>
            <Field>
              <Label>Category</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select an option"></Dropdown.Select>
              </Dropdown>
            </Field>
          </div>
          <div className="grid grid-cols-2 mb-10 gap-x-10">
            <Field>
              <Label>Feature post</Label>
              <Toggle on={watchHot === true} onClick={() => setValue("hot", !watchHot)}></Toggle>
            </Field>
            <Field>
              <Label>Status</Label>
              <div className="flex items-center gap-x-10">
                <Radio
                  name="status"
                  control={control}
                  checked={Number(watchStatus) === postStatus.APPROVED}
                  value={postStatus.APPROVED}
                >
                  Approved
                </Radio>
                <Radio
                  name="status"
                  control={control}
                  checked={Number(watchStatus) === postStatus.PENDING}
                  value={postStatus.PENDING}
                >
                  Pending
                </Radio>
                <Radio
                  name="status"
                  control={control}
                  checked={Number(watchStatus) === postStatus.REJECTED}
                  value={postStatus.REJECTED}
                >
                  Reject
                </Radio>
              </div>
            </Field>
          </div>
          <Button type="submit" className="mx-auto">
            Add new post
          </Button>
        </form>
      </PostAddNewStyles>
    );
  };
  
  export default PostAddNew;