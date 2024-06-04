"use client";
import LoginGoogleButton from "@/app/LoginButton";
import styles from "./Login.module.css";
import SignUpLocalButton from "@/app/SignUpLocalButton";
import { appContainer } from "@/infraestructure/ioc/inversify.config";
import FindAllTaskersUseCase from "@/domain/usecases/tasker/findAllTasker.use.case";
import { USECASES_TYPES } from "@/infraestructure/ioc/containers/usecases/usecases.types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Tasker } from "@/domain/models/Tasker";
import { LoginLocalButton } from "@/app/LoginLocalButton";
import { useAppDispatch } from "@/presentation/store";
import { setTaskerLoggedState } from "@/presentation/store/config/configSlice";

/**
 * Login
 * vista del formulario del login
 */
interface IFormInputs {
  password: string;
  name: string;
  email: string;
}

function Login() {
  const initialValues: IFormInputs = {
    password: "",
    name: "",
    email: "",
  };
  const dispatch = useAppDispatch();
  const findAllTaskersUseCase = appContainer.get<FindAllTaskersUseCase>(
    USECASES_TYPES._FindAllTaskersUseCase
  );
  const validateTasker = async (values: Tasker) => {
    const found = await findAllTaskersUseCase.execute(values);
    if(found){
      dispatch(setTaskerLoggedState(found));
    }
  };
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: initialValues,
  });
  const onSubmit: SubmitHandler<IFormInputs> = validateTasker;

  return (
    <form className="w-full" >
      <div className={`h-full w-full ${styles.containerLogin}`}>
        <div className={styles.cardLogin}>
          <h1 className={styles.colorTitle}>LOGIN</h1>
          <Controller
            name="email"
            control={control}
            defaultValue={initialValues.email}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <label className="">
                  <p className="text-principal-0 font-semibold">Email:</p>
                </label>
                <input
                  className={
                    "border-1 outline-1 bg-principal-0 outline-principal-500"
                  }
                  {...field}
                />
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue={initialValues.password}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <label className="">
                  <p className="text-principal-0 font-semibold">Password:</p>
                </label>
                <input
                  className={
                    "border-1 outline-1 bg-principal-0 outline-principal-500"
                  }
                  {...field}
                />
              </>
            )}
          />
          <div className="flex flex-wrap flex-col h-20 w-full my-8 gap-3">
            <button className={"bg-blue-400 text-white rounded-[calc(8px)]"}>
              Login
            </button>
            <div className="flex justify-items-center w-full flex-col gap-2">
              <LoginLocalButton onClick={handleSubmit(onSubmit)}/>             
              <LoginGoogleButton />
              <SignUpLocalButton />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
