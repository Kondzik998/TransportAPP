import { Layout } from '../components/Layout';
import { useFormik } from 'formik';
import { object, string, InferType } from 'yup';

const loginSchema = object().shape({
  login: string().required(),
  password: string().required(),
});

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: loginSchema,
  });
  return (
    <Layout title='Login page' center>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Login:{' '}
          <input
            type='text'
            name='login'
            onChange={formik.handleChange}
            value={formik.values.login}
          />
        </label>
        <label>
          Password:{' '}
          <input
            type='password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button type='submit'>Zaloguj</button>
      </form>
    </Layout>
  );
}
