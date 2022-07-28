import React from "react";
import ImageInputList from "./ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

// implement the FormImagePicker
function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUris = values[name];

  // handle add an Image
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  // handle remove an Image
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
