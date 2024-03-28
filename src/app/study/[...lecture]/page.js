'use client'
function lecturesPage({params}) {
    console.log(params);
  return (
    <div>
      <h1 className="text-4xl font-bold">{params.lecture[0]}</h1>
      <h2 className="text-4xl font-bold">{params.lecture[1]}</h2>
    </div>
  );
}

export default lecturesPage;