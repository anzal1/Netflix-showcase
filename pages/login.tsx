import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState<boolean>(false)
  const [signDialogue, setSignDialogue] = useState<String>('Sign In')
  const [signType, setSignType] = useState<String>('in')
  const { signIn, signUp } = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    if (login && signType === 'in') {
      await signIn(data.email, data.password)
      // await toast.promise(signIn(data.email, data.password), {
      //   loading: 'Signing in...',
      //   success: 'Successfully signed in!',
      //   error: 'Error in signing in!',
      // })
    } else {
      await signUp(data.email, data.password)
      // await toast.promise(signUp(data.email, data.password), {
      //   loading: 'Signing up...',
      //   success: 'Successfully signed up!',
      //   error: 'Error in signing up!',
      // })
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      {signType == 'in' ? (
        <form
          className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <div className="text-[gray]">
            New to Netflix?{' '}
            <button
              className="cursor-pointer text-white hover:underline"
              onClick={() => {
                setSignType('up')
              }}
              type="submit"
            >
              Sign up now
            </button>{' '}
            Or{' '}
            <button
              className="cursor-pointer text-white hover:underline"
              onClick={() => {
                setSignType('in')
              }}
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                type="email"
                placeholder="Email"
                className={`input ${
                  errors.email && 'border-b-2 border-orange-500'
                }`}
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid email.
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                type="password"
                {...register('password', { required: true })}
                placeholder="Password"
                className={`input ${
                  errors.password && 'border-b-2 border-orange-500'
                }`}
              />
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </label>
          </div>
          <button
            className="w-full rounded bg-[#E50914] py-3 font-semibold"
            onClick={() => setLogin(true)}
            type="submit"
          >
            Sign In
          </button>
        </form>
      ) : (
        <form
          className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <div className="text-[gray]">
            New to Netflix?{' '}
            <button
              className="cursor-pointer text-white hover:underline"
              onClick={() => {
                setSignType('up')
              }}
              type="submit"
            >
              Sign up now
            </button>{' '}
            Or{' '}
            <button
              className="cursor-pointer text-white hover:underline"
              onClick={() => {
                setSignType('in')
              }}
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                type="email"
                placeholder="Email"
                className={`input ${
                  errors.email && 'border-b-2 border-orange-500'
                }`}
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid email.
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                type="password"
                {...register('password', { required: true })}
                placeholder="Password"
                className={`input ${
                  errors.password && 'border-b-2 border-orange-500'
                }`}
              />
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </label>
          </div>
          <button
            className="w-full rounded bg-[#E50914] py-3 font-semibold"
            onClick={() => {
              setLogin(false)
            }}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  )
}

export default Login
