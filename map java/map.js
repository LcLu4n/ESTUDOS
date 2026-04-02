const student = [
    { name: "pedro", testGrade: 7 },
    { name: "maria", testGrade: 3 },
    { name: "paulo", testGrade: 9 },
    { name: "jhonny", testGrade: 1 },
    { name: "vitoria", testGrade: 9 },
]

const newStudent = student.map(user => {
    return {
        name: user.name,
        promoted: user.testGrade >= 5 ? 'promovido' : 'reprovado'
    }
})

console.log(newStudent)