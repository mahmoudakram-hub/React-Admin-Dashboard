/** @format */

import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
  firsName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const PhoneRgx = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g;
const userSchema = yup.object().shape({
  firsyName: yup.string().required("Required Field"),
  lastName: yup.string().required("Required Field"),
  email: yup.string().email("invalid email").required("Required Field"),
  contact: yup
    .string()
    .matches(PhoneRgx, "phone Number is not valid")
    .required("Required Field"),
  address1: yup.string().required("Required Field"),
  address2: yup.string().required("Required Field"),
});
const Form = () => {
  constisMobile = useMediaQuery("min-width:600px");
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {(values, errors, touched, handleBlur) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                "&": {
                  display: "grid",
                  gap: "30px",
                  boxShadow: " rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
                  gridTemplateColumns: "repeat(4, minmax(100, 1fr))",
                },
              }}
            ></Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
