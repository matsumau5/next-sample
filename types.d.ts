/* eslint-disable @typescript-eslint/interface-name-prefix */
declare module '*.scss' {
  type tclassNames = {
    [className: string]: string
  }
  const classNames: tclassNames
  export = classNames
}
