'use client'
const Student = ({params}) => {
    console.log(params);
  return (
    <h1 className="font-bold text-4xl">Name: {params.student}</h1>
  )
}

export default Student