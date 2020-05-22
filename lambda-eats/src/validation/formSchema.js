import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
       .trim()
       .min(2, 'Name must be at least threee characters')
       .required('Name is a required field'),
    size: yup.string().required('Size is a required field'),
    sauce: yup.string().required('Sauce is a required field'),
    instructions: yup.string()
})
export default formSchema