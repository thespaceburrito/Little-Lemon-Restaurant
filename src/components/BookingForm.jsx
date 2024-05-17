import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  Heading,
  Divider
} from "@chakra-ui/react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const validationSchema = Yup.object({
    date: Yup.string().required("Please choose a date"),
    time: Yup.string().required("Please choose a time"),
    guests: Yup.number()
      .min(1, "Must be at least 1 guest")
      .max(10, "Cannot be more than 10 guests")
      .required("Please choose the number of guests"),
    occasion: Yup.string().notRequired(),
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted", values);
      dispatch({ type: 'UPDATE_TIMES', payload: values.date });
      resetForm();
    },
  });

  const handleDateChange = (e) => {
    formik.handleChange(e);
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
  };

  return (
    <VStack as='main' justify='center' pt={20} pb={20} >
      <Box
        as="form"
        display="grid"
        w='60%' 
        spacing={30} 
        gap="20px"
        onSubmit={formik.handleSubmit}
      >
        <Heading as='h1' fontSize='40px' color='#000'>Reserve a Table</Heading>
        <Divider />
        <FormControl isInvalid={formik.touched.date && !!formik.errors.date} isRequired>
          <FormLabel htmlFor="res-date">Choose date</FormLabel>
          <Input
            type="date"
            id="res-date"
            {...formik.getFieldProps('date')}
            onChange={handleDateChange}
          />
          {formik.touched.date && formik.errors.date ? (
            <Text color="red.500">{formik.errors.date}</Text>
          ) : null}
        </FormControl>
        <FormControl isInvalid={formik.touched.time && !!formik.errors.time} isRequired>
          <FormLabel htmlFor="res-time">Choose time</FormLabel>
          <Select
            id="res-time"
            {...formik.getFieldProps('time')}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Select>
          {formik.touched.time && formik.errors.time ? (
            <Text color="red.500">{formik.errors.time}</Text>
          ) : null}
        </FormControl>
        <FormControl isInvalid={formik.touched.guests && !!formik.errors.guests} isRequired>
          <FormLabel htmlFor="guests">Number of guests</FormLabel>
          <Input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            {...formik.getFieldProps('guests')}
          />
          {formik.touched.guests && formik.errors.guests ? (
            <Text color="red.500">{formik.errors.guests}</Text>
          ) : null}
        </FormControl>
        <FormControl isInvalid={formik.touched.occasion && !!formik.errors.occasion}>
          <FormLabel htmlFor="occasion">Occasion</FormLabel>
          <Select
            id="occasion"
            {...formik.getFieldProps('occasion')}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="yellow">
          Make Your Reservation
        </Button>
      </Box>
    </VStack>
  );
};

export default BookingForm;
