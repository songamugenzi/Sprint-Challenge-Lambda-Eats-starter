import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
       .trim()
       .min(2, 'Name must be at least two characters')
       .required('Name is a required field'),
    size: yup.string().required('Size is a required field'),
    sauce: yup.string(),
    instructions: yup.string()
})
export default formSchema