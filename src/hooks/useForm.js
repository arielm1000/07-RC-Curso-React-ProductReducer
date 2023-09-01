import React, {useState, useEffect} from 'react'

export default function useForm (initValues = {}) {

    const [form, setForm] = useState(initValues);
    const [edit, setEdit] = useState(false)

    const onChangeForm = (value, field) => {
       setForm({
            ...form,
            [field]: value,
        })
    }

    const changeEdit = () => {
       setEdit(!edit);
    }

    const productInit = (value) => {
        setForm(value);
    }

  return {
    form,
    onChangeForm,
    edit,
    changeEdit,
    productInit
  }
}
