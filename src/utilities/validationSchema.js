import * as Yup from 'yup'

const catSchema = Yup.object().shape({ 
    // Below, we describe each property that will need to be validated and use Yup to define the
    // requirements (maxLength, required, etc...)
    categoryName: Yup.string().max(25, "Max 25 characters").required('Name is required'),
    categoryDescription: Yup.string().max(100, 'Max 100 characters')
})

const toDoSchema = Yup.object().shape({
    name: Yup.string().max(100, 'Max 100 characters').required(),
    // done: false,
    categoryId: Yup.number().required()
})

export {catSchema, toDoSchema}

// {
//     "name": "string",
//     "done": true,
//     "categoryId": 0
//   }