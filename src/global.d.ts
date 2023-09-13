declare module '*.png' {
  const content: any
  export = content
}

declare module '*.svg' {
  export const ReactComponent: React.ElementType<React.SVGProps<SVGSVGElement>>

  const content: string
  export default content
}

declare namespace JSX {
  interface IntrinsicElements {
    tt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    li: any
    div: any
    center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  }
}
