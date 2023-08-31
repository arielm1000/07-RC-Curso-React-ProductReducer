import React, {useState, useEffect} from 'react'

export default function useForm (initValues = {}) {

    const [form, setForm] = useState(initValues);
    const [edit, setEdit] = useState(false)

    useEffect(() => {
      setForm(initValues);
    }, [edit])
    

    const onChangeForm = (value, field) => {
       setForm({
            ...form,
            [field]: value,
        })
    }

    const changeEdit = () => {
       setEdit(!edit);
    }

    const productInit = () => {
      setForm({
        id: '',
        title: '',
        category: '',
        price: '',
        description: ''
      });
    }

  return {
    form,
    onChangeForm,
    edit,
    changeEdit,
    productInit
  }
}
