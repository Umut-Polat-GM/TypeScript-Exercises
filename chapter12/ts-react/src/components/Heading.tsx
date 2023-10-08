import { ReactElement } from "react"

type HeadingProps = { title: string }

const Heading = ({title}: HeadingProps): ReactElement => {
  return (
    <div>
        <h3>{title}</h3>
    </div>
  )
}

export default Heading
