import Link from "next/link"

const StudentList = () => {
    const studentDetails = [
        {
            id: 1,
            name: "Anil",
            age: 20
        },
        {
            id: 2,
            name: "Peter",
            age: 21
        },
        {
            id: 3,
            name: "Sam",
            age: 22
        },
        {
            id: 4,
            name: "John",
            age: 23
        },
        {
            id: 5,
            name: "Tim",
            age: 24
        },
    ]
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            {studentDetails.map((student) => (
                <li key={student.id}>
                    <Link href={`/studentlist/${student.name}`}>
                        {student.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default StudentList