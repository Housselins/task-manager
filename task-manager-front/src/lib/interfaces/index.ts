import { HTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { ActionsInsideBar } from '../../presentation/components/organism/ActionsInsideBar';
import { Tasker } from "@/domain/models/Tasker";
import { Task } from "@/domain/models/Task";

/**
 * ButtonProps
 * Interface para el widget boton
 * attributes : buttonType - string - Tipo de boton "primary" | "secondary"
 *              label - string - label del boton
 *              className - string - clase del boton
 *              onClick - void - Evento del boton
 *              disabled - boolean - Boton habilitado true | false
 */
export interface ButtonProps extends HTMLAttributes<HTMLInputElement> {
  buttonType: "primary" | "secondary";
  label: string;
  className: string;
  onClick?: (event: any) => void;
  disabled?: boolean;
}

/**
 * TextProps
 * Interface para el widget text
 * attributes : textType - string - Tipo de texto "title" | "subtitle" | "content"
 *              text - string - Texto
 *              className - string - Clase del text
 */
export interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  textType: "title" | "subtitle" | "content";
  text: string;
  className?: string;
}

/**
 * FormProps
 * Interface para el widget form
 * attributes : initialValues - Object - Campos del fomrulario
 */
export interface FormProps extends HTMLAttributes<HTMLElement> {
  initialValues?: Object;
  validate?: ((values: any) => void | any);
}

/**
 * SelectOption
 * Interface para el widget select
 * attributes : value - string - valor de la opcion del select
 *              label - string - label de la opcion del select
 *              shorthand - string - 
 */
export interface SelectOption {
  value: string;
  label: string;
  shorthand?: string;
}

/**
 * InputProps
 * Interface para el widget input
 * attributes : type - string - tipo de input
 *              name - string - nombre del input
 *              id - string - id del input
 *              placeholder - string - placeholder del input
 *              prefixImage - string - 
 *              className - clase del input
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  id?: string;
  placeholder: string;
  prefixImage?: string;
  className?: string;
}

/**
 * TextSearchInputProps
 * Interface para el widget buscador
 * attributes : id - string - id del buscador
 *              dataType - string - tipo de buscador
 *              decimal - number - numeros decimales
 *              defaultText - string - texto por defecto
 *              step - string - paso
 *              onlyNumbers - boolean - solo numeros true | false
 *              type - string - tipo de input
 *              name - string - nombre del input 
 *              disabled - boolean - input habilitado true | false
 *              disabledButFocusable - boolean focus habilitado true | false
 *              value - string - valor del input
 *              placeholder - string - placeholder del input
 *              label - boolean - label del input true | false
 *              hasIcon - boolean - tiene icono el input true | false
 *              icon - React.ReactNode - icono
 *              className - string - clase del input
 *              classNameText - string - clase name del input
 *              classNameLabel - string - clase label del input
 *              classNameSelect - string - clase name select
 *              basePath - boolean - 
 *              onChange - void - evento del input
 *              defaultOption - string - opciones por defecto
 *              options - SelectOption - opciones 
 */
export interface TextSearchInputProps {
  id?: string;
  dataType?: string;
  decimal?: number;
  defaultText?: string;
  step?: string | number;
  onlyNumbers?: boolean;
  type?: string;
  name?: string;
  disabled?: boolean;
  disabledButFocusable?: boolean;
  value?: string;
  placeholder?: string;
  label?: boolean;
  hasIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
  classNameText?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  basePath?: boolean;
  onChange?: (data: any) => void;
  defaultOption?: string;
  options?: SelectOption[];
}

/**
 * NavActionsProps
 * Interface for navigation inside a module
*  @argument attributes: label - React.ReactNode - label of the action
* 
 * @argument             function: - void - action of the button
 */
export interface NavActionsProps {
  label: React.ReactNode;
  function: () => void;
}
/**
 * ActionsInsideBarProps
 * Interface for Actions inside bar
 * @argument action : NavActionsProps[]
 *             
 * @argument className : HtmlHTMLAttributes<HTMLDivElement> | string
 */
export interface ActionsInsideBarProps {
  action?: NavActionsProps[];
  className?: HtmlHTMLAttributes<HTMLDivElement> | string;
}

/**
 * TaskCardProps
 * Interface para tarjeta de tarea 
 * @argument title : string
 *             
 * @argument status : string
 * @argument tasker : Tasker
 */
export interface TaskCardProps {
  task?: Task;
  tasker?: Tasker;
}