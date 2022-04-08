import './subscription.scss'
import { Formik } from 'formik'
import * as Yup from 'yup';
let Subscription = () => {
    const ValidateSchema = Yup.object().shape({
        email: Yup.string().required('Required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Incorrect email'),
        date: Yup.string().required('Required').matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'Incorrect date'),
        phoneNumber: Yup.string().required('Required').matches(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/, 'Incorrect phone number'),
        time: Yup.string().required('Required').matches(/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/, 'Incorrect time'),
    });
    return (
        <section className='wrapper__subscription_subscription'>
            <div className='wrapper__subscription'>
                <h1>Подпишись</h1>
                <p>Отправляем анонсы новых статей, выпусков и трансляций</p>
                <Formik
                    initialValues={{ email: '', date: '', phoneNumber: '', time: '' }}
                    validationSchema={ValidateSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className='wrapper__subscription_form' onSubmit={handleSubmit}>
                            <div className='wrapper__subscription_inputs'>
                                <div>
                                    <div className='wrapper__subscription_input'>
                                        <input
                                            placeholder='Email'
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </div>
                                    <div className='wrapper__subscription_error'>{errors.email && touched.email && errors.email}</div>
                                </div>
                                <div>
                                    <div className='wrapper__subscription_input'>
                                        <input
                                            placeholder='11.02.2022'
                                            name="date"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                        />
                                    </div>
                                    <div className='wrapper__subscription_error'>{errors.date && touched.date && errors.date}</div>
                                </div>
                            </div>
                            <div className='wrapper__subscription_inputs'>
                                <div>
                                    <div className='wrapper__subscription_input'>
                                        <input
                                            placeholder='Телефон'
                                            name="phoneNumber"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phoneNumber}
                                        />
                                    </div>
                                    <div className='wrapper__subscription_error'>{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</div>
                                </div>
                                <div>
                                    <div className='wrapper__subscription_input'>
                                        <input
                                            placeholder='15:00'
                                            name="time"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.time}
                                        />
                                    </div>
                                    <div className='wrapper__subscription_error'>{errors.time && touched.time && errors.time}</div>
                                </div>
                            </div>
                            <div className='wrapper__subscription_button'>
                                <button className='subscription_button' type="submit" disabled={isSubmitting}>Подписаться</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    )
}
export default Subscription;