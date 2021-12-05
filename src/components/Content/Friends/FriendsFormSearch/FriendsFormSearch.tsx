import { Field, Form, Formik } from "formik"
import { FriendsFilterTermType } from "../../../../types/FriendsTypes/FriendsTypes"

const friendsFormValidate = (values: any) => {
    const errors = {}
    return errors
}

const FriendsFormSearch: React.FC<FriendsFormPropsType> = (props) => {

    const submit = (values: FriendsFilterTermType, { setSubmitting }: FriendsFormSearchSetSubmittingType) => { 
        props.onFilterChanged(values)     
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ term: '', friend: null }}
            validate={friendsFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form className={'friends__form-search'}>
                    <Field type="text" name="term" />
                    <Field name="friend" as="select">
                        <option value="null">all</option>
                        <option value="true">My friends</option>
                        <option value="false">Not friends</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default FriendsFormSearch

export type FriendsSearchingFormType = {
    searchingFriend: string
}
export type FriendsFormSearchSetSubmittingType = {
    setSubmitting:  (isSubmitting: boolean) => void
}
export type FriendsFormPropsType = {
    onFilterChanged: (filter: FriendsFilterTermType) => void
}